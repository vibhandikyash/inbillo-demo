import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import groupBy from 'lodash.groupby';
import moment from 'moment';
import { AccountService } from 'src/account/account.service';
import { MyLoggerService } from 'src/logger/logger/logger.service';
import { Between, Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';
import { TransactionType } from './enums/transactionType';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
    private readonly accountService: AccountService,
    private readonly logger: MyLoggerService,
  ) {}

  async create(createTransactionDto: CreateTransactionDto) {
    return await this.transactionsRepository.save(createTransactionDto);
  }

  findAll(): Promise<Transaction[]> {
    return this.transactionsRepository.find();
  }

  findOne(id: number): Promise<Transaction> {
    return this.transactionsRepository.findOne(id);
  }

  /**
   *
   * @returns
   */
  @Cron('0 0 * * *')
  async rebalanceAccounts() {
    this.logger.log('running cron');

    const yesterday = moment().subtract(1, 'day').toDate();
    const today = moment().toDate();

    // get all transactions for last financial day.
    const txns = await this.transactionsRepository.find({
      select: ['user', 'amount', 'type', 'user'],
      where: {
        date: Between(yesterday, today),
      },
      relations: ['user'],
    });

    if (txns && txns.length) {
      // group transactions by userid.
      const grouped = groupBy(txns, (txn) => txn.user.id);

      // rebalance accounts with all tranasactions made in last financial day.
      const userBalances = Object.entries(grouped).map(([userId, userTxns]) => {
        const total = userTxns.reduce((total, txn) => {
          return txn.type === TransactionType.Debit
            ? (total -= txn.amount)
            : (total += txn.amount);
        }, 0);
        return { user: Number(userId), total };
      });

      // promise.all for simultaneuos operation
      // Updating final user balance as per the transactions in last financial day.
      Promise.all(
        userBalances.map(({ user, total }) =>
          this.accountService.updateAccountBalance(user, total),
        ),
      )
        .then(() => {
          this.logger.log('rebalanced successfully', 'Transactions');
        })
        .catch((err) => this.logger.log(err, 'Transactions'));
    }

    return txns;
  }
}

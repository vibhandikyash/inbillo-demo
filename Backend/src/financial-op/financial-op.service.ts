import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from 'src/transaction/entities/transaction.entity';
import { TransactionType } from 'src/transaction/enums/transactionType';
import { TransactionService } from 'src/transaction/transaction.service';
// import { Transaction } from 'src/transaction/entities/transaction.entity';
import { Repository } from 'typeorm';
import { CreateFinancialOpDto } from './dto/create-financial-op.dto';
import { FinancialOp } from './entities/financial-op.entity';

@Injectable()
export class FinancialOpService {
  constructor(
    @InjectRepository(FinancialOp)
    private financialOpsRepository: Repository<FinancialOp>,
    private readonly transactionService: TransactionService,
  ) {}

  async create(createFinancialOpDto: CreateFinancialOpDto) {
    const addOpration = await this.financialOpsRepository.save(
      createFinancialOpDto,
    );

    if (addOpration) {
      const { senderId, receiverId, amount, operation }: any =
        createFinancialOpDto;

      const txn = {
        date: new Date(),
        amount,
        remarks: operation,
      };

      await this.transactionService.create({
        ...txn,
        user: senderId,
        type: TransactionType.Debit,
      });

      await this.transactionService.create({
        ...txn,
        user: receiverId,
        type: TransactionType.Credit,
      });
      // const saveSender = await this.transactionsRepository.save({
      //   user: senderId,
      //   type: 'debit',
      //   amount,
      // });
    }

    return await this.financialOpsRepository.save(createFinancialOpDto);
  }

  findAll(): Promise<CreateFinancialOpDto[]> {
    return this.financialOpsRepository.find();
  }

  findOne(id: number): Promise<CreateFinancialOpDto> {
    return this.financialOpsRepository.findOne(id);
  }
}

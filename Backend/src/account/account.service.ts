import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountDto } from './dto/create-account.dto';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountsRepository: Repository<Account>,
  ) {}

  async create(createAccountDto: CreateAccountDto) {
    return await this.accountsRepository.save(createAccountDto);
  }

  findAll(): Promise<Account[]> {
    return this.accountsRepository.find();
  }

  findOne(id: number) {
    return this.accountsRepository.findOne(id);
  }

  update(id: number, updateAccountDto: CreateAccountDto) {
    return this.accountsRepository.update(id, { ...updateAccountDto });
  }

  /**
   * Updates the balanace of user's account
   * @param userId User Id
   * @param balance Updated balance
   * @returns Updated account details
   */
  async updateAccountBalance(userId: number, balance: number) {
    // finding user by if and saving updated account balance.
    const account = await this.accountsRepository.findOne({
      where: { userId },
    });
    account.balance += balance;
    await this.accountsRepository.save(account);
    return account;
  }
}

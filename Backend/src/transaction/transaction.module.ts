import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { Transaction } from './entities/transaction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountService } from 'src/account/account.service';
import { Account } from 'src/account/entities/account.entity';
import { AccountModule } from 'src/account/account.module';
import { LoggerModule } from 'src/logger/logger.module';
import { MyLoggerService } from 'src/logger/logger/logger.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account]),
    TypeOrmModule.forFeature([Transaction]),
    AccountModule,
    LoggerModule,
  ],
  controllers: [TransactionController],
  providers: [TransactionService, AccountService, MyLoggerService],
})
export class TransactionModule {}

import { Module } from '@nestjs/common';
import { FinancialOpService } from './financial-op.service';
import { FinancialOpController } from './financial-op.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancialOp } from './entities/financial-op.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';
import { TransactionModule } from 'src/transaction/transaction.module';
import { TransactionService } from 'src/transaction/transaction.service';
import { AccountService } from 'src/account/account.service';
import { Account } from 'src/account/entities/account.entity';
import { LoggerModule } from 'src/logger/logger.module';
import { MyLoggerService } from 'src/logger/logger/logger.service';

@Module({
  imports: [
    TransactionModule,
    LoggerModule,
    TypeOrmModule.forFeature([FinancialOp]),
    TypeOrmModule.forFeature([Transaction]),
    TypeOrmModule.forFeature([Account]),
  ],
  controllers: [FinancialOpController],
  providers: [
    FinancialOpService,
    AccountService,
    TransactionService,
    MyLoggerService,
  ],
})
export class FinancialOpModule {}

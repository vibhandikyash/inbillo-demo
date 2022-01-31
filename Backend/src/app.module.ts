import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AccountModule } from './account/account.module';
import { TransactionModule } from './transaction/transaction.module';
import { FinancialOpModule } from './financial-op/financial-op.module';
import { ScheduleModule } from '@nestjs/schedule';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ScheduleModule.forRoot(),
    UserModule,
    AccountModule,
    TransactionModule,
    FinancialOpModule,
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

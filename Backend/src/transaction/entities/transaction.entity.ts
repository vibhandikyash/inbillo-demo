import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TransactionType } from '../enums/transactionType';

@Entity('Transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;

  @Column({ type: Date })
  date: Date;

  @Column({ type: Number })
  amount: number;

  @Column()
  remarks: string;

  @Column()
  type: TransactionType;

  @CreateDateColumn()
  created_at: Date;
}

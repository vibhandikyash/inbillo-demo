import { User } from 'src/user/entities/user.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity('FinancialOp')
export class FinancialOp {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'sender', referencedColumnName: 'id' })
  senderId: User;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'receiver', referencedColumnName: 'id' })
  receiverId: User;

  @Column()
  amount: number;

  @Column()
  description: string;

  @Column()
  operation: string;
}

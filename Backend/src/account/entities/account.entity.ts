import { User } from 'src/user/entities/user.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity('Accounts')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;
  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  userId: User;
  @Column()
  balance: number;
  @Column()
  bankAccountNumber: string;
  @Column()
  bankName: string;
  @Column()
  type: string;
  @Column()
  idActive: boolean;
}

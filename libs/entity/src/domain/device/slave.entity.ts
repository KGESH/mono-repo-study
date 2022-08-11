import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Master } from '@app/entity/domain/device/master.entity';

@Entity('slaves')
export class Slave {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @JoinColumn()
  @ManyToOne((type) => Master, (master) => master.slaves)
  master: Master;
}

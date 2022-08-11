import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Slave } from '@app/entity/domain/device/slave.entity';

@Entity('masters')
export class Master {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @OneToMany((type) => Slave, (slave) => slave.master)
  slaves: Slave[];
}

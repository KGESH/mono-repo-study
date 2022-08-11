import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Master } from '@app/entity/domain/device/master.entity';
import { Repository } from 'typeorm';
import { Slave } from '@app/entity/domain/device/slave.entity';

@Injectable()
export class ApiDeviceService {
  constructor(
    @InjectRepository(Master)
    private readonly masterRepository: Repository<Master>,
    @InjectRepository(Slave)
    private readonly slaveRepository: Repository<Slave>,
  ) {}

  createMaster() {
    const master = this.masterRepository.create({ address: `hello` });

    return this.masterRepository.save(master);
  }

  async createSlave() {
    const master = await this.masterRepository.findOneBy({ id: 1 });
    const slave = this.slaveRepository.create({ master, name: 'jee' });
    return this.slaveRepository.save(slave);
  }

  getSlave() {
    return this.slaveRepository.findOneBy({ id: 1 });
  }
}

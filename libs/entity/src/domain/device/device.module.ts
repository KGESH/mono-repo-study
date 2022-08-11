import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Master } from '@app/entity/domain/device/master.entity';
import { Slave } from '@app/entity/domain/device/slave.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Master, Slave])],
  exports: [TypeOrmModule],
})
export class DeviceModule {}

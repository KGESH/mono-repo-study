import { Module } from '@nestjs/common';
import { DeviceModule } from '@app/entity/domain/device/device.module';
import { ApiDeviceController } from './device.controller';
import { ApiDeviceService } from './device.service';

@Module({
  imports: [DeviceModule],
  controllers: [ApiDeviceController],
  providers: [ApiDeviceService],
})
export class ApiDeviceModule {}

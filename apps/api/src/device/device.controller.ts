import { Controller, Get, Post } from '@nestjs/common';
import { ApiDeviceService } from './device.service';

@Controller('device')
export class ApiDeviceController {
  constructor(private readonly deviceService: ApiDeviceService) {}

  @Post('master')
  async createMaster() {
    const master = await this.deviceService.createMaster();

    console.log(`master: `, master);
    return master;
  }

  @Post('slave')
  async createSlave() {
    const slave = await this.deviceService.createSlave();

    console.log(`slave: `, slave);
    return slave;
  }

  @Get('slave')
  async getSlave() {
    const slave = await this.deviceService.getSlave();
    console.log(`found: `, slave);

    return slave;
  }
}

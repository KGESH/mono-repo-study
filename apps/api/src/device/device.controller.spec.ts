import { Test, TestingModule } from '@nestjs/testing';
import { ApiDeviceController } from './device.controller';

describe('DeviceController', () => {
  let controller: ApiDeviceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiDeviceController],
    }).compile();

    controller = module.get<ApiDeviceController>(ApiDeviceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

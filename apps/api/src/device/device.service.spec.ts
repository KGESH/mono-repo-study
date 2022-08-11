import { Test, TestingModule } from '@nestjs/testing';
import { ApiDeviceService } from './device.service';

describe('DeviceService', () => {
  let service: ApiDeviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiDeviceService],
    }).compile();

    service = module.get<ApiDeviceService>(ApiDeviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

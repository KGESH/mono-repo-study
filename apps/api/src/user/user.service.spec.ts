import { Test, TestingModule } from '@nestjs/testing';
import { ApiUserService } from './user.service';

describe('UserService', () => {
  let service: ApiUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiUserService],
    }).compile();

    service = module.get<ApiUserService>(ApiUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

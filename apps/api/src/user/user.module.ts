import { Module } from '@nestjs/common';
import { UserModule } from '@app/entity/domain/user/user.module';
import { ApiUserController } from './user.controller';
import { ApiUserService } from './user.service';
import { UserApiQueryRepository } from './user.repository';

@Module({
  imports: [UserModule],
  controllers: [ApiUserController],
  providers: [ApiUserService, UserApiQueryRepository],
})
export class ApiUserModule {}

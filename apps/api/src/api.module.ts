import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { ApiUserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiUserController } from './user/user.controller';
import { ApiDeviceModule } from './device/device.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'postgres',
      password: '789456',
      database: 'test',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }),
    ApiUserModule,
    ApiDeviceModule,
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}

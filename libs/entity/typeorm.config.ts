import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';

export function getPgRealTypeOrmModule() {
  const entityPath = path.join(__dirname, 'src/domain/**/*.entity.ts');
  return TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5434,
    username: 'postgres',
    password: '789456',
    database: 'test',
    entities: [entityPath],
    autoLoadEntities: true,
    synchronize: true,
  });
}

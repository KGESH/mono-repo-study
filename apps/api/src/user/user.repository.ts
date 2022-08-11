import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from '@app/entity/domain/user/user.entity';

@Injectable()
export class UserApiQueryRepository {
  constructor(private dataSource: DataSource) {}

  getUserById(id: number) {
    return this.dataSource.getRepository(User).findOne({ where: { id } });
  }

  getUserDatas(id: number) {
    /** 쿼리 짜는 예제 */
    return (
      this.dataSource
        .getRepository(User)
        .createQueryBuilder()
        .select()
        // .where();
        .getRawOne()
    );
  }
}

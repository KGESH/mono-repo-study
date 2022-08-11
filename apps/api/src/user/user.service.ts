import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '@app/entity/domain/user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './dto/user.dto';
import { UserApiQueryRepository } from './user.repository';

@Injectable()
export class ApiUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly userApiQueryRepository: UserApiQueryRepository,
  ) {}

  createUser(userDto: UserDto) {
    const { email, password } = userDto;
    const user = this.userRepository.create({ email, password });
    return this.userRepository.save(user);
  }

  findUser(id: number) {
    return this.userApiQueryRepository.getUserById(id);
  }
}

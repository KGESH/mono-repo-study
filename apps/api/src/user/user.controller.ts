import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiUserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { User } from '@app/entity/domain/user/user.entity';

@Controller('user')
export class ApiUserController {
  constructor(private readonly userService: ApiUserService) {}

  @Post()
  async createUser(@Body() userDto: UserDto): Promise<User> {
    const user = await this.userService.createUser(userDto);

    console.log(`Create user: `, user);

    return user;
  }

  @Get()
  async getUser(@Query('id') id: number): Promise<User> {
    const user = await this.userService.findUser(id);
    console.log(`Found: `, user);

    return user;
  }
}

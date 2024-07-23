import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserPresenter } from './user-presenter';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiTags('Users')
  @Post()
  async create(@Body() data: CreateUserDto) {
    const user = await this.usersService.createUser(data);
    return new UserPresenter(user);
  }
}

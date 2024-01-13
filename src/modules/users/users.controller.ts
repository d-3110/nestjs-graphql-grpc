import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaPromise } from '@prisma/client';
import { User } from './entities/user.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  index(): PrismaPromise<User[]> {
    return this.usersService.findAll();
  }
}

import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
// import { User } from './entities/user.entity';

import {
  FindAllResponse,
  UserServiceController,
  // UserServiceControllerMethods,
} from '../../grpc/user';
// import { Observable, Subject } from 'rxjs';
// import { User } from './entities/user.entity';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('users_grpc')
export class UsersGrpcController implements UserServiceController {
  constructor(private readonly usersService: UsersService) {}

  @GrpcMethod('UserService')
  async findAll(): Promise<FindAllResponse> {
    const users = await this.usersService.findAll();
    const response = { users: [] };
    for (const user of users) {
      response.users.push({
        id: user.id,
        name: user.name,
        email: user.email,
      });
    }
    return response;
  }
}

import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { FindAllResponse, UserServiceController } from '../../grpc/user';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('users-grpc')
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

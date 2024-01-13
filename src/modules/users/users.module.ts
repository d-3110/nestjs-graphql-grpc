import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersGrpcController } from './users-grpc.controller';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  controllers: [UsersController, UsersGrpcController],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}

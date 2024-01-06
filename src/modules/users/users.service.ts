import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'nestjs-prisma';
import { PrismaPromise } from '@prisma/client';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  create(input: CreateUserInput): PrismaPromise<User> {
    return this.prisma.user.create({
      data: {
        email: input.email,
        name: input.name,
        password: input.password,
      },
    });
  }

  findAll(): PrismaPromise<User[]> {
    return this.prisma.user.findMany({});
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, input: UpdateUserInput) {
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: {
        email: input.email,
        name: input.name,
        password: input.password,
      },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }
}

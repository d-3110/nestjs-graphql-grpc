import { Injectable } from '@nestjs/common';
import { CreateMealInput } from './dto/create-meal.input';
import { UpdateMealInput } from './dto/update-meal.input';
import { PrismaService } from 'nestjs-prisma';
import { PrismaPromise } from '@prisma/client';
import { Meal } from './entities/meal.entity';

@Injectable()
export class MealsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createMealInput: CreateMealInput) {
    return 'This action adds a new meal';
  }

  findAll(): PrismaPromise<Meal[]> {
    return this.prisma.meal.findMany({
      include: {
        _count: {
          select: {
            meal_tags: {},
            histories: {},
          },
        },
        meal_tags: {
          include: {
            tags: {},
          },
        },
        histories: {},
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} meal`;
  }

  update(id: number, updateMealInput: UpdateMealInput) {
    return `This action updates a #${id} meal`;
  }

  remove(id: number) {
    return `This action removes a #${id} meal`;
  }
}

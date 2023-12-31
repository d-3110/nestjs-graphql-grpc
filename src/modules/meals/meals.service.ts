import { Injectable } from '@nestjs/common';
import { CreateMealInput } from './dto/create-meal.input';
import { UpdateMealInput } from './dto/update-meal.input';

@Injectable()
export class MealsService {
  create(createMealInput: CreateMealInput) {
    return 'This action adds a new meal';
  }

  findAll() {
    return `This action returns all meals`;
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

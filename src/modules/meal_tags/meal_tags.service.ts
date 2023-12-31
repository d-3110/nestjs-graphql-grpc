import { Injectable } from '@nestjs/common';
import { CreateMealTagInput } from './dto/create-meal_tag.input';
import { UpdateMealTagInput } from './dto/update-meal_tag.input';

@Injectable()
export class MealTagsService {
  create(createMealTagInput: CreateMealTagInput) {
    return 'This action adds a new mealTag';
  }

  findAll() {
    return `This action returns all mealTags`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mealTag`;
  }

  update(id: number, updateMealTagInput: UpdateMealTagInput) {
    return `This action updates a #${id} mealTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} mealTag`;
  }
}

import { Controller, Get } from '@nestjs/common';
import { MealsService } from './meals.service';
import { PrismaPromise } from '@prisma/client';
import { Meal } from './entities/meal.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Meals')
@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Get()
  index(): PrismaPromise<Meal[]> {
    return this.mealsService.findAll();
  }
}

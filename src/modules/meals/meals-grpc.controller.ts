import { Controller } from '@nestjs/common';
import { MealsService } from './meals.service';
import { FindAllResponse, MealServiceController } from '../../grpc/meal';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('meals_grpc')
export class MealsGrpcController implements MealServiceController {
  constructor(private readonly mealsService: MealsService) {}

  @GrpcMethod('MealService')
  async findAll(): Promise<FindAllResponse> {
    const meals = await this.mealsService.findAll();
    const response = { meals: [] };
    for (const meal of meals) {
      console.log('meal tag');
      console.log(meal.meal_tags);
      console.log('created_at');
      console.log(meal.created_at.toISOString());
      response.meals.push({
        id: meal.id,
        type: meal.type,
        name: meal.name,
        note: meal.note,
        created_at: { second: meal.created_at },
        updated_at: meal.updated_at.toISOString(),
        meal_tags: meal.meal_tags,
        histories: meal.histories,
        count: meal._count,
      });
    }
    return response;
  }
}

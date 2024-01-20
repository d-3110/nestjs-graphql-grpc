import { Controller } from '@nestjs/common';
import { TimestampUtils } from 'src/common/utils/timestamp.utils';
import { MealsService } from './meals.service';
import { FindAllResponse, MealServiceController } from '../../grpc/meal';
import { GrpcMethod } from '@nestjs/microservices';
import { History as GrpcHistory } from '../../grpc/history';
import { Tag as GrpcTag } from '../../grpc/tag';
import { History } from '../histories/entities/history.entity';
import { MealTag } from '../meal_tags/entities/meal_tag.entity';

@Controller('meals_grpc')
export class MealsGrpcController implements MealServiceController {
  constructor(
    private readonly mealsService: MealsService,
    private readonly timestampUtils: TimestampUtils,
  ) {}

  @GrpcMethod('MealService')
  async findAll(): Promise<FindAllResponse> {
    const meals = await this.mealsService.findAll();
    const response = { meals: [] };
    for (const meal of meals) {
      response.meals.push({
        id: meal.id,
        type: meal.type,
        name: meal.name,
        note: meal.note,
        createdAt: this.timestampUtils.convertToTimestamp(meal.created_at),
        updatedAt: this.timestampUtils.convertToTimestamp(meal.updated_at),
        tags: this.tagsResponse(meal.meal_tags),
        histories: this.historiesResponse(meal.histories),
        count: meal._count,
      });
    }
    return response;
  }

  historiesResponse(histories: History[]): GrpcHistory[] {
    const response = [];
    for (const history of histories) {
      response.push({
        createdAt: this.timestampUtils.convertToTimestamp(history.created_at),
      });
    }
    return response;
  }

  tagsResponse(meal_tags: MealTag[]): GrpcTag[] {
    const response = [];
    for (const meal_tag of meal_tags) {
      response.push({
        name: meal_tag.tag.name,
      });
    }
    return response;
  }
}

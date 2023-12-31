import { Module } from '@nestjs/common';
import { MealTagsService } from './meal_tags.service';
import { MealTagsResolver } from './meal_tags.resolver';

@Module({
  providers: [MealTagsResolver, MealTagsService],
})
export class MealTagsModule {}

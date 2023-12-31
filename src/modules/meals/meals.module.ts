import { Module } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealsResolver } from './meals.resolver';

@Module({
  providers: [MealsResolver, MealsService],
})
export class MealsModule {}

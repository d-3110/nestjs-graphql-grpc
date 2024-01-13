import { Module } from '@nestjs/common';
import { MealsController } from './meals.controller';
import { MealsGrpcController } from './meals-grpc.controller';
import { MealsService } from './meals.service';
import { MealsResolver } from './meals.resolver';

@Module({
  controllers: [MealsController, MealsGrpcController],
  providers: [MealsResolver, MealsService],
})
export class MealsModule {}

import { CreateMealInput } from './create-meal.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMealInput extends PartialType(CreateMealInput) {
  @Field(() => Int)
  id: number;
}

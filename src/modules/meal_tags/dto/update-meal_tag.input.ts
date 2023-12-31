import { CreateMealTagInput } from './create-meal_tag.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMealTagInput extends PartialType(CreateMealTagInput) {
  @Field(() => Int)
  id: number;
}

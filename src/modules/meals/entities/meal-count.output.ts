import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MealCount {
  @Field(() => Int, { nullable: false })
  meal_tags?: number;

  @Field(() => Int, { nullable: false })
  histories?: number;
}

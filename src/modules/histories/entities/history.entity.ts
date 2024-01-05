import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Meal } from '../../meals/entities/meal.entity';

@ObjectType()
export class History {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  meal_id!: number;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;

  @Field(() => Meal, { nullable: false })
  meals?: Meal;
}

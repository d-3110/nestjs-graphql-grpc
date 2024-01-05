import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MealTag } from '../../meal_tags/entities/meal_tag.entity';
import { History } from '../../histories/entities/history.entity';
import { MealCount } from '../../meals/entities/meal-count.output';

@ObjectType()
export class Meal {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  type!: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  note!: string | null;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;

  @Field(() => [MealTag], { nullable: true })
  meal_tags?: Array<MealTag>;

  @Field(() => [History], { nullable: true })
  histories?: Array<History>;

  @Field(() => MealCount, { nullable: false })
  _count?: MealCount;
}

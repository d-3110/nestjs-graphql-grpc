import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MealTag } from '../../meal_tags/entities/meal_tag.entity';
import { TagCount } from '../../tags/entities/tag-count.output';

@ObjectType()
export class Tag {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;

  @Field(() => [MealTag], { nullable: true })
  meal_tags?: Array<MealTag>;

  @Field(() => TagCount, { nullable: false })
  _count?: TagCount;
}

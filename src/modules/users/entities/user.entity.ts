import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @HideField()
  password!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: false })
  updated_at!: Date;
}

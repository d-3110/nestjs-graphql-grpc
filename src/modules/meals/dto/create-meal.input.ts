import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMealInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

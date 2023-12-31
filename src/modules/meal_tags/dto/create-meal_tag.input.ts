import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMealTagInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}

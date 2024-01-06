import { CreateUserInput } from './create-user.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => ID)
  id: number;
  @Field(() => String, { nullable: true })
  email: string;
  @Field(() => String, { nullable: true })
  name: string;
  @Field(() => String, { nullable: true })
  password: string;
}

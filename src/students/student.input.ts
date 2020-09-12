import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class StudentInput {
  @Field()
  readonly name: string;
  @Field()
  readonly age: number;
  @Field()
  readonly email: string;
  @Field()
  readonly course: number;
}

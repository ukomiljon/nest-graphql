import { Field, ObjectType, ID } from "@nestjs/graphql";

@ObjectType()
export class StudentType{
    @Field(()=>ID)
    id:string
    @Field()
    name:string
    @Field()
    age:number
    @Field()
    email:string
    @Field()
    course:number
}
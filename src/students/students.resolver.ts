import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentType } from './student.dto';
import { StudentInput } from './student.input'; 
import { StudentsService } from './students.service';

@Resolver('students')
export class StudentsResolver {
  constructor(private readonly studentsService: StudentsService) {}

  @Query(() => [StudentType])
  async students() {
    return this.studentsService.getAll();
  }

  @Mutation(() => StudentType)
  async createStudent(@Args('input') input: StudentInput) {
    return this.studentsService.create(input);
  }
}

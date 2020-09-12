import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsResolver } from './students.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Students',
        schema: StudentSchema,
      },
    ]),
  ],
  providers: [StudentsService, StudentsResolver]  
})
export class StudentsModule {}

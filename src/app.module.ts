import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
 
@Module({
  imports: [StudentsModule,
  MongooseModule.forRoot('mongodb://localhost/education-db',{ }),
  GraphQLModule.forRoot({autoSchemaFile:'schema.gql'})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

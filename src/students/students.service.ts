import { Injectable } from '@nestjs/common';
import { Student } from './student.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel('Students')
    private readonly studentModel: Model<Student>,
  ) {}

  async getAll(): Promise<Student[]> {
    return await this.studentModel.find();
  }

  async get(id: string): Promise<Student> {
    return await this.studentModel.findById(id);
  }

  async create(student: Student): Promise<Student> {
    return await new this.studentModel(student).save();
  }
}

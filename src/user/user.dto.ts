import { ObjectId } from 'mongoose';

export class UserDto {
  readonly _id: ObjectId;
  readonly index: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly dateOfBirth: Date;
  readonly avatar: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
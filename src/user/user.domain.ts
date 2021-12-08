import { BadRequestException } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';

export class User extends AggregateRoot {
  constructor(
    private readonly _id: string,
    private readonly firstName: string,
    private readonly lastName: string,
    private readonly dateOfBirth: Date,
    private readonly avatar: string,
    private readonly index?: number,
    private readonly createdAt?: Date,
    private readonly updatedAt?: Date,
  ) {
    super();
  }

  getId(): string {
    return this._id;
  }

  getIndex(): number {
    return this.index
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getDOB(): Date {
    return this.dateOfBirth;
  }

  getAvatar(): string {
    return this.avatar;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }
}
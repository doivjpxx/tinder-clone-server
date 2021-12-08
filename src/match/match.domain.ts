import { AggregateRoot } from '@nestjs/cqrs';
import { ObjectId } from 'mongodb';

export class Match extends AggregateRoot {
  constructor(
    private readonly _id: string,
    private readonly recId: number,
    private readonly userRecId: number,
    private readonly action: number,
    private readonly matchWith: number,
    private readonly createdAt?: Date,
    private readonly updatedAt?: Date,
  ) {
    super();
  }

  getId(): string {
    return this._id;
  }

  getRecId(): number {
    return this.recId;
  }

  getUserRecId(): number {
    return this.userRecId;
  }

  getAction(): number {
    return this.action;
  }

  getMatchWith(): number {
    return this.matchWith;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }
}
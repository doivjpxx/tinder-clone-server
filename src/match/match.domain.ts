import { AggregateRoot } from '@nestjs/cqrs';
import { ObjectId } from 'mongodb';

export class Match extends AggregateRoot {
  constructor(
    private readonly _id: string,
    private readonly index: number,
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

  getIndex(): number {
    return this.index
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
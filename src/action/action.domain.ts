import { AggregateRoot } from '@nestjs/cqrs';

export class Action extends AggregateRoot {
  constructor(
    private readonly _id: string,
    private readonly index: number,
    private readonly type: string,
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

  getType(): string {
    return this.type;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }
}
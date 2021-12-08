import { Logger } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import { ObjectId } from 'mongodb';
import { FilterQuery } from 'mongoose';
import { EntityRepository } from './entity.repository';

import { IdentifiableEntitySchema } from './identifiable-entity.schema';

export abstract class BaseEntityRepository<
  TSchema extends IdentifiableEntitySchema,
  TEntity extends AggregateRoot
  > extends EntityRepository<TSchema, TEntity> {

  async findOneById(id: string): Promise<TEntity> {
    return this.findOne({ _id: new ObjectId(id) } as FilterQuery<TSchema>);
  }

  async findAll(): Promise<TEntity[]> {
    return this.find({});
  }

  async updateById(id: string, entity: TEntity): Promise<void> {
    return await this.update(id, entity);
  }

  async deleteById(id: string): Promise<void> {
    return await this.delete(id);
  }
}

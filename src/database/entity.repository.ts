import { Inject, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import {
  FilterQuery,
  Model,
} from 'mongoose';

import { EntitySchemaFactory } from './entity-schema.factory';
import { IdentifiableEntitySchema } from './identifiable-entity.schema';

export abstract class EntityRepository<
  TSchema extends IdentifiableEntitySchema,
  TEntity extends AggregateRoot
  > {

  private readonly logger = new Logger();
  constructor(
    protected readonly entityModel: Model<TSchema>,
    protected readonly entitySchemaFactory: EntitySchemaFactory<
      TSchema,
      TEntity
    >,
  ) { }

  protected async findOne(
    entityFilterQuery?: FilterQuery<TSchema>,
  ): Promise<TEntity> {
    try {
      this.logger.log(`[FIND ONE]::${this.entityModel.modelName} was calling...`)
      const entityDocument = await this.entityModel.findOne(
        entityFilterQuery,
        {},
        { lean: true },
      );
  
      if (!entityDocument) {
        this.logger.warn(`[FIND ONE]::${this.entityModel.modelName} called fail.`)
        throw new NotFoundException('Entity was not found.');
      }
  
      this.logger.log(`[FIND ONE]::${this.entityModel.modelName} called successfully.`)
      return this.entitySchemaFactory.createFromSchema(entityDocument);
    } catch (err) {
      this.logger.warn(`[FIND ONE]::${this.entityModel.modelName} called fail.`)
      throw new InternalServerErrorException(err.message);
    }
  }

  protected async find(
    entityFilterQuery?: FilterQuery<TSchema>,
  ): Promise<TEntity[]> {
    try {
      this.logger.log(`[FIND]::${this.entityModel.modelName} was calling...`)
      const results = await this.entityModel.find(entityFilterQuery, {}, { lean: true });

      this.logger.log(`[FIND]::${this.entityModel.modelName} called successfully.`)
      return results.map(entityDocument =>
        this.entitySchemaFactory.createFromSchema(entityDocument),
      );
    } catch (err) {
      this.logger.warn(`[FIND]::${this.entityModel.modelName} called fail.`)
      throw new InternalServerErrorException(err.message);
    }
  }

  async create(entity: TEntity): Promise<void> {
    await new this.entityModel(this.entitySchemaFactory.create(entity)).save();
  }

  async update(_id: string, entity: TEntity): Promise<void> {
    await this.entityModel.updateOne({ _id, ...entity });
  }

  async delete(_id: string): Promise<void> {
    await this.entityModel.remove({ _id });
  }
}
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseEntityRepository } from 'src/database/base-entity.repository';
import { Action } from 'src/action/action.domain';
import { ActionSchemaFactory } from './action-schema.factory';
import { ActionSchema } from './action.schema';


@Injectable()
export class ActionEntityRepository extends BaseEntityRepository<ActionSchema, Action> {
  constructor(
    @InjectModel(ActionSchema.name)
    ActionModel: Model<ActionSchema>,
    ActionSchemaFactory: ActionSchemaFactory,
  ) {
    super(ActionModel, ActionSchemaFactory);
  }
}

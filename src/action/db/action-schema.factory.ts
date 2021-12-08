import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { EntitySchemaFactory } from 'src/database/entity-schema.factory';
import { Action } from '../action.domain';

import { ActionSchema } from './action.schema';

@Injectable()
export class ActionSchemaFactory
  implements EntitySchemaFactory<ActionSchema, Action> {
  create(action: Action): ActionSchema {
    return {
      _id: new ObjectId(action.getId()),
      index: action.getIndex(),
      type: action.getType(),
      createdAt: action.getCreatedAt(),
      updatedAt: action.getUpdatedAt(),
    };
  }

  createFromSchema(actionSchema: ActionSchema): Action {
    return new Action(
      actionSchema._id.toHexString(),
      actionSchema.index,
      actionSchema.type,
      actionSchema.createdAt,
      actionSchema.updatedAt,
    );
  }
}

import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';

import { EntityFactory } from '../database/entity.factory';
import { ActionEntityRepository } from './db/action-entity.repository';
import { Action } from './action.domain';
import { ActionCreatedEvent } from './events/action-created.event';

@Injectable()
export class ActionFactory implements EntityFactory<Action> {
  constructor(
    private readonly actionEntityRepository: ActionEntityRepository,
  ) { }

  async create(
    index: number,
    type: string,
  ): Promise<Action> {
    const action = new Action(
      new ObjectId().toHexString(),
      index,
      type,
    );
    await this.actionEntityRepository.create(action);
    action.apply(new ActionCreatedEvent(action.getId()));
    return action;
  }
}
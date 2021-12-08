import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';

import { EntityFactory } from '../database/entity.factory';
import { Match } from './match.domain';
import { MatchCreatedEvent } from './events/match-created.event';
import { MatchEntityRepository } from './db/match-entity.repository';

@Injectable()
export class MatchFactory implements EntityFactory<Match> {
  constructor(
    private readonly matchEntityRepository: MatchEntityRepository,
  ) { }

  async create(
    userRecId: number,
    action: number,
    matchWith: number,
  ): Promise<Match> {
    const count = await this.matchEntityRepository.count();
    const match = new Match(
      new ObjectId().toHexString(),
      count,
      userRecId,
      action,
      matchWith,
    );
    await this.matchEntityRepository.create(match);
    match.apply(new MatchCreatedEvent(match.getId()));
    return match;
  }
}
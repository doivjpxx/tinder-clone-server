import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { EntitySchemaFactory } from 'src/database/entity-schema.factory';
import { Match } from '../match.domain';

import { MatchSchema } from './match.schema';

@Injectable()
export class MatchSchemaFactory
  implements EntitySchemaFactory<MatchSchema, Match> {
  create(match: Match): MatchSchema {
    return {
      _id: new ObjectId(match.getId()),
      recId: match.getRecId(),
      userRecId: match.getUserRecId(),
      action: match.getAction(),
      matchWith: match.getMatchWith(),
      createdAt: match.getCreatedAt(),
      updatedAt: match.getUpdatedAt(),
    };
  }

  createFromSchema(matchSchema: MatchSchema): Match {
    return new Match(
      matchSchema._id.toHexString(),
      matchSchema.recId,
      matchSchema.userRecId,
      matchSchema.action,
      matchSchema.matchWith,
      matchSchema.createdAt,
      matchSchema.updatedAt,
    );
  }
}

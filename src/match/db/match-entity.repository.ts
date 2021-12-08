import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseEntityRepository } from 'src/database/base-entity.repository';
import { Match } from 'src/match/match.domain';
import { MatchSchemaFactory } from './match-schema.factory';
import { MatchSchema } from './match.schema';


@Injectable()
export class MatchEntityRepository extends BaseEntityRepository<MatchSchema, Match> {
  constructor(
    @InjectModel(MatchSchema.name)
    matchModel: Model<MatchSchema>,
    matchSchemaFactory: MatchSchemaFactory,
  ) {
    super(matchModel, matchSchemaFactory);
  }
}

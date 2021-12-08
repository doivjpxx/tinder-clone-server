import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { MongooseModule, SchemaFactory } from "@nestjs/mongoose";
import { MatchCommandHandlers } from "./commands";
import { MatchDtoRepository } from "../match/db/match-dto.repository";
import { MatchFactory } from "../match/match.factory";
import { MatchSchemaFactory } from "./db/match-schema.factory";
import { MatchEntityRepository } from "./db/match-entity.repository";
import { MatchSchema } from "./db/match.schema";
import { MatchQueryHandlers } from "./queries";

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: MatchSchema.name,
        schema: SchemaFactory.createForClass(MatchSchema),
      }
    ]),
  ],
  controllers: [],
  providers: [
    MatchEntityRepository,
    MatchDtoRepository,
    MatchSchemaFactory,
    MatchFactory,
    ...MatchCommandHandlers,
    ...MatchQueryHandlers,
  ],
  exports: [
    MatchDtoRepository,
    MatchEntityRepository,
  ]
})
export class MatchModule { }
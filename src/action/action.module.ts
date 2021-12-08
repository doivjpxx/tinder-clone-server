import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { MongooseModule, SchemaFactory } from "@nestjs/mongoose";

import { MatchModule } from "src/match/match.module";
import { ActionFactory } from "./action.factory";
import { ActionDtoRepository } from "./db/action-dto.repository";
import { ActionEntityRepository } from "./db/action-entity.repository";
import { ActionSchemaFactory } from "./db/action-schema.factory";
import { ActionSchema } from "./db/action.schema";

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: ActionSchema.name,
        schema: SchemaFactory.createForClass(ActionSchema),
      },
    ]),
    MatchModule,
  ],
  controllers: [],
  providers: [
    ActionEntityRepository,
    ActionDtoRepository,
    ActionSchemaFactory,
    ActionFactory,
    // ...UserCommandHandlers,
    // ...UserQueryHandlers,
  ],
  exports: [
    ActionEntityRepository,
    ActionDtoRepository,
  ]
})
export class ActionModule { }
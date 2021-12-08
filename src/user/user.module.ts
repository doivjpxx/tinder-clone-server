import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { MongooseModule, SchemaFactory } from "@nestjs/mongoose";
import { UserCommandHandlers } from "./commands";
import { UserDtoRepository } from "./db/user-dto.repository";
import { UserController } from "./user.controller";
import { UserFactory } from "./user.factory";
import { UserQueryHandlers } from "./queries";
import { UserSchema } from "./db/user.schema";
import { UserEntityRepository } from "./db/user-entity.repository";
import { UserSchemaFactory } from "./db/user-schema.factory";
import { MatchModule } from "src/match/match.module";
import { ActionModule } from "src/action/action.module";
import { UserEventHandlers } from "./events";
import { MatchFactory } from "src/match/match.factory";

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: UserSchema.name,
        schema: SchemaFactory.createForClass(UserSchema),
      },
    ]),
    ActionModule,
    MatchModule,
  ],
  controllers: [UserController],
  providers: [
    UserEntityRepository,
    UserDtoRepository,
    UserSchemaFactory,
    UserFactory,
    MatchFactory,
    ...UserCommandHandlers,
    ...UserEventHandlers,
    ...UserQueryHandlers,
  ],
})
export class UserModule { }
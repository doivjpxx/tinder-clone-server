import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { EntitySchemaFactory } from 'src/database/entity-schema.factory';
import { User } from 'src/user/user.domain';

import { UserSchema } from './user.schema';

@Injectable()
export class UserSchemaFactory
  implements EntitySchemaFactory<UserSchema, User> {
  create(user: User): UserSchema {
    return {
      _id: new ObjectId(user.getId()),
      recId: user.getRecId(),
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      dateOfBirth: user.getDOB(),
      avatar: user.getAvatar(),
      createdAt: user.getCreatedAt(),
      updatedAt: user.getUpdatedAt(),
    };
  }

  createFromSchema(userSchema: UserSchema): User {
    return new User(
      userSchema._id.toHexString(),
      userSchema.firstName,
      userSchema.lastName,
      userSchema.dateOfBirth,
      userSchema.avatar,
      userSchema.recId,
      userSchema.createdAt,
      userSchema.updatedAt,
    );
  }
}

import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';

import { EntityFactory } from '../database/entity.factory';
import { UserEntityRepository } from './db/user-entity.repository';
import { UserCreatedEvent } from './events/user-created.event';
import { User } from './user.domain';

@Injectable()
export class UserFactory implements EntityFactory<User> {
  constructor(
    private readonly userEntityRepository: UserEntityRepository,
  ) { }

  async create(
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    avatar: string,
    recId: number,
  ): Promise<User> {
    const user = new User(
      new ObjectId().toHexString(),
      firstName,
      lastName,
      dateOfBirth,
      avatar,
      recId,
    );
    await this.userEntityRepository.create(user);
    user.apply(new UserCreatedEvent(user.getId()));
    return user;
  }
}
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { UserSchema } from './user.schema';

@Injectable()
export class UserDtoRepository {
  constructor(
    @InjectModel(UserSchema.name)
    private readonly userModel: Model<UserSchema>,
  ) { }

  async find(entity: FilterQuery<UserSchema>): Promise<any> {
    return await this.userModel.find(entity);
  }
}
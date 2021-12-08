import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { FilterQuery, Model } from 'mongoose';
import { UserDto } from 'src/user/user.dto';
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
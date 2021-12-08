import { Prop } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';

export abstract class IdentifiableEntitySchema {
  @Prop()
  readonly _id: ObjectId;

  @Prop({ default: Date.now })
  readonly createdAt: Date;

  @Prop({ default: Date.now })
  readonly updatedAt: Date;
}

import { Prop, Schema } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { IdentifiableEntitySchema } from 'src/database/identifiable-entity.schema';

@Schema({ versionKey: false, collection: 'matches' })
export class MatchSchema extends IdentifiableEntitySchema {
  @Prop()
  readonly recId: number;

  @Prop()
  readonly userRecId: number;

  @Prop()
  readonly action: number;

  @Prop()
  readonly matchWith: number;
}

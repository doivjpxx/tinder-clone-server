import { Prop, Schema } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/database/identifiable-entity.schema';

@Schema({ versionKey: false, collection: 'users' })
export class UserSchema extends IdentifiableEntitySchema {
  @Prop()
  readonly recId: number;

  @Prop()
  readonly firstName: string;

  @Prop()
  readonly lastName: string;

  @Prop()
  readonly dateOfBirth: Date;

  @Prop()
  readonly avatar: string;
}

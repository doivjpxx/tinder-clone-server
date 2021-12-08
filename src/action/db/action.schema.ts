import { Prop, Schema } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/database/identifiable-entity.schema';

@Schema({ versionKey: false, collection: 'actions' })
export class ActionSchema extends IdentifiableEntitySchema {
  @Prop()
  readonly type: string;

  @Prop()
  readonly recId: number;
}

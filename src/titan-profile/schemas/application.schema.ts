import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Prm {
  @Prop()
  orgId: string;
  @Prop()
  orgName: string;
  @Prop()
  department?: string;
  @Prop()
  projectId?: string;
  @Prop()
  isActive: boolean;
}

export const prmSchema = SchemaFactory.createForClass(Prm);
@Schema()
export class Application {
  @Prop({
    type: [prmSchema],
    _id: false,
  })
  prm?: Prm[];

  @Prop({
    type: prmSchema,
    _id: false,
  })
  defaultPrm?: Prm;
}

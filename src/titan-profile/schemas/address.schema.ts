import { Prop, Schema } from '@nestjs/mongoose';
import { AddressType } from '../enums/profile.enum';
@Schema()
export class Address {
  @Prop({
    type: String,
    enum: AddressType,
  })
  addressType?: AddressType;
  @Prop()
  addressName?: string;
  @Prop()
  addressLine1?: string;
  @Prop()
  addressLine2?: string;
  @Prop()
  city?: string;
  @Prop()
  state?: string;
  @Prop()
  postalCode?: string;
  @Prop()
  country?: string;
}

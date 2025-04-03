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
@Schema()
export class Profile {
  @Prop()
  firstName?: string;

  @Prop()
  lastName?: string;

  @Prop({ required: true })
  phone: string;

  @Prop()
  email?: string;

  @Prop({ required: true })
  countryCode: string;

  @Prop()
  gender?: string;

  @Prop({ type: Date })
  dob?: Date;

  @Prop({
    type: [Address],
  })
  addresses?: Address[];

  @Prop()
  profilePicture?: string;

  @Prop()
  password?: string;
}
@Schema({ collection: 'titan-profile', timestamps: true })
export class TitanProfile {}

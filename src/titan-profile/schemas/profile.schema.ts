import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Gender } from '../enums/profile.enum';
import { Address } from './address.schema';
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

  @Prop({
    type: String,
    enum: Gender,
  })
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
export const ProfileSchema = SchemaFactory.createForClass(Profile);

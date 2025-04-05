import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Profile, ProfileSchema } from './profile.schema';
import { Application, ApplicationSchema } from './application.schema';

@Schema({ collection: 'titan-profile', timestamps: true })
export class TitanProfile {
  @Prop({
    type: String,
    required: true,
  })
  userHash: string;

  @Prop({
    type: Boolean,
    default: true,
  })
  isActive: boolean;

  @Prop({
    type: ProfileSchema,
    _id: false,
  })
  profile: Profile;

  @Prop({
    type: ApplicationSchema,
    _id: false,
  })
  application?: Application;
}

export const titanProfileSchema = SchemaFactory.createForClass(TitanProfile);

titanProfileSchema.index({ userHash: 1 }, { unique: true });

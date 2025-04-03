import { Prop, Schema } from '@nestjs/mongoose';
import { Profile, ProfileSchema } from './profile.schema';

@Schema({ collection: 'titan-profile', timestamps: true })
export class TitanProfile {
  @Prop({
    type: ProfileSchema,
    _id: false,
  })
  profile: Profile;
}

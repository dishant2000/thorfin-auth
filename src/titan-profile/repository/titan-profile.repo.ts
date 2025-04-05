import { InjectModel } from '@nestjs/mongoose';
import { TitanProfile } from '../schemas/titan-profile.schema';
import { Model } from 'mongoose';

export class TitanProfileRepository {
  constructor(
    @InjectModel(TitanProfile.name)
    private readonly titanProfileModel: Model<TitanProfile>,
  ) {}

  async getTitanProfilE(userHash: string) {
    return this.titanProfileModel.findOne({ userHash }).lean();
  }

  async isUserHashPresent(userHash: string) {
    return this.titanProfileModel.exists({ userHash });
  }
}

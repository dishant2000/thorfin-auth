import { InjectModel } from '@nestjs/mongoose';
import { TitanProfile } from '../schemas/titan-profile.schema';
import { Model } from 'mongoose';
import { NewTitanProfileDto } from '../dtos/new-titan-profile.dto';

export class TitanProfileRepository {
  constructor(
    @InjectModel(TitanProfile.name)
    private readonly titanProfileModel: Model<TitanProfile>,
  ) {}

  async getTitanProfile(userHash: string) {
    return await this.titanProfileModel.findOne({ userHash }).lean();
  }

  async isUserHashPresent(userHash: string) {
    return await this.titanProfileModel.exists({ userHash });
  }
  async createTitanProfile(newTitanProfileDto: NewTitanProfileDto) {
    return await this.titanProfileModel.create(newTitanProfileDto);
  }
}

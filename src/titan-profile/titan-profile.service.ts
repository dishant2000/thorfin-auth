import { Injectable } from '@nestjs/common';
import { NewTitanProfileDto } from './dtos/new-titan-profile.dto';
import { TitanProfileRepository } from './repository/titan-profile.repo';
import { LoggerService } from 'src/logger/logger.service';
import { ApplicationConstants } from 'src/common/constants';
import { CommonMethods } from 'src/common/utils/commons';

@Injectable()
export class TitanProfileService {
  private readonly logger = new LoggerService();
  constructor(private readonly titanProfileRepo: TitanProfileRepository) {}

  async createTitanProfile(newTitanProfileDto: NewTitanProfileDto) {
    const userHash = CommonMethods.encryptMD5(
      newTitanProfileDto.profile.phone,
      newTitanProfileDto.profile.countryCode ||
        ApplicationConstants.CountryCodes.IN,
    );
    newTitanProfileDto.userHash = userHash;
    return await this.titanProfileRepo.createTitanProfile(newTitanProfileDto);
  }

  async getTitanProfilE(userHash: string) {
    return await this.titanProfileRepo.getTitanProfile(userHash);
  }
  async isUserHashPresent(userHash: string) {
    return await this.titanProfileRepo.isUserHashPresent(userHash);
  }
}

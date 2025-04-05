import { Injectable } from '@nestjs/common';
import { NewTitanProfileDto } from './dtos/new-titan-profile.dto';
import { TitanProfileRepository } from './repository/titan-profile.repo';

@Injectable()
export class TitanProfileService {
  constructor(private readonly titanProfileRepo: TitanProfileRepository) {}

  createTitanProfile(newTitanProfileDto: NewTitanProfileDto) {
    console.log(newTitanProfileDto);
  }

  async isUserHashPresent(userHash: string) {
    return await this.titanProfileRepo.isUserHashPresent(userHash);
  }
}

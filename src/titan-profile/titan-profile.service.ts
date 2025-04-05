import { Injectable } from '@nestjs/common';
import { NewTitanProfileDto } from './dtos/new-titan-profile.dto';

@Injectable()
export class TitanProfileService {
  constructor() {}

  createTitanProfile(newTitanProfileDto: NewTitanProfileDto) {
    console.log(newTitanProfileDto);
  }
}

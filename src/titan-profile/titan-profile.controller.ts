import { Body, Controller, Post } from '@nestjs/common';
import { TitanProfileService } from './titan-profile.service';
import { NewTitanProfileDto } from './dtos/new-titan-profile.dto';
@Controller({
  version: '1',
  path: 'titan-profile',
})
export class TitanProfileController {
  constructor(private readonly titanProfileService: TitanProfileService) {}

  @Post('/new')
  createProfile(@Body() newTitanProfileDto: NewTitanProfileDto) {
    this.titanProfileService.createTitanProfile(newTitanProfileDto);
  }
}

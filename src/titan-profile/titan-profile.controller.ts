import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TitanProfileService } from './titan-profile.service';
import { NewTitanProfileDto } from './dtos/new-titan-profile.dto';
import { SuccessResponseDtoNew } from 'src/common/dtos/success-response.dto';
@Controller({
  version: '1',
  path: 'titan-profile',
})
export class TitanProfileController {
  constructor(private readonly titanProfileService: TitanProfileService) {}

  @Post('/new')
  async createProfile(@Body() newTitanProfileDto: NewTitanProfileDto) {
    await this.titanProfileService.createTitanProfile(newTitanProfileDto);
  }

  @Get('/:userHash')
  async getTitanProfile(@Param('userHash') userHash: string) {
    const profile = await this.titanProfileService.getTitanProfile(userHash);
    return SuccessResponseDtoNew.getFilledResponseObjectAllArgs(
      profile,
      'Success',
      '200',
    );
  }
}

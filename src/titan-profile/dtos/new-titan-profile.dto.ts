import { PartialType } from '@nestjs/mapped-types';
import { Profile } from '../schemas/profile.schema';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Application } from '../schemas/application.schema';

export class ProfileDto extends PartialType(Profile) {
  @IsOptional()
  @MaxLength(30)
  firstName?: string;

  @IsOptional()
  @MaxLength(30)
  lastName?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsNotEmpty()
  @IsString()
  phone: string;
}

export class ApplicationDto extends PartialType(Application) {}

export class NewTitanProfileDto {
  @Type(() => ProfileDto)
  profile: ProfileDto;

  @Type(() => ApplicationDto)
  application: ApplicationDto;
}

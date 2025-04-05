import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ApplicationConstants } from 'src/common/constants';
import { ErrorResponseDto } from 'src/common/dtos/error-response.dto';
import { CommonMethods } from 'src/common/utils/commons';
import { LoggerService } from 'src/logger/logger.service';
import { TitanProfileService } from '../titan-profile.service';

@Injectable()
export class CreateUserHashMiddleware implements NestMiddleware {
  private readonly logger: LoggerService = new LoggerService();
  constructor(private readonly titanProfileService: TitanProfileService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const profile = req?.body?.profile;
      if (!profile) {
        const error = ErrorResponseDto.getFilledResponseObjectAllArgs(
          {},
          'Profile is missing',
          '400',
        );
        this.logger.error('Profile is missing');
        return res.status(400).json(error);
      }
      const userHash = CommonMethods.encryptMD5(
        profile.phone,
        profile.countryCode || ApplicationConstants.CountryCodes.IN,
      );
      const isUserHashPresent =
        await this.titanProfileService.isUserHashPresent(userHash);
      if (isUserHashPresent) {
        const error = ErrorResponseDto.getFilledResponseObjectAllArgs(
          {},
          'Account already exists',
          '409',
        );
        this.logger.error('Phone Number is already in use');
        return res.status(409).json(error);
      }
      next();
    } catch (error) {
      this.logger.error(`${JSON.stringify(error)}`);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

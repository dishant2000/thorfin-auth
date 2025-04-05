// logger.service.ts

import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import * as process from 'process';
import * as util from 'util';
import { ApplicationConstants } from 'src/common/constants';

@Injectable()
export class LoggerService {
  private readonly logger: winston.Logger;
  timezoned = () => {
    return new Date().toLocaleString('en-US', {
      timeZone: ApplicationConstants.ASIA_KOLKATA,
    });
  };

  constructor() {
    this.logger = winston.createLogger({
      level: 'debug',
      format: winston.format.combine(
        winston.format.timestamp({ format: this.timezoned }),
        winston.format.json(),
      ),
      transports: [
        new winston.transports.Console(),
        new DailyRotateFile({
          level: 'error',
          format: winston.format.json(),
          dirname:
            process.env.LOG_PATH || ApplicationConstants.DEFAULT_LOG_DIRECTORY,
          filename: 'error-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxFiles: '14d',
        }),
        new DailyRotateFile({
          level: process.env.ENV === 'dev' ? 'debug' : 'info',
          format: winston.format.json(),
          dirname:
            process.env.LOG_PATH || ApplicationConstants.DEFAULT_LOG_DIRECTORY,
          filename: process.env.APP_NAME + '-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxFiles: '14d',
        }),
      ],
    });
  }

  error(message: string, trace?: string) {
    this.logger.error(util.format(message), { trace });
  }

  warn(message: string) {
    this.logger.warn(util.format(message));
  }

  info(message: string) {
    this.logger.info(util.format(message));
  }

  debug(message: string) {
    this.logger.debug(util.format(message));
  }
}

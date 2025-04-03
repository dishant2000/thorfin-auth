import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as bodyParser from 'body-parser';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  console.log('dlishant', process.env.PORT);
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.enableCors();
  app.use(helmet());
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
}
bootstrap();

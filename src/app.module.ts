import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TitanProfileModule } from './titan-profile/titan-profile.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      envFilePath: './.env',
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL ?? ''),
    TitanProfileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

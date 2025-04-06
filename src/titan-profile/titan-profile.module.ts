import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CreateUserHashMiddleware } from './middleware/create-userhash.middleware';
import { TitanProfileService } from './titan-profile.service';
import { TitanProfileRepository } from './repository/titan-profile.repo';
import { MongooseModule } from '@nestjs/mongoose';
import {
  TitanProfile,
  titanProfileSchema,
} from './schemas/titan-profile.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TitanProfile.name, schema: titanProfileSchema },
    ]),
  ],
  providers: [TitanProfileService, TitanProfileRepository],
  exports: [],
})
export class TitanProfileModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CreateUserHashMiddleware).forRoutes({
      path: '/titan-profile',
      method: RequestMethod.POST,
    });
  }
}

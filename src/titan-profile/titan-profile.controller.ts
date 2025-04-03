import { Controller, Get } from '@nestjs/common';
@Controller({
  version: '1',
  path: 'titan-profile',
})
export class TitanProfileController {
  constructor() {}

  @Get('/demo')
  getDemo() {
    return {
      message: 'Hello from Titan Profile',
    };
  }
}

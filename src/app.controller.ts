import { Controller, Get, Post, HttpCode, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('dog')
  getDog(): string {
    return this.appService.getDog();
  }

  @HttpCode(200)
  @Post('catdog')
  getRoute( @Body() body) {
    return JSON.stringify(body) + 'This is the request recieved';
    
  }

  @Post()
  postCow(): string {
    return this.appService.postCow();
  }
}

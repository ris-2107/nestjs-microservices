import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('get_user')
  getUser(data: any) {
    return this.appService.getUser(data);
  }

  @EventPattern('user_registered')
  handleOrderCreated(data: any) {
    // data = JSON.parse(data);
    this.appService.createUser(data);
  }
  // onModuleInit() {
  //   this.authClient.subscribeToResponseOf('get_user');
  // }
}

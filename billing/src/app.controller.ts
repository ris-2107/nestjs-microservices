import { ClientKafka } from '@nestjs/microservices/client';
import { Controller, Get } from '@nestjs/common';
import { Inject } from '@nestjs/common/decorators';
import { OnModuleDestroy, OnModuleInit } from '@nestjs/common/interfaces/hooks';
import { EventPattern } from '@nestjs/microservices/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController implements OnModuleInit {
  constructor(
    private readonly appService: AppService,
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('order_created')
  handleOrderCreated(data: any) {
    this.appService.handleOrderCreated(data);
  }

  onModuleInit() {
    this.authClient.subscribeToResponseOf('get_user');
  }
}

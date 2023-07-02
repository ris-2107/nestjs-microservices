import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices/client';
import {
  CreateOrderRequest,
  RegisterUserRequest,
} from './DTOs/create-order-request-dto';
import { OrderCreatedEvent, UserRegisteredEvent } from './event-created.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientKafka,
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  createOrder({ userId, price }: CreateOrderRequest) {
    this.billingClient.emit(
      'order_created',
      new OrderCreatedEvent('123', userId, price),
    );
  }

  registerUser(registerUserRequest: RegisterUserRequest) {
    this.authClient.emit(
      'user_registered',
      new UserRegisteredEvent(registerUserRequest),
    );
  }
}

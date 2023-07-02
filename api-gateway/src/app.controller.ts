/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {
  CreateOrderRequest,
  RegisterUserRequest,
} from './DTOs/create-order-request-dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  createOrder(@Body() createOrderRequest: CreateOrderRequest) {
    this.appService.createOrder(createOrderRequest);
  }

  @Post('/register')
  userRegister(@Body() registerUserRequest: RegisterUserRequest) {
    this.appService.registerUser(registerUserRequest);
  }
}

import { RegisterUserRequest } from './DTOs/create-order-request-dto';

export class OrderCreatedEvent {
  constructor(
    public readonly orderId: string,
    public readonly userId: string,
    public readonly price: number,
  ) {}

  toString() {
    return JSON.stringify({
      orderId: this.orderId,
      userId: this.userId,
      price: this.price,
    });
  }
}

export class UserRegisteredEvent {
  constructor(public readonly registerUserRequest: RegisterUserRequest) {}
  toString() {
    return JSON.stringify({
      registerUserRequestDetails: this.registerUserRequest,
    });
  }
}

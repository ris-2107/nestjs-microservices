import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private readonly users: any[] = [
    {
      userId: '123',
      stripeUserId: 'fe5680ioi998sc67i0909789n66707202356- 123',
    },
    {
      userId: '345',
      stripeUserId: 'eft8kj51208i0909789n667jk8909079845986 - 893',
    },
  ];

  getUser(getUserRequest: GetUserRequest) {
    return this.users.find((user) => user.userId === getUserRequest.userId)
      ? this.users.find((user) => user.userId === getUserRequest.userId)
      : '000';
  }
}

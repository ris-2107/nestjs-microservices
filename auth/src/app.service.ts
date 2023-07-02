import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { InjectModel } from '@nestjs/mongoose';
import { GetUserRequest } from './get-user-request.dto';
import { Model } from 'mongoose';
import { IUser } from './Interface/user.interface';
import { CreateUserDto } from './Dto/create-user.dto';
@Injectable()
export class AppService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}
  async createUser(createUserDto: CreateUserDto): Promise<IUser> {
    console.log(createUserDto);
    const newUser = await new this.userModel(createUserDto);
    console.log(newUser);
    return newUser.save();
  }
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

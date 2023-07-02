import { Document } from 'mongoose';
export interface IUser extends Document {
  readonly name: string;
  readonly email: string;
  readonly userId: string;
  readonly gender: string;
}

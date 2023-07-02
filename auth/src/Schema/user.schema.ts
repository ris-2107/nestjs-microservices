import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class User {
  @Prop()
  name: string;
  @Prop()
  userId: string;
  @Prop()
  email: number;
  @Prop()
  gender: string;
}
export const UserSchema = SchemaFactory.createForClass(User);

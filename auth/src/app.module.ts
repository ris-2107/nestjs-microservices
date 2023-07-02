import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './Schema/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ris2107:Rishabh123$@qkart-node.dsnhh.mongodb.net/?retryWrites=true&w=majority',
      { dbName: 'user-db' },
    ),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

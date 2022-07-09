import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { join } from 'path';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

const config=require('dotenv').config(join(__dirname,"../.env"));

console.log(process.env.DB_PORT);
const port=Number(process.env.DB_PORT)
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port,
      username: `${process.env.USER_NAME}`,
      password: `${process.env.PASSWORD}`,
      database: 'user',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
      logging: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

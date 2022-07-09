import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { join } from 'path';

const logger = new Logger('Main');
async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {

      package: 'user',
      protoPath: join(__dirname, 'user/user.proto'),
    },
  });
  
  await app.listen();
  logger.log('microservice is listening ...');
}

bootstrap();

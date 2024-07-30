import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://uotqyqab:XBF3UtwCe4nz_Y6rb8RjYzNNVIaAHq6V@rat.rmq2.cloudamqp.com/uotqyqab',
      ],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  app.listen();
}
bootstrap();

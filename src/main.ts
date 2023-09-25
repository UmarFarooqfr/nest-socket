import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SocketService } from './services/socket.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Init socket connection
  const server = app.getHttpServer();
  SocketService.initSocket(server);

  // Enables cors
  app.enableCors();

  await app.listen(3000);
}

bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200',  // Permite solicitações da origem especificada
    methods: 'GET,POST,PUT,DELETE',   // Métodos permitidos
    allowedHeaders: 'Content-Type',   // Cabeçalhos permitidos
  });
  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: '*', // Set this to your client's origin URL or '*' for any origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Set allowed HTTP methods
    allowedHeaders: 'Content-Type, Accept, Authorization', // Set allowed headers
  };

  app.enableCors(corsOptions);

  await app.listen(8000);
}
bootstrap();

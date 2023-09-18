import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule, { cors: true });
  const options = new DocumentBuilder()
    .setTitle('API SAY')
    .addTag('Auth')
    .addBearerAuth()
    .build();
  
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('', app, document);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();

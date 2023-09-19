import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';

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

  const configService = app.get(ConfigService);

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: configService.get('auth.host'),
      port: configService.get('auth.rpcPort')
    }
  });
}

bootstrap();

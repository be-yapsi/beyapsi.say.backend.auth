import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AuthModule } from './auth.module';
//TODO: Replace with package
import {AnyToHttpExceptionFilter} from '../../../libraries/beyapsi.backend.common/dist';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule, { cors: true });
  const options = new DocumentBuilder()
    .setTitle('Security SAY API')
    .setVersion('0.0.1')
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

  app.useGlobalFilters(new AnyToHttpExceptionFilter());
  await app.startAllMicroservices();
  await app.listen(configService.get('auth.httpPort'));
  
}

bootstrap();

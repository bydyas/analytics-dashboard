import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import compression from 'compression';

import { AppModule } from './app.module';
import { AppConfig } from './app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = app.get(AppConfig);

  const config = new DocumentBuilder()
    .setTitle(appConfig.serviceName)
    .setDescription(appConfig.serviceDescription)
    .setVersion(appConfig.version)
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(appConfig.apiPrefix, app, documentFactory);

  app.enableCors();
  app.use(compression());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.setGlobalPrefix(appConfig.apiPrefix);

  await app.listen(appConfig.port, appConfig.host);
}

void bootstrap();

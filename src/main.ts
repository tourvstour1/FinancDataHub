import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({ origin: '*' });
  const port: number = process.env['SERVER_PORT'] as unknown as number;
  const config = new DocumentBuilder()
    .setTitle('FDH example')
    .setDescription('The FDH API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-test', app, document);

  await app.listen(port);
}
bootstrap();

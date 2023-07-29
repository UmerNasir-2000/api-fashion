import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import helmet from 'helmet';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });

  app.setGlobalPrefix('v1');

  app.enableShutdownHooks();

  app.enableCors({
    origin: ['http://localhost:3001'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  });

  app.use(compression({ threshold: 10, chunkSize: 16 * 1024, level: 6 }));
  app.use(
    helmet({
      contentSecurityPolicy: { useDefaults: true },
      dnsPrefetchControl: false,
      hidePoweredBy: true,
      frameguard: { action: 'sameorigin' },
      hsts: { maxAge: 31536000, includeSubDomains: true },
      ieNoOpen: true,
      noSniff: true,
      xssFilter: true,
      referrerPolicy: { policy: 'no-referrer' },
    }),
  );

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  await app.listen(3000);
}
bootstrap();

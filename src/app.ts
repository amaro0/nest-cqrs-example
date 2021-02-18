import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

export async function bootstrap(): Promise<express.Express> {
  const expressApp = express();
  const app = await NestFactory.create(ApplicationModule, new ExpressAdapter(expressApp));

  await app.init()

  return expressApp;
}

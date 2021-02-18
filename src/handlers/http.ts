import { bootstrap } from '../app';
import { createServer, proxy } from 'aws-serverless-express';
import { Context } from 'aws-lambda';

const BINARY_MIME_TYPES = [
  'application/json',
];

export const mount = async (event: any, context: Context) => {
  const app = await bootstrap();
  const server = createServer(app, undefined, BINARY_MIME_TYPES)

  return proxy(server, event, context, 'PROMISE').promise;
}

import { bootstrap } from '../app';
import serverlessExpress = require('@vendia/serverless-express');


export const mount = async () => {
  const app = await bootstrap();

  return serverlessExpress({ app });
};


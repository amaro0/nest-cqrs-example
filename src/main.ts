import { bootstrap } from './app';

(async function() {
  const app = await bootstrap();

  app.listen(3000, () => console.log('Application is listening on port 3000.'));
}());




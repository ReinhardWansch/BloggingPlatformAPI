import express from 'express';
import { checkDbConnection } from './config/db.js';
import postsRoutes from './modules/posts/posts.routes.js';

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (_request, response) => {
  response.status(200).json({
    message: 'Blogging Platform API is running.',
    messageLeiwand: 'Ragnar ist leiwand :)'
  });
});

app.get('/health/db', async (_request, response) => {
  try {
    await checkDbConnection();
    response.status(200).json({
      status: 'ok',
      message: 'Database connection is healthy.'
    });
  } catch (error) {
    console.error('Database health check failed:', error.message);
    response.status(503).json({
      status: 'error',
      message: 'Datenbankverbindung ist derzeit nicht verfuegbar.'
    });
  }
});

app.use('/posts', postsRoutes);

export default app;
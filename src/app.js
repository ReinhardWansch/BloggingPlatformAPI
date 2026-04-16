import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (_request, response) => {
  response.status(200).json({
    message: 'Blogging Platform API is running.',
    messageLeiwand: 'Ragnar ist leiwand :)'
  });
});

export default app;
import express from 'express';

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

export default app;
import app from './app.js';
import env from './config/env.js';

const { port } = env;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default server;


import app from './app.js';
import { checkDbConnection } from './config/db.js';
import env from './config/env.js';

const { port } = env;

const startServer = async () => {
  try {
    await checkDbConnection();
    console.log('Database connection established.');
    const server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
    return server;
  } catch (error) {
    console.error('Failed to connect to the database:', error.message);
    process.exit(1);
  }
};

const server = await startServer();

export default server;


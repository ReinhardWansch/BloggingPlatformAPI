import dotenv from 'dotenv';

dotenv.config();

const DEFAULT_PORT = 3000;
const DEFAULT_DB_PORT = 3306;

const parsePort = (value) => {
  const parsedPort = Number.parseInt(value, 10);

  if (Number.isInteger(parsedPort) && parsedPort > 0) {
    return parsedPort;
  }

  return DEFAULT_PORT;
};

const parseDbPort = (value) => {
  const parsedPort = Number.parseInt(value, 10);

  if (Number.isInteger(parsedPort) && parsedPort > 0) {
    return parsedPort;
  }

  return DEFAULT_DB_PORT;
};

const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: parsePort(process.env.PORT),
  dbHost: process.env.DB_HOST ?? '127.0.0.1',
  dbPort: parseDbPort(process.env.DB_PORT),
  dbUser: process.env.DB_USER ?? 'blog_user',
  dbPassword: process.env.DB_PASSWORD ?? 'blog_password',
  dbName: process.env.DB_NAME ?? 'blogging_platform'
};

export default env;
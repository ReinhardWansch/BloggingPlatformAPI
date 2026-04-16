import dotenv from 'dotenv';

dotenv.config();

const DEFAULT_PORT = 3000;

const parsePort = (value) => {
  const parsedPort = Number.parseInt(value, 10);

  if (Number.isInteger(parsedPort) && parsedPort > 0) {
    return parsedPort;
  }

  return DEFAULT_PORT;
};

const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: parsePort(process.env.PORT)
};

export default env;
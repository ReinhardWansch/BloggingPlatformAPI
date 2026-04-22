import dotenv from 'dotenv';

dotenv.config();

const DEFAULT_PORT = 3000;

const getRequiredEnv = (name) => {
  const value = process.env[name];
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(
      `Fehlende Umgebungsvariable: ${name}.`
    );
  }

  return value;
};

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
  throw new Error(
    'Ungueltiger Wert fuer DB_PORT.'
  );
};

const dbHost = getRequiredEnv('DB_HOST');
const dbPort = parseDbPort(getRequiredEnv('DB_PORT'));
const dbUser = getRequiredEnv('DB_USER');
const dbPassword = getRequiredEnv('DB_PASSWORD');
const dbName = getRequiredEnv('DB_NAME');

const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: parsePort(process.env.PORT),
  dbHost,
  dbPort,
  dbUser,
  dbPassword,
  dbName
};

export default env;
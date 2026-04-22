import mysql from 'mysql2/promise';
import env from './env.js';

const pool = mysql.createPool({
	host: env.dbHost,
	port: env.dbPort,
	user: env.dbUser,
	password: env.dbPassword,
	database: env.dbName,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
	timezone: 'Z'
});

export const checkDbConnection = async () => {
	const connection = await pool.getConnection();
	try {
		await connection.ping();
	} finally {
		connection.release();
	}
};

export default pool;
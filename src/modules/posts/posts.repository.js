// Direkte SQL-Zugriffe auf MySQL.

import { pool } from '../../config/db.js';

export const getAllPosts = async () => {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.execute('SELECT * FROM posts');
        return rows;
    } finally {
        connection.release();
    }
};

export const createPost = async (title, content, category, tags) => {
    const connection = await pool.getConnection();
    try {
        const [result] = await connection.execute(
            'INSERT INTO posts (title, content, category, tags) VALUES (?, ?, ?, ?)',
            [title, content, category, JSON.stringify(tags)]
        );
        return result.insertId;
    } finally {
        connection.release();
    }
}
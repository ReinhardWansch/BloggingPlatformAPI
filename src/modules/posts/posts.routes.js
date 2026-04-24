// Definiert Endpunkte wie GET /posts, POST /posts.

import express from 'express';
import * as postsController from './posts.controller.js';

const router = express.Router();

router.get('/', postsController.getAllPosts);

export default router;
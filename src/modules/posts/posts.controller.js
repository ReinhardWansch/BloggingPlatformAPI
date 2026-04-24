// Nimmt Request entgegen und sendet Response.

import * as postsService from './posts.service.js';
import { asyncHandler } from '../../utils/asyncHandler.js';

export const getAllPosts = asyncHandler(async (req, res) => {
    const posts = await postsService.getAllPosts();
    
    res.status(200).json(posts);
});
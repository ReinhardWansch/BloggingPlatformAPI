// Enthält Fachlogik (Validierungsregeln, Ablaufentscheidungen).

import * as postsRepository from './posts.repository.js';

export const getAllPosts = async () => {
    const posts = await postsRepository.getAllPosts();
    return posts;
};
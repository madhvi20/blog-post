const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchAllBlogs = async () => {
    const response = await fetch(`${BASE_URL}/posts`);
    return response.json();
};

export const fetchAllUsers = async () => {
    const response = await fetch(`${BASE_URL}/users`);
    return response.json();
};

export const fetchBlogComments = async (blogId) => {
    const response = await fetch(`${BASE_URL}/posts/${blogId}/comments`);
    return response.json();
};

export const fetchUserDetails = async (userId) => {
    const response = await fetch(`${BASE_URL}/users/${userId}`);
    return response.json();
};

export const fetchUserComments = async (userId) => {
    const response = await fetch(`${BASE_URL}/users/${userId}/comments`);
    return response.json();
};

export const fetchUserBlogs = async (userId) => {
    const response = await fetch(`${BASE_URL}/users/${userId}/posts`);
    return response.json();
};

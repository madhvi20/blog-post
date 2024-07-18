import React, { useEffect, useState } from 'react';
import { fetchUserBlogs } from '../services/api';

const UserBlogs = ({ userId }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchUserBlogs(userId).then(data => setBlogs(data));
    }, [userId]);

    return (
        <div>
            <h2>User Blogs</h2>
            <ul>
                {blogs.map(blog => (
                    <li key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>{blog.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserBlogs;

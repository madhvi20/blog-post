import React, { useEffect, useState } from 'react';
import { fetchAllBlogs } from '../services/api';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchAllBlogs().then(data => setBlogs(data));
    }, []);

    return (
        <div>
            <h2>All Blogs</h2>
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

export default BlogList;

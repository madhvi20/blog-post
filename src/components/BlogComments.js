import React, { useEffect, useState } from 'react';
import { fetchBlogComments } from '../services/api';

const BlogComments = ({ blogId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchBlogComments(blogId).then(data => setComments(data));
    }, [blogId]);

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <h3>{comment.name}</h3>
                        <p>{comment.body}</p>
                        <p>By: {comment.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogComments;

import React, { useEffect, useState } from 'react';
import { fetchUserComments } from '../services/api';

const UserComments = ({ userId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchUserComments(userId).then(data => setComments(data));
    }, [userId]);

    return (
        <div>
            <h2>User Comments</h2>
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

export default UserComments;

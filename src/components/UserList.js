import React, { useEffect, useState } from 'react';
import { fetchAllUsers } from '../services/api';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchAllUsers().then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h2>All Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>{user.website}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;

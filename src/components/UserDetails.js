import React, { useEffect, useState } from 'react';
import { fetchUserDetails } from '../services/api';

const UserDetails = ({ userId }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUserDetails(userId).then(data => setUser(data));
    }, [userId]);

    return (
        <div>
            <h2>User Details</h2>
            {user && (
                <div>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.website}</p>
                </div>
            )}
        </div>
    );
};

export default UserDetails;

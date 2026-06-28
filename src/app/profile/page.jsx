import { auth } from '@/lib/auth';
import React from 'react';

const UserProfile = async() => {
    const user = await auth.api.getSession()
    console.log(user)
    return (
        <div>
            
        </div>
    );
};

export default UserProfile;
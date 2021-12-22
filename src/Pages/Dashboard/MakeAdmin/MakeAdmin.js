import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [ email, setEmail ] = useState('');
    const [ success, setSuccess ] = useState(false);
    const { authToken } = useAuth();
    
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${authToken}`,  
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(data.modifiedCount) {
                setSuccess(true);
            }
        })
        e.preventDefault();
    }
    
    return (
        <div>
            <h1>admin making</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField 
                sx={{ width: '50%'}}
                    label="Email" 
                    variant="standard"
                    type='email'
                    onBlur={handleOnBlur}
                />
                <Button variant='contained' type='submit'>Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin Successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;
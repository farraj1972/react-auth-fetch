import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        localStorage.removeItem('user-token')
        navigate('/auth/login')
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Logout;
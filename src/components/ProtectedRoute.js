import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {

    const navigate = useNavigate()

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const checkUserToken = () => {
        
        const userToken = localStorage.getItem('user-token')

        if (!userToken) {
            setIsLoggedIn(false)
            return navigate('/auth/login')
        }
        setIsLoggedIn(true)
    }

    useEffect(()=>{
        checkUserToken();
    }, []);

    return (
        <>
            {isLoggedIn ? props.children: null }   
        </>
    );
};

export default ProtectedRoute;
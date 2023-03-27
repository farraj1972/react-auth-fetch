import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const loginAPI = 'http://localhost:5000/api/auth/login';    

    const navigate = useNavigate(); 

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitLoginForm = (event)=>{
        event.preventDefault()

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        };       

        fetch(loginAPI, requestOptions).then(async (response)=>{

            const data = await response.json();

            const token = data.token;

            localStorage.clear()

            localStorage.setItem('user-token', token)

            console.log(token)

            navigate('/')

        }).catch((error)=>{
            alert('Something went wrong')
        })

    }

    return (
        <section>
            <div className="container">
                <form onSubmit={submitLoginForm}>
                    <div >
                        <input
                            type="email"
                            value={email}
                            className="form-control form-control-lg"
                            placeholder="Enter a valid email address"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {/* <label className="form-label" htmlFor="form3Example3">Email address</label> */}
                    </div>
                    <div >
                        <input
                            type="password"
                            value={password}
                            className="form-control form-control-lg"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {/* <label className="form-label" htmlFor="form3Example3">Email address</label> */}
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary btn-lg">Login</button>
                    </div>
                </form>
            </div>

        </section>
    );
};

export default Login;
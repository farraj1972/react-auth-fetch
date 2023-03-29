import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { applicationContext } from '../../components/ApplicationContextProvider';

const Login = () => {

    const context = useContext(applicationContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitLoginForm = (event) => {
        event.preventDefault()

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        };

        fetch(
            `${context.baseUrl}/auth/login`,
            requestOptions).then(async (response) => {

                const data = await response.json();

                const token = data.token;

                localStorage.setItem('user-token', token)

                navigate('/')

            }).catch((error) => {
                alert('Something went wrong')
            })

    }

    return (
            <div div className="row align-items-center" style={{height: "100vh"}}>
                <div className="mx-auto col-10 col-md-8 col-lg-6">
                <form onSubmit={submitLoginForm}>
                    <h1>Projects Manager Pro</h1>
                    <div className='form-group' >
                        <label for="username">Username</label>
                        <input
                            type="email"
//                            value={email}
                            className="form-control username"
                            placeholder="Enter a valid email address"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {/* <label className="form-label" htmlFor="form3Example3">Email address</label> */}
                    </div>
                    <div className='form-group' >
                        <label for="password">Password</label>
                        <input
                            type="password"
//                            value={password}
                            className="form-control password"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary btn-customized mt-4">Login</button>
                    </div>
                </form>
                </div>                
            </div>
    );
};

export default Login;
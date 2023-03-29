import React, { useContext, useEffect, useState } from 'react';
import { applicationContext } from '../components/ApplicationContextProvider';

const Users = () => {

    const context = useContext(applicationContext);

    const [users, setUsers] = useState([])

    useEffect(()=>{
        const fetchdata = async () => {
            console.log(context.baseUrl)
            fetch(
                `${context.baseUrl}/users`,
                {
                    method:'get',
                    headers:new Headers({
                        'Authorization': 'Bearer ' + 
                        localStorage.getItem('user-token')
                    })
                }).then(async (response)=>{
                    const data = await response.json();
                    setUsers(data.users);
        
                }).catch((error)=>{
                    console.log(error)
                })

        }
        fetchdata()
    },[context.baseUrl]);

    return (
        <div>
            <table className="table caption-top">
                <caption>List of users</caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) =>
                            <tr key={index}>
                                <th scope="row">1</th>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;
import React, { useEffect, useState } from 'react';

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(()=>{

        const fetchdata = async () => {

            fetch(
                'http://localhost:5000/api/users', {
                    method:'get',
                    headers:new Headers({
                        'Authorization': 'Bearer ' + localStorage.getItem('user-token')
                    })
                }).then(async (response)=>{
                    const data = await response.json();
                    console.log(data.users)
                    setUsers(data.users);
        
                }).catch((error)=>{

                    console.log(error)
//                    localStorage.reItem('user-token')
//                    if (error.status)
                })

        }
        fetchdata()
    }, []);

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
import React from 'react'

const Users = React.lazy(()=>import('../pages/Users'))
const Projects = React.lazy(()=>import('../pages/Projects'))
const Tasks = React.lazy(()=>import('../pages/Tasks'))
const Dashboard = React.lazy(()=>import('../pages/Dashboard'))

const routes = [
    {
        path:'/users',
        name:'Users',
        exact:true,
        element: Users
    },
    {
        path:'/projects',
        name:'Projects',
        exact:true,
        element: Projects
    },
    {
        path:'/tasks',
        name:'Tasks',
        exact:true,
        element: Tasks
    },     
    {
        path:'/dashboard',
        name:'Dashboard',
        exact:true,
        element: Dashboard
    }         
]

export default routes
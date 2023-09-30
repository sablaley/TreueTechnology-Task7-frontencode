import React from 'react'
//private component apply condition on routes
//private component/private route act as wrapper...and components pass as props
//outlet handle that components
//return outlet means return copmonents which is passed as props in private component
import { Outlet, Navigate } from 'react-router-dom'
const PrivateComponent = () => {
    const auth = localStorage.getItem('user')
    return auth ? <Outlet /> : <Navigate to='/signup'></Navigate>
}
export default PrivateComponent
import React from "react"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Nav() {
    const navigate = useNavigate()
    const auth = localStorage.getItem('user')
    const logout = () => {
        localStorage.clear()
        // navigate('/signup')
    }
    return (
        <>
         	{
         	auth ?
            <ul className="nav-ul">
                <li><img src='https://graphicsfamily.com/wp-content/uploads/edd/2021/08/E-Commerce-Logo-Design-scaled.jpg' alt='logo' /></li>
				<li><Link to='/'>Products</Link></li>
				<li><Link to='/add'>Add Products</Link></li>
				{/* <li><Link to='/update'>Update Products</Link></li> */}
				{/* <li><Link to='/logout'>Logout</Link></li> */}
				{/* <li><Link to='/profile'>Profile</Link></li> */}
				<li><Link to='/signup' onClick={logout}>Logout ({JSON.parse(auth).name})</Link></li>
				{/* <li>
				{auth ? <Link to='/signup' onClick={logout}>Logout</Link> : <Link to='/signup'>SignUp</Link>}
				</li>
				<li><Link to='/login'>Login</Link></li> */}
            </ul>
                :
            <ul className="nav-ul">
                <li><img src='https://graphicsfamily.com/wp-content/uploads/edd/2021/08/E-Commerce-Logo-Design-scaled.jpg' alt='logo' /></li>
                <li><Link to='/signup'>SignUp</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
            }   
        </>
    );
}
export default Nav
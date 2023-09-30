import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const auth = localStorage.getItem('user')
        if (auth) {
            navigate('/')
        }
    }, [])

    const collectData = async () => {
        // console.log(email,password);
        let result = await fetch('http://localhost:5000/login', {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json()
        console.warn(result);
        if (result.auth) {
            localStorage.setItem('user', JSON.stringify(result.user))
            localStorage.setItem('token', JSON.stringify(result.auth))
            navigate('/')
        } else {
            alert('Please Enter Valid details')
        }
    }
    return (
        <div className='form'>
            <h1 className='register'>Login</h1>
            <input type='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} value={password} />
            <button type='button' onClick={collectData} >Login</button>
        </div>
    )
}
export default Login

/* email yogita@gmail.com
password 123 */
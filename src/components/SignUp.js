import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(()=> {
        const auth = localStorage.getItem('user')
        if(auth) {navigate('/')}
    })

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePasword = (e) => {
        setPassword(e.target.value)
    }

    const handleData = async () => {
        // console.log(name, email, password);
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // console.log(result)
        result = await result.json()
        // console.log(result);
        if (result) {
            localStorage.setItem('user',JSON.stringify(result.result))
            localStorage.setItem('token',JSON.stringify(result.auth))
            navigate('/')
        }
    }

    return (
        <div className='form'>
            <h1 className='register'>Register</h1>
            <input type='text' placeholder='Enter Name'onChange={(e) => handleName(e)} />
            <input type='email' placeholder='Enter Email'onChange={(e) => handleEmail(e)} />
            <input type='password' placeholder='Enter Password'onChange={(e) => handlePasword(e)} />
            <button type='button' onClick={handleData}>Submit</button>
        </div>
    )
}

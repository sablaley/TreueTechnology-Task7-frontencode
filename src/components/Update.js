import React, {useEffect, useState} from 'react'
import {useParams, useNavigate } from 'react-router-dom'

const Update = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [company, setCompany] = useState('')
    const params = useParams()
    const navigate = useNavigate()
    
    const getProducts = () => {
        console.log(params);
        let result =  fetch(`http://localhost:5000/products/${params.id}`,{
            headers: {
                authorization: `beraer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        .then((data)=>data.json())
        .then((res)=>{
            console.log(res)
            setName(res.name)
            setCategory(res.category)
            setCompany(res.company)
            setPrice(res.price)
        })
        .then((err)=>err && console.log(err))
    }

    useEffect(()=>{
        getProducts()
    },[])

    const updateProducts = async () => {
        console.log(name,price,category,company);
        let result = await fetch('http://localhost:5000/product/'+params.id,{
            method:"PUT",
            body:JSON.stringify({name,price,category,company}),
            headers:{
                "Content-Type":"application/json",
                authorization: `beraer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result = result.json()
        navigate('/')
    }
    
    return (
        <div className='form'>
            <h1>Update Product</h1>

            <input type='text' placeholder='Enter Name' value={name}
                onChange={(e) => setName(e.target.value)} />

            <input type='text' placeholder='Enter Price' value={price}
                onChange={(e) => setPrice(e.target.value)} />
            
            <input type='text' placeholder='Enter Category' value={category}
                onChange={(e) => setCategory(e.target.value)} />
            
            <input type='text' placeholder='Enter Company' value={company}
                onChange={(e) => setCompany(e.target.value)} />

            <button type='button' onClick={updateProducts}>Update Product</button>
        </div>
    )
}
export default Update;
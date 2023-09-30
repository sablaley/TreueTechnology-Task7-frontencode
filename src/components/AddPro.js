import React, { useState } from 'react'
const AddPro = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [company, setCompany] = useState('')
    const [err, setErr] = useState(false)

    const collectData = async () => {
        if (!name || !price || !category || !company) {
            setErr(true)
            return false
        }
        const auth = localStorage.getItem('user')
        // console.log(auth);
        // console.log(name,price,category,company);
        let userId = JSON.parse(auth)._id
        // console.log(name,price,category,company,userId);
        let result = await fetch('http://localhost:5000/add-product', {
            method: "post",
            body: JSON.stringify({ name, price, category, userId, company }),
            headers: {
                "Content-Type": "application/json",
                authorization: `beraer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        result = await result.json()
        // console.warn(result);
        if (result) {
            alert('data added sucessfully')
        }
    }
    return (
        <div className='form'>
            <h1>Add Product</h1>

            <input type='text' placeholder='Enter Name'
                onChange={(e) => setName(e.target.value)} />
            {err && !name && <span className='errMsg'>Enter Valid Name</span>}

            <input type='text' placeholder='Enter Price'
                onChange={(e) => setPrice(e.target.value)} />
            {err && !price && <span className='errMsg'>Enter Valid Price</span>}

            <input type='text' placeholder='Enter Category'
                onChange={(e) => setCategory(e.target.value)} />
            {err && !category && <span className='errMsg'>Enter Valid Category</span>}

            <input type='text' placeholder='Enter Company'
                onChange={(e) => setCompany(e.target.value)} />
            {err && !company && <span className='errMsg'>Enter Valid Company</span>}

            <button type='button' onClick={collectData}>Add Product</button>
        </div>
    )
}
export default AddPro
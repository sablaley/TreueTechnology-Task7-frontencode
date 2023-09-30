import React from 'react'
const AddProduct = () => {
    return (
        <div className='form'>
            <h1 className='register'>Add Product</h1>
            <input type='text' placeholder='Enter Name'  />
            <input type='text' placeholder='Enter Price'  />
            <input type='text' placeholder='Enter Category'  />          
            <input type='text' placeholder='Enter Company'  />          
            <button type='button'>Add Product</button>
        </div>
    )
}
export default AddProduct
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        console.log(localStorage.getItem('token'));
        let data = await fetch('http://localhost:5000/products-list', {
            headers: {
                authorization: `beraer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        data = await data.json()
        setProducts(data)
    }
    const deleteRecord = async (id) => {
        // console.log(id);
        let res = await fetch(`http://localhost:5000/products/${id}`, {
            method: "delete",
            headers: {
                authorization: `beraer ${JSON.parse(localStorage.getItem('token'))}`
            }
        })
        res = await res.json()
        if (res) {
            getProducts()
        }
    }
    // console.log(products);
    const searchData = async (e) => {
        // console.log(e.target.value);
        let key = e.target.value
        if(key) {
            let result = await fetch('http://localhost:5000/search/' + key,{
                headers: {
                    authorization:`beares ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            result = await result.json()
            if (result) {
                setProducts(result)
            }
        } else {
            getProducts()
        }
    }

    return (
        <>
            <h1 className='product-heading'>Product List</h1>
            <input type='text' placeholder='Enter Category' onChange={searchData}
                className='searchBox' />
            <table border='1' className='tbl'>
                <thead>
                    <tr>
                        <th>sr no</th>
                        <th>name</th>
                        <th>price</th>
                        <th>category</th>
                        <th>company</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length > 0 ?
                            products.map((e, i) =>
                                <tr key={e._id}>
                                    <td>{i + 1}</td>
                                    <td>{e.name}</td>
                                    <td>$ {e.price}</td>
                                    <td>{e.category}</td>
                                    <td>{e.company}</td>
                                    <td>
                                        <button className="delBtn" onClick={() => deleteRecord(e._id)}>Delete</button>
                                        <Link to={"/update/" + e._id}><button className='updateBtn'>Update</button></Link>
                                    </td>
                                </tr>
                            )
                            : <tr><td className='tdStyle'>No Result Found</td></tr>
                    }
                </tbody>
            </table>
        </>
    )
}
export default ProductList
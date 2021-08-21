import axios from 'axios'
import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"

function CreateProduct() {

    const [productName, setProductName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [isLoading, setLoading] = useState(false)
    const  history = useHistory()

    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            await axios.post("https://60f547872208920017f39fe8.mockapi.io/products", {productName, price, description})
            setLoading(false)
            history.push("/products")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Create Product</h1>
                <Link to="/products" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-left fa-sm text-white-50"></i> View All Products</Link>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-div">
                    <div className="row">
                        <div className="col-lg-4">
                            <label htmlFor="productName">Product Name:</label>
                            <input type="text" className="form-control" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} required />
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="price">Price:</label>
                            <input type="text" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-lg-8">
                            <label htmlFor="description">Description:</label>
                            <textarea rows='3' cols='3' className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                        </div>
                    </div>
                    <div className="row mt-3 ml-1">
                        <input type="submit" className="btn btn-primary" value="Create" disabled={isLoading} />
                    </div>
                </div>
            </form>
        </>
    )
}

export default CreateProduct

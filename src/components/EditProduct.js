import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory } from "react-router-dom"

function EditProduct(props) {

    const [productName, setProductName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [isLoading, setLoading] = useState(false)
    const  history = useHistory()

    let handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(props.match.params.id)
            // setLoading(true)
            await axios.put(`http://localhost:5000/update-product/${props.match.params.id}`, {productName, price, description})
            // setLoading(false)
            history.push("/products")
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(async () => {
        try {
            setLoading(true)
            let product = await axios.get(`http://localhost:5000/update-product/${props.match.params.id}`)
            setLoading(false)
            setProductName(product.data.productName)
            setPrice(product.data.price)
            setDescription(product.data.description)
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Edit Product</h1>
            </div>

            {
                // isLoading ? <h3>Loading...</h3> : 
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
                        <input type="submit" className="btn btn-primary" value="Update" disabled={isLoading} />
                    </div>
                </div>
            </form>
            }
        </>
    )
}

export default EditProduct

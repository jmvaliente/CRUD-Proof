import React, { useContext, useState, useEffect } from 'react'

import productContext from '../context/products/productContext'

const ProductEdit = () => {

    const context = useContext(productContext)

    const [state, setState] = useState({
        name: '',
        description: '',
        quantity: '',
        price: ''
    })
    
    //const {name, description, quantity, price} = state
    const {activeProduct} = context

    useEffect( () => {
        setState(activeProduct)
    },[activeProduct])

    const changeEvent = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }



    if (state===null) return null

    return (
        <div className="container-create">
            <h1>Edit Product</h1>
            <form className="form">
                <div className="form-items">
                    <label>Name Product </label>
                    <input
                        type = "text"
                        placeholder = "Name Product"
                        name = "name"
                        value = {state.name}
                        onChange = {changeEvent}
                    />
                </div>
                <div className="form-items">
                    <label>Description</label>
                    <input
                        type = "text"
                        placeholder = "Name Product"
                        name = "description"
                        value = {state.description}
                        onChange = {changeEvent}
                    />
                </div>
                <div className="form-items">
                    <label>Quantity </label>
                    <input
                        type = "numbrer"
                        placeholder = "Quantity"
                        name = "quantity"
                        value = {state.quantity}
                        onChange = {changeEvent}
                    />
                </div>
                <div className="form-items">
                    <label>Price </label>
                    <input
                        type = "numbrer"
                        placeholder = "Price Product"
                        name = "price"
                        value = {state.price}
                        onChange = {changeEvent}
                    />
                </div>
                <div className="form-items">
                    <button
                        type="submit"
                    >Create Product
                    </button>
                </div>
            </form>

        </div>
    )
}

export default ProductEdit
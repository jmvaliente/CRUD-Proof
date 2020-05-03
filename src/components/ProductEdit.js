import React, { useContext, useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'

import productContext from '../context/products/productContext'

const ProductEdit = () => {

    const history = useHistory()
    const context = useContext(productContext)

    const [state, setState] = useState({
        name: '',
        description: '',
        quantity: '',
        price: ''
    })
    
    //const {name, description, quantity, price} = state
    const {activeProduct, updateProductFn} = context

    useEffect( () => {
        setState(activeProduct)
    },[activeProduct])

    const changeEvent = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const submitProduct = (e) =>{
        e.preventDefault()

        updateProductFn(state)

        history.push('/')

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
                        className="form-items-buttom"
                        type="submit"
                        onClick={submitProduct}
                    >Edit Product
                    </button>
                </div>
            </form>

        </div>
    )
}

export default ProductEdit
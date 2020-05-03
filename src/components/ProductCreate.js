import React, { useContext, useState } from 'react'

import productContext from '../context/products/productContext'

const ProductCreate = () =>{

    const context = useContext(productContext)

    const [state, setState] = useState({
        name: '',
        description: '',
        quantity: '',
        price: ''
    })
    
    const {addProductFn} = context
    const {name, description, quantity, price} = state

    const changeEvent = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value
        })

    }

    const submitProduct = (e) => {
        e.preventDefault()

        //validate
        

        //action
        addProductFn(state)

        //reset
        setState({
            name: '',
            description: '',
            quantity: '',
            price: ''
        })
    }



    return (
        <div className="container-create">
            <h1>Product Create</h1>
            <form className="form">
                <div className="form-items">
                    <label>Name Product </label>
                    <input
                        type = "text"
                        placeholder = "Name Product"
                        name = "name"
                        value = {name}
                        onChange = {changeEvent}
                    />
                </div>
                <div className="form-items">
                    <label>Description</label>
                    <input
                        type = "text"
                        placeholder = "Name Product"
                        name = "description"
                        value = {description}
                        onChange = {changeEvent}
                    />
                </div>
                <div className="form-items">
                    <label>Quantity </label>
                    <input
                        type = "numbrer"
                        placeholder = "Quantity"
                        name = "quantity"
                        value = {quantity}
                        onChange = {changeEvent}
                    />
                </div>
                <div className="form-items">
                    <label>Price </label>
                    <input
                        type = "numbrer"
                        placeholder = "Price Product"
                        name = "price"
                        value = {price}
                        onChange = {changeEvent}
                    />
                </div>
                <div className="form-items">
                    <button 
                        className="form-items-buttom"
                        type="submit"
                        onClick={submitProduct}
                    >Create Product
                    </button>
                </div>
            </form>

        </div>
    )
}

export default ProductCreate
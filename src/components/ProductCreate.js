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


        //reset
    }



    const onClickFn = () =>{
        addProductFn()
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
                        onChange = {changeEvent}
                    />
                </div>
                <div className="form-items">
                    <label>Description</label>
                    <input
                        type = "text"
                        placeholder = "Name Product"
                        name = "description"
                        onChange = {changeEvent}
                    />
                </div>
                <div className="form-items">
                    <label>Quantity </label>
                    <input
                        type = "numbrer"
                        placeholder = "Quantity"
                        name = "quantity"
                        onChange = {changeEvent}
                    />
                </div>
                <div className="form-items">
                    <label>Price </label>
                    <input
                        type = "numbrer"
                        placeholder = "Price Product"
                        name = "price"
                        onChange = {changeEvent}
                    />
                </div>
                <div className="form-items">
                    <button
                        type="submit"
                        onClick={onClickFn}
                    >Create Product
                    </button>
                </div>
            </form>

        </div>
    )
}

export default ProductCreate
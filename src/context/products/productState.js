import React, { useReducer } from 'react'
import ProductContext from './productContext'
import ProductReducer from './productReducer'

import {ADD_PRODUCT, ADD_PRODUCT_OK, ADD_PRODUCT_ERROR} from '../../types'

const ProductState = props => {
    const initialState = {
        products:[],
        error: null,
        loading: false
    }

    const [state, dispatch] = useReducer(ProductReducer, initialState)

    const addProductFn = (product) =>{
        dispatch({
            type: ADD_PRODUCT,
            payload: product
        })
    }

    return (
        <ProductContext.Provider
            value={{
                addProductFn
            }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState
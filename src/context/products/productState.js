import React, { useReducer } from 'react'
import ProductContext from './productContext'
import ProductReducer from './productReducer'

import clientAxios from '../../config/axios'

import {ADD_PRODUCT, ADD_PRODUCT_OK, ADD_PRODUCT_ERROR,
        LIST_PRODUCT, LIST_PRODUCT_OK, LIST_PRODUCT_ERROR
        } from '../../types'

const ProductState = props => {
    const initialState = {
        products:[],
        error: null,
        loading: false
    }

    const [state, dispatch] = useReducer(ProductReducer, initialState)

    const addProductFn = async (product) =>{

        try {
            const result = await clientAxios.post('/products', product)
            dispatch({
                type: ADD_PRODUCT,
                payload: result.data
            })
            
        } catch (error) {
            console.log(error)   
        }

    }

    const listProductFn = async () => {
        
        try {
           const result = await clientAxios.get('/products')
           dispatch({
               type:LIST_PRODUCT,
               payload: result.data
           })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ProductContext.Provider
            value={{
                products: state.products,

                addProductFn,
                listProductFn
            }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState
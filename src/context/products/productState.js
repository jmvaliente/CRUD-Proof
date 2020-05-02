import React, { useReducer } from 'react'
import ProductContext from './productContext'
import ProductReducer from './productReducer'

import clientAxios from '../../config/axios'

import {ADD_PRODUCT, ADD_PRODUCT_OK, ADD_PRODUCT_ERROR,
        LIST_PRODUCT, LIST_PRODUCT_OK, LIST_PRODUCT_ERROR,
        EDIT_PRODUCT, EDIT_PRODUCT_OK, EDIT_PRODUCT_ERROR,
        DELETE_PRODUCT, DELETE_PRODUCT_OK, DELETE_PRODUCT_ERROR
        } from '../../types'
import Axios from 'axios'

const ProductState = props => {
    const initialState = {
        products:[],
        error: null,
        loading: false,
        activeProduct: null
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

    const editProductFn = (product) => {
        dispatch({
            type: EDIT_PRODUCT,
            payload: product
        })
    }

    const updateProductFn = async (product) => {

        try {
            await clientAxios.put(`/products/${product.id}`, product)
            dispatch({
                type: EDIT_PRODUCT_OK,
                payload: product
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    const deleteProductFn = async (product) => {
        try {
            await clientAxios.delete(`/products/${product.id}`,product)
            dispatch({
                type: DELETE_PRODUCT,
                payload: product
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ProductContext.Provider
            value={{
                products: state.products,
                activeProduct: state.activeProduct,

                addProductFn,
                listProductFn,
                editProductFn,
                updateProductFn,
                deleteProductFn
            }}
        >
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductState
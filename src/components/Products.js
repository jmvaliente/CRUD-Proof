import React, {Fragment, useContext, useEffect} from 'react'

import Product from './Product'

import productContext from '../context/products/productContext'

const Products = () => {

    const context = useContext(productContext)

    const{listProductFn, products} = context

    useEffect(()=>{
        listProductFn()
    },[])

    if(products==false) return null

    return(
        <Fragment>
            <h1>Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(products[0])}
                    {products[0].map(el => (<Product key={el.id} product={el}/>))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default Products
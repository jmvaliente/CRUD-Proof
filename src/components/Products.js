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
        <div className = "container-flex">
            <h1>Products</h1>
            <table className="table-flex">
                <thead className= "table-flex-head">
                    <tr>
                        <th className="form-items">Name</th>
                        <th className="form-items">Description</th>
                        <th className="form-items">Quantity</th>
                        <th className="form-items">Price</th>
                        <th className="form-items">Actions</th>
                    </tr>
                </thead>
                <tbody className= "table-flex-body">
                    {products.map(el => (<Product key={el.id} product={el}/>))}
                </tbody>
            </table>
        </div>
    )
}

export default Products
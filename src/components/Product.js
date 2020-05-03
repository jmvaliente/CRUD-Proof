import React, { useContext } from 'react'
import {Link} from 'react-router-dom'

import productContext from '../context/products/productContext'


const Product = (element) =>{

    const context = useContext(productContext)

    const {editProductFn, deleteProductFn} = context

    const {name, description, quantity, price, id} = element.product

    const onClickEdit = (product) => {
        editProductFn(product)
    }

    const onClickDelete = (product) => {
        deleteProductFn(product)
    }


    return(
        <tr>
            <td className="form-items">
                <p>{name}</p> 
            </td>
            <td className="form-items">
                <p>{description}</p>
            </td>
            <td className="form-items">
                <p>{quantity}</p> 
            </td>
            <td className="form-items">
                <p>{price}</p>
            </td>
            <td className="form-items">
                <div className="align-items-end">
                    <button>
                    <Link to ={`/product/edit/${id}`}
                        className="form-items-buttom"
                        onClick = {() => onClickEdit(element.product)}
                    >Edit
                    </Link>
                    </button>
                    <button
                        onClick = {() => onClickDelete(element.product)} 
                    >Delete
                    </button>
                </div>
            </td>
     </tr>
    )
}

export default Product
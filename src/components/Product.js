import React, { useContext } from 'react'
import {Link} from 'react-router-dom'

import productContext from '../context/products/productContext'


const Product = (element) =>{

    const context = useContext(productContext)

    const {editProductFn} = context

    const {name, description, quantity, price, id} = element.product

    const onClickEdit = (product) => {
        editProductFn(product)
    }

    const onClickDelete = (id) => {

    }


    return(
        <tr>
            <td>
                <p>{name}</p> 
            </td>
            <td>
                <p>{description}</p>
            </td>
            <td>
                <p>{quantity}</p> 
            </td>
            <td>
                <p>{price}</p>
            </td>
            <td>
                <div className="align-items-end">
                    <Link to ={`/product/edit/${id}`}
                        onClick = {() => onClickEdit(element.product)}
                    >Edit
                    </Link>
                    <button
                        onClick = {onClickDelete} 
                    >Delete
                    </button>
                </div>
            </td>
     </tr>
    )
}

export default Product
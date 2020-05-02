import React from 'react'

const Product = (element) =>{

    const {name, description, quantity, price} = element.product

    const onClickEdit = (task) => {

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
                    <button onClick = {() => onClickEdit(element.product)} className = "ml-2 p-2 bd-highlight badge badge-pill">Edit</button>
                    <button
                        onClick = {onClickDelete} 
                        className = "ml-2 p-2 bd-highlight badge badge-pill">Delete</button>
                </div>
            </td>
     </tr>
    )
}

export default Product
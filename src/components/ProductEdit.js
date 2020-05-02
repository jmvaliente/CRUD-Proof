import React from 'react'

const ProductEdit = () => {
    return (
        <div className="container-create">
            <h1>Edit Product</h1>
            <form className="form">
                <div className="form-items">
                    <label>Name Product </label>
                    <input
                        type = "text"
                        placeholder = "Name Product"
                        name = "name"
                    />
                </div>
                <div className="form-items">
                    <label>Description</label>
                    <input
                        type = "text"
                        placeholder = "Name Product"
                        name = "description"
                    />
                </div>
                <div className="form-items">
                    <label>Quantity </label>
                    <input
                        type = "numbrer"
                        placeholder = "Quantity"
                        name = "quantity"
                    />
                </div>
                <div className="form-items">
                    <label>Price </label>
                    <input
                        type = "numbrer"
                        placeholder = "Price Product"
                        name = "price"
                    />
                </div>
                <div className="form-items">
                    <button
                        type="submit"
                    >Create Product
                    </button>
                </div>
            </form>

        </div>
    )
}

export default ProductEdit
import {
    ADD_PRODUCT, LIST_PRODUCT, EDIT_PRODUCT, EDIT_PRODUCT_OK, DELETE_PRODUCT
} from '../../types'

export default (state, action) =>{
    switch(action.type){

        case ADD_PRODUCT:
            return{
                ...state,
                products: [...state.products, action.payload]
            }
        case LIST_PRODUCT:
            return{
                ...state,
                products: action.payload
            }
        case EDIT_PRODUCT:
            return{
                ...state,
                activeProduct: action.payload
            }
        case EDIT_PRODUCT_OK:
            return{
                ...state,
                products: state.products.map(element => 
                    element.id === action.payload.id ? element = action.payload : element),
                activeProduct: null
            }
        case DELETE_PRODUCT:
            return{
                ...state,
                products: state.products.filter(element => 
                   element.id !== action.payload.id)
            }

        default:
            return state
    }
}
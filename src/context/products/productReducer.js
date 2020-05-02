import {
    ADD_PRODUCT, ADD_PRODUCT_OK, ADD_PRODUCT_ERROR,
    LIST_PRODUCT, LIST_PRODUCT_OK, LIST_PRODUCT_ERROR,
    EDIT_PRODUCT, EDIT_PRODUCT_OK, EDIT_PRODUCT_ERROR
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
                products: [...state.products, action.payload]
            }
        case EDIT_PRODUCT:
            console.log(action.payload)
            return{
                ...state,
                activeProduct: action.payload
            }

        default:
            return state
    }
}
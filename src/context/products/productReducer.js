import {
    ADD_PRODUCT, ADD_PRODUCT_OK, ADD_PRODUCT_ERROR,
    LIST_PRODUCT, LIST_PRODUCT_OK, LIST_PRODUCT_ERROR
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

        default:
            return state
    }
}
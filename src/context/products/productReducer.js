import {
    ADD_PRODUCT, ADD_PRODUCT_OK, ADD_PRODUCT_ERROR
} from '../../types'

export default (state, action) =>{
    switch(action.type){

        case ADD_PRODUCT:
            console.log(action.payload)
            return{
                ...state,
                products: [...state.products, action.payload]
            }

        default:
            return state
    }
}
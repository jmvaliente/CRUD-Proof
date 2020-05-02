import {
    ADD_PRODUCT, ADD_PRODUCT_OK, ADD_PRODUCT_ERROR
} from '../../types'

export default (state, action) =>{
    switch(action.type){

        case ADD_PRODUCT:
            console.log("add product")
            return{
                ...state,
            }

        default:
            return state
    }
}
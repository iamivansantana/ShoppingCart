import { types } from '../../types/types';


 const articlesReducer = (state = [], action) => {
    switch (action.type) {
        
        case types.addShoppingCArt:
            return [...state,
                action.payload
            ];


        case types.updateQtyProduct:
        case types.addProduct:
            return state.map(product=>
                (product.productId === action.payload.id)
                ?{...product, productQuantity: product.productQuantity + action.payload.qty}
                :product
                );

        default:
           return state;
    } 
}

export default articlesReducer;
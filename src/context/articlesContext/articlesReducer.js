import { types } from '../../types/types';


 const articlesReducer = (state = [], action) => {
    switch (action.type) {
        
        case types.addShoppingCArt:
            return [...state,
                action.payload
            ];

        case types.updateQtyProduct:
            return state.map(product=>
                (product.productId === action.payload.id)
                ?{...product, productQuantity: product.productQuantity + action.payload.qty}
                :product
                );
                
        case types.addProduct:
            return state.map(product=>
                (product.productId === action.payload.id)
                ?{...product, productQuantity: product.productQuantity + 1}
                :product
                );
        
        case types.subtractProduct:
            return state.map(product=>
                (product.productId === action.payload.id)
                ?{...product, productQuantity: product.productQuantity - 1}
                :product
                );

        case types.deleteProduct:
            return state.filter(product=>product.productId !== action.payload.id);


        default:
           return state;
    } 
}

export default articlesReducer;
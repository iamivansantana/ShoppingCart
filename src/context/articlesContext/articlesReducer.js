import { types } from '../../types/types';


export default (state, action)=>{
    switch (action.type) {

       case types.addProduct:
           return{
                
           }
        case types.subtractProduct:
            return{
                
            }

        default:
           return state;
    } 
}
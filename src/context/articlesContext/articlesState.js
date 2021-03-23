import React, { useEffect, useReducer } from 'react';
import { types } from '../../types/types';
import articlesContext from './articlesContext';
import articlesReducer from './articlesReducer';

        //init es utilizado por el useReducer como estado inicial.
        const init = ()=>{
            //regresa el contenido almacenado del user en el localStorage y en caso de no existir retorna la "{ logged: false }"
            return JSON.parse(localStorage.getItem('Cart')) || [];
        }

const ArticlesState = ( props ) => {


    const [cart, dispatch] = useReducer(articlesReducer, [], init)

    //efecto que cambia el contenido del user en localStorage cada vez que el user cambia
    useEffect(() => {
        localStorage.setItem('Cart',JSON.stringify(cart));
    }, [cart]);
    
    
//Funciones:

    const addExit =(id,productQuantity)=>{
        dispatch({
            type: types.updateQtyProduct,
            payload: {
                id: id,
                qty: productQuantity
            }
        });
    }

    const addNew =  (newArticle)=>{
        dispatch({
            type: types.addShoppingCArt,
            payload: newArticle
        });
    }
    const addProduct = (id)=>{
        dispatch({
            type: types.addProduct,
            payload:{id}
        });
    }
    const subtraktProduct = (id)=>{
        dispatch({
            type: types.subtractProduct,
            payload:{id}
        })
    }
    const deleteProduct = (id)=>{
        dispatch({
            type: types.deleteProduct,
            payload:{id}
        });
    }
// recorre el state del carrito y cuando un produncto es <= 0 lo elimina
    // eslint-disable-next-line
    cart.map(product=>{
        if (product.productQuantity <= 0) {
            deleteProduct(product.productId);
        }
    })

    return (
        <articlesContext.Provider
         value={{
            cart,
            addExit,
            addNew,
            addProduct,
            subtraktProduct,
         }}
        >
            {props.children}
        </articlesContext.Provider>
    )
}

export default ArticlesState;

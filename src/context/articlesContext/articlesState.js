import React, { useEffect, useReducer } from 'react'
import articlesContext from './articlesContext'
import articlesReducer from './articlesReducer'

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


    return (
        <articlesContext.Provider
         value={{
            dispatch,
            cart

         }}
        >
            {props.children}
        </articlesContext.Provider>
    )
}

export default ArticlesState;

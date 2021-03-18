import React from 'react'
import articlesContext from './articlesContext'

const ArticlesState = ( props ) => {




    //Funciones:


    return (
        <articlesContext.Provider
         value={{
            
         }}
        >
            {props.children}
        </articlesContext.Provider>
    )
}

export default ArticlesState;

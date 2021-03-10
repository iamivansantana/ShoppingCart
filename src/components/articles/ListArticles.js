import React from 'react';
import{ articulos } from '../../data/dataStore';
import ArticlesCard from './ArticlesCard';



const ListArticles = () => {

    // console.log(articulos);

    return (
        <div>
            <div className="container-grid">
            {
                //mapeo con los Articulos 
                articulos.map(articulo =>(
                    <ArticlesCard 
                        key={ articulo.id }
                        articulo = { articulo }
                   />
                ))
            }
            </div>
        </div>
    )
}

export default ListArticles;

import React from 'react';
import { Link } from 'react-router-dom';


const ArticlesCard = ({ articulo }) => {


    return (
        <>    
            
                    <Link to={`./sneaker/${ articulo.id }`} className='btn'>
                        <div className="item-card">
                                <div className='tittle-down'>
                                    <spam style={{color:'black'}}>{articulo.name}</spam><br />
                                    <spam style={{color:'rgb(3, 185, 185)'}} >USD $ {articulo.price}</spam>                    
                                </div>
                                <img src={`./assets/sneakers/${articulo.id}-0.jpg`} height='140%' className='center' alt={articulo.name} />
                        </div>   
                    </Link>
             
        </>
    )
}

export default ArticlesCard

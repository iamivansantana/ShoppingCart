import React from 'react'

const ArticlesCard = ({ articulo }) => {


    return (
        <>    
            
                <div className="item-card">
                    <div className='tittle-down'>
                        <spam>{articulo.name}</spam><br />
                        <spam style={{color:'rgb(3, 185, 185)'}} >USD $ {articulo.price}</spam>                    
                    </div>
                    <img src={`./assets/sneakers/${articulo.id}-0.jpg`} height='140%' className='center' alt={articulo.name} />
                  
                   
                </div>   
             
        </>
    )
}

export default ArticlesCard

import React, { useContext } from 'react';
import articlesContext from '../../context/articlesContext/articlesContext';

const CartCard = ({ product }) => {

    const { addProduct,subtraktProduct} = useContext(articlesContext);

    const id = product.productId;
    let newID = id.substring(0, id.length - 2);


//Funciones

    const hanldeAddOne = (e)=>{
        e.preventDefault();

        addProduct(product.productId);
    }
    const hanldeSubtraktOne = (e)=>{
        e.preventDefault();

        subtraktProduct(product.productId);
    }


    return (
        <>
            <div className="product-card" >
                <div className='product-card-left'>
                    <div className='product-card-img'>
                        <img loading="lazy" src={`./assets/sneakers/${newID}-1.jpg`} width='70%' className='center' alt={product.productId} /> 
                    </div>
                </div>
                <div className="product-card-right">
                    <div className="up">
                        <div>
                            <span>{product.productName}</span>
                        </div>
                        <div>
                            <span style={{color:'rgb(121, 121, 121)'}}>size/{product.productSize} </span>
                        </div>
                    </div>
                    <div className="down">
                        <div className="down-left">
                            
                            <div  style={{paddingLeft:'0rem',paddingTop:'1rem'}}>                                
                                
                                <button className="btn-qty" onClick={hanldeSubtraktOne} > - </button>
                                <input 
                                    type="number" 
                                    className="num-qty" 
                                    name="productQuantity" 
                                    value={product.productQuantity}
                                    disabled
                                />
                                <button className="btn-qty" onClick={hanldeAddOne}> + </button>
                                
                            </div>
                        </div>
                        <div className="down-right">
                            <div style={{paddingTop:''}}>
                                <h3 >$ {(product.productPrice*product.productQuantity).toFixed(2)}</h3>       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartCard

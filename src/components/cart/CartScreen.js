import React, { useContext } from 'react'
import articlesContext from '../../context/articlesContext/articlesContext'
import CartCard from './CartCard';

const CartScreen = () => {

    const { cart } = useContext(articlesContext);

    const reducer = cart.reduce((accumulator, currentValue) => accumulator += currentValue.productPrice * currentValue.productQuantity,0);


    return (

        <>
          <div className="secction1">
            <h2 style={{textAlign:'center', fontWeight:'lighter'}}>SHOPPING CART</h2>
            
            <div className="cart-cont">
              <ul style={{margin:'0', padding: '0', border:'0'}}>
                  {
                    //mapeo con los Articulos 
                    cart.map(product =>(
                        <li 
                          key={ product.productId } 
                          style={{marginTop:'10px',listStyle:'none',borderBottom:'1px solid #b4b3b39f'}}>
                          <CartCard 
                            product = { product }

                          />
                      </li>
                    ))
                  }
                  <li style={{marginTop:'10px',listStyle:'none',borderBottom:'1px solid #b4b3b39f',textAlign:'right',color:'rgb(3, 185, 185)'}}>
                    <h2 style={{marginRight:'3rem'}}>Total: $  {reducer}</h2>
                  </li>                
              </ul>
            </div>
            

          </div>
        </>
    )
}

export default CartScreen

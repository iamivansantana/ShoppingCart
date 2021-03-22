import React, { useContext } from 'react'
import articlesContext from '../../context/articlesContext/articlesContext'
import CartCard from './CartCard';

const CartScreen = () => {

    const { cart } = useContext(articlesContext);

    const [product1  ,product2] = cart;


    console.log(product1, product2)

    return (

        <>
          <div className="secction1">
            <h2 style={{textAlign:'center', fontWeight:'lighter'}}>SHOPPING CART</h2>
            
            <div className="items-cont">
              <ul style={{margin:'0', padding: '0', border:'0'}}>
                  {
                    //mapeo con los Articulos 
                    cart.map(product =>(
                        <CartCard 
                            key={ product.productId }
                            product = { product }
                      />
                    ))
                  }                
              </ul>
            </div>
            

          </div>
        </>
    )
}

export default CartScreen

import React, { useContext } from 'react'
import articlesContext from '../../context/articlesContext/articlesContext'
import CartCard from './CartCard';

const CartScreen = ({ history }) => {

    const { cart } = useContext(articlesContext);

    const reducer = cart.reduce((accumulator, currentValue) => accumulator += currentValue.productPrice * currentValue.productQuantity,0);


    //metodo que se ejecuta al hacer clic en el boton return.
   const handleReturn = ()=>{
       
    //condiciona si el historial de navegacion es menor igual a 2 hal hacer clic te agrega al path '/'.
       if (history.length <= 2) {
           history.push('/');
       }else{
            //Si el tamaño del historial es mayor te lleva a la pagina anterior.
            history.goBack();
       }
   }

    return (

        <>
        {
              (cart.length <=0)
              ? null
              : 
              <div className="div-btn-add" style={{textAlign:'center',paddingTop:'0rem'}}>
                <li style={{marginTop:'10px',listStyle:'none',textAlign:'center',color:'rgb(3, 185, 185)'}}>
                      <h2 style={{marginRight:'0rem'}}>Total: $  {reducer.toFixed(2)}</h2>
                    </li>
                <button className="btn-add" style={{width:'50%'}}>Finalize Order</button>
              </div> 
            }
          <div className="secction3 shopcart">
                  
          <div style={{position:'absolute'}}>
          
                <button
                  className="btn-none"
                  onClick={handleReturn}
                >
                  <i className="fa fa-angle-double-left icon"></i><span>Back</span>
                </button>
                
              </div>
            {(cart.length <=0)
            ? <h3 className="tittle" style={{textAlign:'center',opacity:'10%'}}>THERE ARE NOT PRODUCTS ON YOUR CART</h3>
            :
            <div>
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
                                    
                </ul>
              </div>
               
            </div>
            
            }
            
           
            

          </div>
          
        </>
    )
}

export default CartScreen

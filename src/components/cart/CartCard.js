import React from 'react'

const CartCard = ({ product }) => {

    return (
        <>
            <div className="product-card" >
                <div className=''>
                    {/* <img loading="lazy" src={`./assets/sneakers/${product.productId}-0.jpg`} height='140%' className='center' alt={product.productName} />                        */}
                </div>
                <div className="">
                    <div className="">
                     <h5>{product.productId}</h5>
                    </div>
                    <div className="down">
                        <div className="">

                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartCard

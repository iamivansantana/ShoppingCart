import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import articlesContext from '../../context/articlesContext/articlesContext';


const NavBar = ({ history }) => {

    const {cart} = useContext(articlesContext);

    
    const total = cart.reduce((accumulator, currentValue) => accumulator +=  currentValue.productQuantity,0);
    

    return (
        <>
        <div className="navbar-fixed">
            <nav className="navbar">   
                <div className="navbar-left">
                    
                        <Link to="/menu" className="btn-none" style={{textDecoration:'none'}}>
                            <i className="fa fa-home icon"></i>
                        </Link>
                </div>

                <div className="navbar-center">
                    <div >
                        <Link to="/"><img src="/assets/buhuhuwhite3.png" className="logo img" alt="LogoPortadaBuhuhu" /></Link>
                    </div>
                </div>

                <div className="navbar-right" >
                    <div style={{position:'absolute',right:'5px'}}>
                        <Link to="/search">
                            <i className="fa fa-search icon"></i>
                        </Link>
                        <Link to="/cart">
                            {
                                (total>0)?<span className='mark-cart'>{total}</span> : null
                            }
                            
                            <i className="fa fa-shopping-cart icon" ></i>
                        </Link>
                    </div>
                </div>

            </nav>
        </div>  
        </>
    )
}

export default NavBar

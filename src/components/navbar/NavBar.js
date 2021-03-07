import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = ({ history }) => {

    //metodo que se ejecuta al hacer clic en el boton return.
   const handleReturn = ()=>{
       
    //condiciona si el historial de navegacion es menor igual a 2 hal hacer clic te agrega al path '/'.
       if (history.length <= 1) {
           history.push('/menu');
       }else{
            //Si el tamaño del historial es mayor te lleva a la pagina anterior.
            history.goBack();
       }
   }

    return (
        <>
            <nav className="navbar">   
                <div className="navbar-left">
                    <button 
                        className="btn-none"
                        style={{textDecoration:'none'}}
                        onClick={handleReturn}
                    >
                       <i class="fa fa-chevron-left icon"></i>
                        
                    </button>
                </div>

                <div className="navbar-center">
                    <div >
                        <Link to="/"><img src="/assets/buhuhuwhite3.png" className="logo img" alt="LogoPortadaBuhuhu" /></Link>
                    </div>
                </div>

                <div className="navbar-right" >
                    <div style={{position:'absolute',right:'5px'}}>
                        <Link
                            exact
                            to="/search" 
                        >
                            <i class="fa fa-search icon"></i>
                        </Link>
                        <Link
                            exact
                            to="/cart"
                        >
                            <i class="fa fa-shopping-cart icon" ></i>
                        </Link>
                    </div>
                </div>

            </nav>  
        </>
    )
}

export default NavBar

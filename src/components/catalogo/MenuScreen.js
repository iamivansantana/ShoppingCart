import React from 'react';
import { Link } from 'react-router-dom';
import ListArticles from '../articles/ListArticles';


const MenuScreen = () => {

        
    return (
        <div>
            <div className='cover-page'>
                <img className='cover-img' loading="lazy" src={`./assets/sneakers/LeBron-17-Fire-Red-0.png`} width='60%'  alt='LeBron-17-Fire-Red-0' />
                
                <h1 className='cover-tittle'>LeBron 17 Fire Red 0</h1>
                
                <img className="cover-background"   src={`./assets/basketball.svg`} width='60%'  alt='ball' />
                
                <div className="cover-sub">
                    <h2 className="price-cover">USD $239</h2>
                    <h5>Sizes:</h5>
                    
                    <div>
                        <button className="btn-size">27</button>
                        <button className="btn-size">28</button>
                        <button className="btn-size">29</button>
                        
                    </div>
                    <div style={{marginTop:'2rem'}}>
                    <Link to={`./sneaker/LeBron-17-Fire-Red`} className='btn'>
                        <button className="btn-add">SEE </button>
                    </Link>    
                    </div>
                </div>
            </div>
            <div className="secction1 shopcart" style={{paddingTop:'1rem'}}>
            <h2 style={{textAlign:'center', fontWeight:'lighter'}}>SNEAKERS</h2>
                <div className="items-cont">
                    <ListArticles />
                    <div style={{position:'relative',textAlign:'center',top:'7rem',paddingBottom:'2rem'}}>
                        <p style={{fontWeight:'100'}}>BY IVAN SANTANA</p>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default MenuScreen

import React, { useMemo, useState } from 'react';
import { Redirect, useParams } from 'react-router';
import { getArticleById } from '../../selectors/getArticleById';

const ArticlesScreen = ({ history }) => {
    //Counter quantity.
    const[counter,setCounter] = useState(0); 
    
    //se utiliza el hook useParams() para obtener/acceder a los parametros del path
    //se desestructura heroeId
    const { sneakerId } = useParams();

    //se utiliza el metodo getHeroById() mandando el articuloId y que retorna el listado de los articulos que coinciden con el id mandado.
   //se utiliza el hook useMemo para guardar el resultado del listado de los articulos que retorna el metodo getHeroById() y que solo cambia con el [sneackerId]
   const sneaker = useMemo(() => getArticleById(sneakerId), [sneakerId]);


   //si el hero no existe o retorna false se redirecciona al path '/'
   if(!sneaker) return <Redirect to="/" />

   //se desestructuran las propiedades deseadas de hero.
   const {
    id,
    name,
    price,
    size,
    description
   } = sneaker;

   const[uno,dos,tres]=size;

   //metodo que se ejecuta al hacer clic en el boton return.
//    const handleReturn = ()=>{
       
//     //condiciona si el historial de navegacion es menor igual a 2 hal hacer clic te agrega al path '/'.
//        if (history.length <= 2) {
//            history.push('/');
//        }else{
//             //Si el tamaño del historial es mayor te lleva a la pagina anterior.
//             history.goBack();
//        }
//    }

   

    //Reset
    // const handleReset = ()=>{
    //     setCounter(0);  
    // }
    //handleAdd
    const handleAdd = (e)=>{
        e.preventDefault();
        setCounter(counter + 1);  
        // setCounter((c)=>c+1);
    }
    //handleMenos o handleSubtrack
    const handleSubtrack = (e)=>{
        e.preventDefault();
        setCounter(counter - 1);  
        
    }
    
    return (
        <>
            <div className="secction1">
                <div className="left">
                    <div className="slider">
                        <img loading="lazy" id="img1" src={`/assets/sneakers/${id}-0.jpg`} alt={`${name}`}/>
                        <img loading="lazy" id="img2"src={`/assets/sneakers/${id}-1.jpg`} alt={`${name}`}/>
                        <img loading="lazy" id="img4"src={`/assets/sneakers/${id}-3.jpg`} alt={`${name}`}/>
                        <img loading="lazy" id="img5"src={`/assets/sneakers/${id}-4.jpg`} alt={`${name}`}/>
                    </div>
                    <div className="secction-img-menu">
                        <ul className="secction-img">
                            <li className="img-link"> 
                                <a href="#img1">
                                    <img loading="lazy" src={`/assets/sneakers/${id}-0.jpg`} alt={`${name}`} width='100%' style={{marginTop:'-12px'}}/>
                                </a>
                            </li>
                            <li className="img-link"> 
                                <a href="#img2">
                                    <img loading="lazy" src={`/assets/sneakers/${id}-1.jpg`} alt={`${name}`} width='100%' style={{marginTop:'-12px'}}/>
                                </a>
                            </li>
                            <li className="img-link"> 
                                <a href="#img4">
                                    <img loading="lazy" src={`/assets/sneakers/${id}-3.jpg`} alt={`${name}`} width='100%' style={{marginTop:'-12px'}}/>
                                </a>
                            </li>
                            <li className="img-link">
                                <a href="#img5">
                                    <img loading="lazy" src={`/assets/sneakers/${id}-4.jpg`} alt={`${name}`} width='100%' style={{marginTop:'-12px'}}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="contenedor">
                        <div className="tittle">
                            <span>{name}</span>
                        </div>
                        <div className="price">
                            <span>USD ${price}</span>
                        </div>
                        <form>
                            
                            <div className="sizes">    
                                <select required>
                                    <option value="n/a" selected>
                                        Size:
                                    </option>
                                    <option value={uno}>
                                        {uno} cm
                                    </option>
                                    <option value={dos}>
                                        {dos} cm
                                    </option>
                                    <option value={tres} >
                                        {tres} cm
                                    </option>
                                </select>
                            </div>
                            <div className="qty">
                                <span>Quantity:</span>
                            </div>
                            <div className="quantity">
                                {/* <button onClick={handleReset}>Reset</button> */}
                                <button className="btn-qty" onClick={handleSubtrack}>-1</button>
                                <input className="num-qty" type="text" value={counter} disabled/>
                                <button className="btn-qty" onClick={handleAdd}>+1</button>
                                
                            </div>
                            <div className="cont-add">
                                <input className="btn-add" type="submit" name="add" value="Add to ShopingCart." />
                            </div>
                        </form>
                    </div>
                   
                    
                </div> 
                <div className="down">
                    <div className="cont-desc">
                            <div className="desc">
                                <h3>Description:</h3>
                                <p>{description}</p>
                            </div>
                    </div>                   
                </div>
            </div>  
        </>
    )
}

export default ArticlesScreen
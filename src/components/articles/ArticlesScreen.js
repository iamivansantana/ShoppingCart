import React, { useContext, useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import articlesContext from '../../context/articlesContext/articlesContext';
import { useForm } from '../../hooks/useForm';
import { getArticleById } from '../../selectors/getArticleById';
import { types } from '../../types/types';



const ArticlesScreen = ({ history }) => {

    //Accede al context
    const {cart,dispatch} = useContext(articlesContext);

    //useForm
    const initialForm = {
        productSize:0,
        productQuantity:1
        }
    
    const [ formValues, handleInputChange,setValues ] = useForm( initialForm );

    const{productQuantity,productSize}=formValues;
    
    
    
    //se utiliza el hook useParams() para obtener/acceder a los parametros del path
    //se desestructura heroeId
    const { sneakerId } = useParams();

    
    //se utiliza el metodo getHeroById() mandando el articuloId y que retorna el listado de los articulos que coinciden con el id mandado.
    //se utiliza el hook useMemo para guardar el resultado del listado de los articulos que retorna el metodo getHeroById() y que solo cambia con el [sneackerId]
    const sneaker = useMemo(() => getArticleById(sneakerId), [sneakerId]);        

    //si el hero no existe o retorna false se redirecciona al path '/'
    if(!sneaker) return <Redirect to="/" />
    
    //se desestructuran las propiedades deseadas de sneaker.
    const {
        id,
        name,
        price,
        size,
        description
    } = sneaker;
    
    //dessestructuracion de size
    const[uno,dos,tres]=size;
        

    //handleAdd
    const handleAdd = (e)=>{
        e.preventDefault();
        setValues({
            ...formValues,
            productQuantity: productQuantity + 1
        });

    }
    //handleMenos o handleSubtrack
    const handleSubtrack = ( e ) => {
        e.preventDefault();
        setValues({
            ...formValues,
            productQuantity: productQuantity - 1
        });   
    }

    const newArticle={
        productId:id,
        productName:name,
        productPrice:price,
        productSize:productSize,
        productQuantity:productQuantity
    };


    //submit Formulario
    const handleAddCart = ( e )=>{
         e.preventDefault();  

         if(productSize <= 0 || productQuantity <= 0 ){
             console.log('elija una talla y un cantidad valida');
             return;
         }

         // checks whether an element is exist
        const exist = cart.some((element) => element.productId === id);

        if (exist) {
            dispatch({
                type: types.updateQtyProduct,
                payload: {
                    id: id,
                    qty: productQuantity
                }
            });
            console.log('add exit');
        } else {
            dispatch({
                type: types.addShoppingCArt,
                payload: newArticle
            });
            console.log('product added');
        }
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
                                    <img 
                                        loading="lazy" 
                                        src={`/assets/sneakers/${id}-0.jpg`} 
                                        alt={`${name}`} 
                                        width='100%' 
                                        style={{marginTop:'-12px'}}
                                    />
                                </a>
                            </li>
                            <li className="img-link"> 
                                <a href="#img2">
                                    <img 
                                        loading="lazy" 
                                        src={`/assets/sneakers/${id}-1.jpg`} 
                                        alt={`${name}`} 
                                        width='100%' 
                                        style={{marginTop:'-12px'}}
                                    />
                                </a>
                            </li>
                            <li className="img-link"> 
                                <a href="#img4">
                                    <img 
                                        loading="lazy" 
                                        src={`/assets/sneakers/${id}-3.jpg`} 
                                        alt={`${name}`} 
                                        width='100%' 
                                        style={{marginTop:'-12px'}}
                                    />
                                </a>
                            </li>
                            <li className="img-link">
                                <a href="#img5">
                                    <img 
                                        loading="lazy" 
                                        src={`/assets/sneakers/${id}-4.jpg`} 
                                        alt={`${name}`} 
                                        width='100%' 
                                        style={{marginTop:'-12px'}}
                                    />
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

                        <form onSubmit={handleAddCart}>
                            
                            <div className="sizes">    
                                <select name="productSize" onChange={handleInputChange} >
                                    <option defaultValue hidden> 
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
                                <button className="btn-qty" onClick={handleSubtrack}> -1 </button>
                                <input 
                                    type="number" 
                                    className="num-qty" 
                                    onChange={handleInputChange}  
                                    name="productQuantity" 
                                    value={productQuantity}
                                    disabled
                                />
                                <button className="btn-qty" onClick={handleAdd}> +1 </button>
                                
                            </div>
                            <div className="cont-add">
                                <input 
                                    type="submit" 
                                    className="btn-add" 
                                    name="add" 
                                    value="Add to ShopingCart."
                                />
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

export default ArticlesScreen;

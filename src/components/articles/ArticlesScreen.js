import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router';
import { getArticleById } from '../../selectors/getArticleById';

const ArticlesScreen = ({ history }) => {
    
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
            <div className="secction1">
                <div className="left">
                    
                </div>
                <div className="right">
               
                </div> 
                <div>
                    <spam>{name}</spam><br />
                    <spam>{price}</spam><br />
                    <spam>{uno}</spam><br />
                    <spam>{dos}</spam><br />
                    <spam>{tres}</spam><br />
                    <spam>{description}</spam>
                </div>                   
            </div>  
        </>
    )
}

export default ArticlesScreen

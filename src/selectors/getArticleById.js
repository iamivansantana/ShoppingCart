//Se importa la data .
import { articulos } from "../data/dataStore";

//El metodo recibe el id qeu se utilizara para la busqueda
export const getArticleById = ( id ) => {

    //Retorna un el articulo encontrado.
    return articulos.find( articulo => articulo.id === id );

}
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import './../ItemListContainer/itemListContainer.css';
import  CountContainer from './../CountContainer/countContainer';
import ItemList from './../ItemList/itemList';
import {ItemDetail} from './../../components/ItemDetail/itemDetail';
import prodBurly from './../../assets/baseDatos/datosBurly';

export const ListContainer = ({greeting}) => {

//prueba a ver si lo arreglo

const [productos, setProductos] = useState ([])
    const [categoryId, setcategoryId]=useState() 
    

    useEffect(() => {
        console.log({categoryId})
        
    }, [categoryId])
    
    
    useEffect(() => {
        
            const traerProductosBD= new Promise ((resolve,reject)=>{
                setTimeout(() => {
                resolve(prodBurly) }, 200);
                
        
            })
                traerProductosBD.then( (resultado) => {
                    console.log(resultado)
                    if(categoryId === undefined){
                        setProductos(resultado)
                        setTimeout(() => {
                            console.log(productos)  
                        }, 100); 
                    } else {
                        const productosFiltrados = resultado.filter(itSillon=>itSillon.linea===categoryId)
                        setTimeout(() => {
                        console.log(productosFiltrados)
                        }, 100); 
                        setProductos(productosFiltrados)
                        setTimeout(() => {
                        console.log(productos)  
                        }, 100); 
                    }
                                   
                    return productos  //porqué no imprime el array completo en la consola?
                })
                .catch(err=>{console.log(`El error es ${err}`)})
            
    }, [categoryId])



    return (
        
        <div className="prueba">    
            
            <h2 className="salu">{greeting}</h2>    
    
            <CountContainer initial = {1} stock = {5}/>    
            <CountContainer initial = {2} stock = {9}/>   
            <ItemList itSillon={productos}/>         

        </div>
    )
}

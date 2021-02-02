import React from 'react'
import './../ItemListContainer/itemListContainer.css'
import  CountContainer from './../CountContainer/countContainer';

export const ListContainer = ({greeting}) => {

    return (
        
        <div className="prueba">    
            
            <h2 className="salu">{greeting}</h2>    
    
            <CountContainer initial = {1} stock = {5}/>    
            <CountContainer initial = {2} stock = {9}/>            

        </div>
    )
}

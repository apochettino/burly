import React from 'react'
import './../ItemList/itemList.css';
import Item from './../../components/Item/item'


const ItemList = ({itSillon}) =>{

    
    
    const catalogoProductos = itSillon.map((sillon) =>{
        return(<Item key={sillon.id} producto={sillon}/>)

    })
 
    return(
        

        <div className="conTarje">
            {catalogoProductos}
        </div>
      
        
    )
}

export default ItemList
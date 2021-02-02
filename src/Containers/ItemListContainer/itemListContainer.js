import React from 'react'
import './../ItemListContainer/itemListContainer.css'
import  countContainer from './../CountContainer/countContainer';

export const ListContainer = ({greeting}) => {

    return (
        
        <div>    
            
            <h2 className="salu">{greeting}</h2>    
    
            <countContainer />            

        </div>
    )
}

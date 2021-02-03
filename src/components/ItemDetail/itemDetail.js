import React from'react';
import * as ReactBootStrap from 'react-bootstrap';
import './../ItemDetail/itemDetail.css';
import Item01 from './components/Item/item';


export const ItemDetail01 = ( { Items }) => {

    return (
        
        <div id="itemList">
            <Item01 />

        {videos.map(video => (
            <Item key={item.id} item={item} />
        ))}    

        </div>
        
      

        );
    };
    
export default ItemDetail01;        
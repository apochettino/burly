import React from 'react'
import './../Item/item.css';
import item01 from '../../assets/burItem01.png';
import * as ReactBootStrap from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export const Item01 = () => {

    return (
        
      <Card className="carItemCatalogo">
      <Card.Img variant="top" src={item01} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Acá va el detalle del producto que se vende.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                
       

        );
    };
    
export default Item01;        
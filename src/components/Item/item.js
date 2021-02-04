import React from 'react'
import './../Item/item.css';
import item01 from '../../assets/burItem01.png';
import * as ReactBootStrap from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Count from './../ItemCount/itemCount';

 

const Item01 = ({ producto }) => {
  
    return (
        
      <Card className="carItemCatalogo">

        

          <Card.Img variant="top" src={`${producto.img}`} />
          <Card.Body>
            <Card.Title>Sillon 01</Card.Title>

              <Card.Subtitle className="">{producto.varietal}
              </Card.Subtitle>


            <Card.Text>

                        {producto.linea ? producto.linea :
                        producto.descripcion ? producto.descripcion : <br/> }
                        <hr/>
                        $ {new Intl.NumberFormat("de-DE").format(producto.precio)}


            </Card.Text>
            <Count/>   
            <br></br>         
            <Button variant="primary">Comprar</Button>
          </Card.Body>

        

    </Card>
                
       

        );
    };
    
export default Item01;        
import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import primerObjeto from '../../assets/b001.png';


export const ItemList = () => {

    return (

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={primerObjeto} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>


    )

}
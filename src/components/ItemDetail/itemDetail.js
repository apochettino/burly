import React, { useState, useContext } from "react";
import { Card, Container, Button } from "react-bootstrap";
//import CountContainer from './../../Containers/CountContainer/countContainer';
import Count from './../ItemCount/itemCount';
import * as ReactBootStrap from 'react-bootstrap';
import './../ItemDetail/itemDetail.css';
//import Item01 from './components/Item/item';
import { CartContext } from './../../context/cartContext';


//import itemList from './../../Containers/ItemList/itemList';


const ItemDetail = ({ producto }) => {

    const {cart, addItem } = useContext(CartContext)
    

    // const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
    // const [showButton, setShowButton] = useState(false)

    const capturarQ = (value) => {
       
        console.log("producto", producto)
        console.log("cantidad", value)
        addItem(producto, value)
    }

        const index = cart.findIndex(prod=>prod.id===producto.id)
        const initial = index ===-1 ? 1 : cart[index].cantidad
        
    return (
        <Container>
            <Card className="cardItemDetail">
                <Card.Img variant="top" src={producto.img} className="imgItemDetail" />
                <Card.Body>
                    <Card.Title>{producto.linea01}</Card.Title>
                    <Card.Title>{producto.linea02}</Card.Title>
                    <Card.Text>
                        <hr />
                        <b>Descripción:</b>{` ${producto.descripcion}`}
                        <hr />
                        <p><b>Precio:</b>{` $ ${producto.precio}`}</p>
                    </Card.Text>
                    {/* <ItemCount stock={producto.cantidad} onAdd2={capturarQ} /> */}

                    {/* {showButton ?
                        <Button variant="outline-dark" onClick={() => addItem({ producto }, cantidadSeleccionada)}>Terminar mi compra de {cantidadSeleccionada} productos</Button> :
                        <ItemCount stock={producto.cantidad} onAdd2={capturarQ} />} */}

                       <Count stock={producto.cantidad} onAdd2={capturarQ} initial={initial}/>
                       
                    {/* <Button variant="outline-dark" onClick={() => addItem({ producto }, cantidadSeleccionada)}>Terminar mi compra de {cantidadSeleccionada} productos</Button> */}

                        {/* <p>Cantidad seleccionada {cantidadSeleccionada} a agregar</p>
                    <ItemCount stock={producto.cantidad} onAdd2={()=> addItem({producto},cantidadSeleccionada)} /> */}
                </Card.Body>
            </Card>
        </Container>




    )
}

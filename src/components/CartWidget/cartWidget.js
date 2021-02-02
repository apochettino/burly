import React from'react';
import './../CartWidget/cartWidget.css';
import * as ReactBootStrap from 'react-bootstrap';


export const CartWid = () => { //uso default si voy a hacer mas de una navbar

    return (
        <ReactBootStrap.Form inline>


        <div className="cartBar">
              <ul>

                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                          <i className="fas fa-shopping-cart"></i>
                      </a>
              
                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              
                          

                         
                          <div className="shopping-cart">
                              <div className="container">        
                                  <div className="row">
                                      <div className="col-6">
                                          <div className="shopping-cart-header">
                                              <h6>Producto</h6>
                                          </div>
                                      </div>
                                      <div className="col-3">
                                          <div className="shopping-cart-header">
                                              <h6 className="">Precio</h6>
                                          </div>
                                      </div>
                                      <div className="col-3">
                                          <div className="shopping-cart-header">
                                              <h6>Cantidad</h6>
                                          </div>
                                      </div>
                                  </div>
                                 
                                  <div className="shopping-cart-items shoppingCartItemsContainer">
                                      
                                  
                                  </div>
                                 
                                  <div className="row">
                                      <div className="col-12">
                                          <div className="shopping-cart-total d-flex align-items-center">
                                              <p>Total</p>
                                              <p className="shoppingCartTotal">$0</p>
                                              <div className="toast ml-auto bg-info" role="alert" aria-live="assertive" aria-atomic="true"
                                                  data-delay="2000">
                                                  <div className="toast-header">
                                                      <span>✅</span>
                                                      <strong className="mr-auto ml-1 text-secondary">Elemento en el carrito</strong>
                                                      <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                                          <span aria-hidden="true">&times;</span>
                                                      </button>
                                                  </div>
                                                  
                                              </div>
                                              <button className="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal"
                                                  data-target="#comprarModal" id="btnAjax">Comprar</button>
                                          </div>
                                      </div>
                                  </div>

                                  
                                  <div className="modal fade" id="comprarModal" tabindex="-1" aria-labelledby="comprarModalLabel"
                                      aria-hidden="true">
                                      <div className="modal-dialog modal-dialog-centered">
                                          <div className="modal-content">
                                              <div className="modal-header">
                                                  <h5 className="modal-title" id="comprarModalLabel">Gracias por su compra</h5>
                                                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                      <span aria-hidden="true">&times;</span>
                                                  </button>
                                              </div>
                                              <div className="modal-body">
                                                  <p>Pronto recibirá su pedido</p>
                                              </div>
                                              <div className="modal-footer">
                                                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  


                              </div>

                          </div>
                          

                      </div>
                  </li>
              
              
              </ul>  
          </div>


        <ReactBootStrap.Button variant="outline-success">Search</ReactBootStrap.Button>
        </ReactBootStrap.Form>

    )

}
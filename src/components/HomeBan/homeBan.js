import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import bannerImagen from '../../assets/imgBan01.jpg';


export const ImgBan = () => {

    return (

        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerImagen}
            alt="First"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerImagen}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerImagen}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     
    )

}
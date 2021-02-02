import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import bannerImagen from '../../assets/imgBan01.png';
import bannerImagen02 from '../../assets/imgBan02.png';
import bannerImagen03 from '../../assets/imgBan03.png';


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
            src={bannerImagen02}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bannerImagen03}
            alt="Third slide"
          />
      
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     
    )

}
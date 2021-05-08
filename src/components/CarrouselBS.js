import React from 'react'
import { Carousel } from 'react-bootstrap'
//import './CarouselBS.css'

import slide01 from "../img/CATALOGOPORTADA.png"
import slide02 from "../img/COMERCIALPORTADA.png"
import slide03 from "../img/HOMEOFFICEPORTADA.png"
import slide04 from "../img/OFFICEPORTADA.png"
import slide05 from "../img/SALADEESPERAPORTADA.png"




export default function CarouselBS() {
    return (
        <React.Fragment>
            <Carousel fade>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src={slide01}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={slide02}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={slide03}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={slide04}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={slide05}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                </Carousel.Item>

    
            </Carousel>
        </React.Fragment>
    )
}
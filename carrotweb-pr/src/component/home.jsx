import React from 'react'
import { Container } from 'react-bootstrap';
import './carrotweb.css';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
    return (
        <>
            {/* <Container fluid> */}
                <Carousel className='banner position-relative'>
                    <Carousel.Item interval={5000}>
                        <img src="./public/banner-2.jpg" className='d-block w-100' alt="Banner" />
                        <Carousel.Caption className='text-black banner-content'>
                            <h4 className='fw-bolder'><span>100% </span>&nbsp;Organic Fruits</h4>
                            <h2 className='display-4 mt-4'>Explore fresh & <br />juicy fruits.</h2>
                            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet <br /> reiciendis
                                beatae consequuntur.</p>
                            <button className='shopbutton'>Shop Now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img src="./public/banner.jpg" className='d-block w-100' alt="Banner" />
                        <Carousel.Caption className='text-black banner-content'>
                            <h4 className='fw-bolder'><span>100% </span>&nbsp;Organic Vegetables</h4>
                            <h2 className='display-4 mt-4'>The best way to <br /> stuff your wallet.</h2>
                            <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet <br /> reiciendis
                                beatae consequuntur.</p>
                            <button className='shopbutton'>Shop Now</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            {/* </Container> */}
        </>
    )
}

export default Home;
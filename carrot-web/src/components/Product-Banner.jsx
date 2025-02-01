import { Button, Container } from "react-bootstrap";
import Slider from "react-slick";

const ProductBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    };
    return (
        <>
            <Container data-aos="fade-up" data-aos-duration="1000">
                <div className="slider-container mt-5">
                    <Slider {...settings}>
                        <div className="slider-contant position-relative mt-5">
                            <img src="/public/3 (2).jpg" alt="" />
                            <div className="position-absolute top-0 start-0 p-3">
                                <h2 className="fs-3 font-bold text-gray-800">
                                    Fresh & Healthy <br /> Organic Fruits
                                </h2>
                                <div>
                                    <big><span className="fw-bold text-[#4CAF50] text-success fs-4">35%</span>  </big>
                                    <span>Off on first order</span>
                                </div>
                                <Button className="bg-success my-3">
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                        <div className="slider-contant position-relative mt-5">
                            <img src="/public/1 (1).jpg" alt="" />
                            <div className="position-absolute top-0 start-0 p-3">
                                <h2 className="fs-3 font-bold text-gray-800">
                                    Healthy  <br /> Bakery Products
                                </h2>
                                <div>
                                    <big><span className="fw-bold text-[#4CAF50] text-success fs-4">30%</span>  </big>
                                    <span>Off on first order</span>
                                </div>
                                <Button className="bg-success my-3">
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                        <div className="slider-contant position-relative mt-5">
                            <img src="/public/2 (1).jpg" alt="" />
                            <div className="position-absolute top-0 start-0 p-3">
                                <h2 className="fs-3 font-bold text-gray-800">
                                    Fresh <br /> Snacks & Sweets
                                </h2>
                                <div>
                                    <big><span className="fw-bold text-[#4CAF50] text-success fs-4">20%</span>  </big>
                                    <span>Off on first order</span>
                                </div>
                                <Button className="bg-success my-3">
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                    </Slider >
                </div >
            </Container>
        </>
    );
}

export default ProductBanner;

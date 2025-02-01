import Slider from "react-slick";
import { Container, Button } from "react-bootstrap";
import "./All.css";

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <div className="banner-section">
                    <div className="banner-image position-relative">
                        <img
                            src="/public/banner.jpg"
                            alt="Basket of Vegetables"
                            className="w-100"
                            style={{ height: "90vh" }}
                        />
                    </div>
                    <Container>
                        <div className="position-absolute start-50p benner-img-contant" style={{ top: '30%' }}>
                            <div className="benner-text-img">
                                <h5 data-aos="fade-up" data-aos-duration="1000"><span className="text-decoration-underline text-success">100%</span> Organic Vegetables</h5>
                                <h1 data-aos="fade-up" data-aos-duration="2000" className="display-4 fw-bold my-4">Explore fresh &<br />juicy fruits.</h1>
                                <p data-aos="fade-up" data-aos-duration="3000">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit<br />Amet
                                    reiciendis beatae consequuntur.
                                </p>
                                <Button data-aos="fade-up" data-aos-duration="3000" variant="success" className="shop-now-btn">
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
            <div>
                <div className="banner-section">
                    <div className="banner-image position-relative">
                        <img
                            src="/public/banner-2.jpg"
                            alt="Basket of Vegetables"
                            className="w-100"
                            style={{ height: "90vh" }}
                        />
                    </div>
                    <Container>
                        <div className="position-absolute start-50px benner-img-contant" style={{ top: '30%' }}>
                            <div className="benner-text-img">
                                <h5><span className="text-decoration-underline text-success">100%</span> Organic Vegetables</h5>
                                <h1 className="display-4 fw-bold my-4">The best way to<br />stuff your wallet.</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit<br />Amet
                                    reiciendis beatae consequuntur.
                                </p>
                                <Button data-aos="fade-up" data-aos-delay="500" variant="success" className="shop-now-btn">
                                    Shop Now
                                </Button>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </Slider>

    );
};

export default Banner;
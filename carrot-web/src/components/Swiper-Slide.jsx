import { Container } from "react-bootstrap";
import { BsTruck } from "react-icons/bs";
import { RiCustomerService2Line, RiMoneyDollarBoxLine, RiRedPacketLine } from "react-icons/ri";
import Slider from "react-slick";

const SwiperSlide = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <>
            <Container data-aos="fade-up" data-aos-duration="2000">
                <div className="mt-5 swiperSlide-text-img">
                    <Slider {...settings}>
                        <div className="p-2 mt-5">
                            <div className="border text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="text-success fs-1">
                                        <RiRedPacketLine />
                                    </div>
                                </div>
                                <h5>
                                    Product Packing
                                </h5>
                                <p className="text-secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </p>
                            </div>
                        </div>
                        <div className="p-2 mt-5">
                            <div className="border text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="text-success fs-1">
                                        <RiCustomerService2Line />
                                    </div>
                                </div>
                                <h5>
                                    24X7 Support
                                </h5>
                                <p className="text-secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </p>
                            </div>
                        </div>
                        <div className="p-2 mt-5">
                            <div className="border text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="text-success fs-1">
                                        <BsTruck />
                                    </div>
                                </div>
                                <h5>
                                    Delivery in 5 Days
                                </h5>
                                <p className="text-secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </p>
                            </div>
                        </div>
                        <div className="p-2 mt-5">
                            <div className="border text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="text-success fs-1">
                                        <RiMoneyDollarBoxLine />
                                    </div>
                                </div>
                                <h5>
                                    Payment Secure
                                </h5>
                                <p className="text-secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </Container>
        </>
    );
}

export default SwiperSlide;

import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsTruck } from "react-icons/bs";
import { RiCustomerService2Line, RiMoneyDollarBoxLine, RiRedPacketLine } from "react-icons/ri";
import Slider from "react-slick";

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText = "1";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;

        const increment = target / 1000;
        console.log(increment);

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1000);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

const Counter = ({ target, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const increment = target / 1000;
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev < target) {
                    return Math.min(prev + increment, target);
                }
                clearInterval(interval);
                return target;
            });
        }, 10);

        return () => clearInterval(interval);
    }, [target]);

    return (
        <div>
            <h2 className="text-success">{count.toLocaleString()}k</h2>
            <p className="text-secondary">{label}</p>
        </div>
    );
};

const About = () => {
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
            <Container>
                <div className="mt-5">
                    <Row>
                        <div data-aos="fade-up" data-aos-duration="3000" className="col-6">
                            <div className="about-contant mt-5">
                                <h2>About The Carrot</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, recusandae necessitatibus quasi incidunt alias adipisci pariatur earum iure beatae assumenda rerum quod. Tempora magni autem a voluptatibus neque.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae rerum cum accusamus magni consequuntur architecto, ipsum deleniti expedita doloribus suscipit voluptatum eius perferendis amet!.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maxime amet architecto est exercitationem optio ea maiores corporis beatae, dolores doloribus libero nesciunt qui illum? Voluptates deserunt adipisci voluptatem magni sunt sed blanditiis quod aspernatur! Iusto?</p>
                            </div>
                            <Row className="gap-3 border text-center pt-2">
                                <Col xs={10} md={3}>
                                    <Counter target={1.2} label="Vendors" />
                                </Col>
                                <Col xs={10} md={3}>
                                    <Counter target={410} label="Customers" />
                                </Col>
                                <Col xs={10} md={3}>
                                    <Counter target={34} label="Products" />
                                </Col>
                            </Row>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2000" className="col-6">
                            <div className="about-img mt-5">
                                <img src="/public/about.jpg" alt="" className="rounded-2" />
                            </div>
                        </div>
                    </Row>
                    <div data-aos="fade-up" data-aos-duration="3000" className="slider-container mt-5">
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
                </div>

            </Container>
        </>
    )
}

export default About;
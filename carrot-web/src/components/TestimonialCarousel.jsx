import Slider from "react-slick";
import { Card, Container } from "react-bootstrap";

const testimonials = [
    {
        name: "Stephen Smith",
        role: "Co Founder",
        feedback: "eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.",
        stars: 5,
        image: "/public/1 (2).jpg",
    },
    {
        name: "Lorem Robinson",
        role: "Manager",
        feedback: "eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.",
        stars: 4,
        image: "/public/TestimonialCarousel1.jpg",
    },
    {
        name: "Saddika Alard",
        role: "Team Leader",
        feedback: "eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.",
        stars: 5,
        image: "/public/TestimonialCarouse2.jpg",
    },
];

const TestimonialCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const renderStars = (count) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span key={index} style={{ color: index < count ? "#FFA500" : "#ddd" }}>
                ★
            </span>
        ));
    };

    return (
        <>
            <Container>
                <div data-aos="fade-up" data-aos-duration="5000" className="mt-5 textimonialcarousel-text-img">
                    <h2 className="text-center mb-4">Great Words From People</h2>
                    <p className="text-center text-muted mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore lacus vel facilisis.
                    </p>
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index}>
                                <Card className="text-center p-4 textimonialcarousel-contant">
                                    <Card.Img
                                        variant="top"
                                        src={testimonial.image}
                                        className="rounded-circle mx-auto"
                                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                    />
                                    <Card.Body>
                                        <Card.Title className="mt-3">{testimonial.name}</Card.Title>
                                        <Card.Subtitle className="text-muted mb-3">
                                            {testimonial.role}
                                        </Card.Subtitle>
                                        <Card.Text>{testimonial.feedback}</Card.Text>
                                        <div>{renderStars(testimonial.stars)}</div>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </>
    );
};

export default TestimonialCarousel;

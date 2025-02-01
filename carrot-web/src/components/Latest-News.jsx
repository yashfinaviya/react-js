import Slider from "react-slick";
import { Card, Badge, Container } from "react-bootstrap";

const news = [
    {
        title: "Urna pretium elit mauris cursus at elit Vestibulum.",
        category: "Snacks",
        author: "Admin",
        date: "10 Oct",
        image: "/public/NewsCarousel1.jpg",
        link: "#",
    },
    {
        title: "Best guide to Shopping for organic ingredients.",
        category: "Food",
        author: "Admin",
        date: "09 Sep",
        image: "/public/NewsCarousel2.jpg",
        link: "#",
    },
    {
        title: "Cursus at elit vestibulum urna pretium elit mauris.",
        category: "Snacks",
        author: "Admin",
        date: "12 Oct",
        image: "/public/NewsCarousel3.jpg",
        link: "#",
    },
];

const NewsCarousel = () => {
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
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <Container>
                <div data-aos="fade-up" data-aos-duration="3000" className="mt-5 newsCarousel-img-text">
                    <h2 className="text-center mb-4">Latest News</h2>
                    <p className="text-center text-muted mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore lacus vel facilisis.
                    </p>
                    <Slider {...settings}>
                        {news.map((item, index) => (
                            <div key={index}>
                                <Card className="newsCarousel-contant">
                                    <Card.Body>
                                        <Card.Subtitle className="">
                                            By {item.author} | {item.category}
                                        </Card.Subtitle>
                                        <Card.Title className="" style={{ fontSize: "1.1rem" }}>
                                            {item.title}
                                        </Card.Title>
                                        <Card.Link href={item.link} className="text-success">
                                            Read More →
                                        </Card.Link>
                                    </Card.Body>
                                    <div className="position-relative">
                                        <Card.Img
                                            variant="top"
                                            src={item.image}
                                            alt="News Image"
                                        />
                                        <Badge className="position-absolute newsCarousel-span fs-6 bottom-0 end-0 m-2 p-4" >
                                            {item.date}
                                        </Badge>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </>
    );
};

export default NewsCarousel;

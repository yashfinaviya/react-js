import { Tab, Nav, Row, Col, Card, Button, Container } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";

const products = {
    all: [
        { id: 1, category: "Vegetables", name: "Fresh organic villa farm lemon 500gm pack", price: 120.25, oldPrice: 123.25, rating: 4.5, img: "/public/Styl5.jpg" },
        { id: 2, category: "Snacks", name: "Best snacks with hazel nut pack 200gm", price: 145, oldPrice: 150, rating: 5.0, img: "/public/Styl1.jpg" },
        { id: 3, category: "Fruits", name: "Fresh organic apple 1kg simla marmang marmang", price: 120.25, oldPrice: 123.25, rating: 4.5, img: "/public/Styl2.jpg" },
        { id: 4, category: "Bakery", name: "Delicious white baked fresh bread and toast", price: 20, oldPrice: 23.10, rating: 5.0, img: "/public/17.jpg" },
        { id: 5, category: "Vegetables", name: "Fresh organic villa farm lemon 500gm pack", price: 120.25, oldPrice: 123.25, rating: 4.5, img: "/public/11.jpg" },
        { id: 6, category: "Snacks", name: "Best snacks with hazel nut pack 200gm", price: 145, oldPrice: 150, rating: 5.0, img: "/public/Styl3.jpg" },
        { id: 7, category: "Fruits", name: "Fresh organic apple 1kg simla marmang marmang", price: 120.25, oldPrice: 123.25, rating: 4.5, img: "/public/Styl4.jpg" },
        { id: 8, category: "Bakery", name: "Delicious white baked fresh bread and toast", price: 20, oldPrice: 23.10, rating: 5.0, img: "/public/17.jpg" },
    ],
    snack: [
        { id: 2, category: "Snacks", name: "Best snacks with hazel nut pack 200gm", price: 145, oldPrice: 150, rating: 5.0, img: "/public/Styl1.jpg" },
        { id: 2, category: "snack", name: "Fresh organic villa farm lemon 500gm pack", price: 120.25, oldPrice: 123.25, rating: 4.5, img: "/public/11.jpg" },
        { id: 2, category: "snack", name: "Fresh organic apple 1kg simla marmang marmang", price: 120.25, oldPrice: 123.25, rating: 4.5, img: "/public/Styl4.jpg" },
    ],
    vegetable: [
        { id: 5, category: "Vegetables", name: "Fresh organic villa farm lemon 500gm pack", price: 120.25, oldPrice: 123.25, rating: 4.5, img: "/public/Styl5.jpg" },
    ],
    fruit: [
        { id: 3, category: "Fruits", name: "Fresh organic apple 1kg simla marmang marmang", price: 120.25, oldPrice: 123.25, rating: 4.5, img: "/public/Styl2.jpg" },
        { id: 7, category: "Fruit", name: "Best snacks with hazel nut pack 200gm", price: 145, oldPrice: 150, rating: 5.0, img: "/public/Styl3.jpg" },
    ],
    bakery: [
        { id: 4, category: "Bakery", name: "Delicious white baked fresh bread and toast", price: 20, oldPrice: 23.10, rating: 5.0, img: "/public/17.jpg" },
        { id: 8, category: "Bakery", name: "Delicious white baked fresh bread and toast", price: 20, oldPrice: 23.10, rating: 5.0, img: "/public/17.jpg" },
    ],
};

const PopularProducts = () => {
    return (
        <>
            <Container>
                <div data-aos="fade-up" data-aos-duration="3000" className="mt-5">
                    <h2 className="text-center">Popular Products</h2>
                    <p className="text-center text-muted mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
                    </p>

                    <Tab.Container defaultActiveKey="all">
                        <Row>
                            {/* Sidebar Navigation */}
                            <Col md={3}>
                                <Nav className="flex-column nav-link-product">
                                    <Nav.Item>
                                        <Nav.Link eventKey="all" className="active border mt-2 nav-link-popular">All <FaArrowRightLong /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="snack" className="border mt-2 nav-link-popular">Snack <FaArrowRightLong /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="vegetable" className="border mt-2 nav-link-popular">Vegetable <FaArrowRightLong /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fruit" className="border mt-2 nav-link-popular">Fruit <FaArrowRightLong /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="bakery" className="border mt-2 nav-link-popular">Bakery <FaArrowRightLong /></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <img src="/public/product-banner.jpg" alt="" className="mt-4 product-banner-img" />
                            </Col>

                            <Col md={9}>
                                <Tab.Content>
                                    {Object.keys(products).map((key) => (
                                        <Tab.Pane eventKey={key} key={key}>
                                            <Row>
                                                {products[key].map((product) => (
                                                    <Col md={3} key={product.id}>
                                                        <Card className="product-card">
                                                            <Card.Img variant="center" src={product.img} alt={product.name} />
                                                            <Card.Body>
                                                                <Card.Title>{product.name}</Card.Title>
                                                                <Card.Text>
                                                                    <span className="text-success">${product.price}</span>{" "}
                                                                    <span className="text-muted text-decoration-line-through">${product.oldPrice}</span>
                                                                </Card.Text>
                                                                <Card.Text>
                                                                    <span className="text-warning">★ {product.rating}</span>
                                                                </Card.Text>
                                                                <Button variant="outline-success">Add to Cart</Button>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Tab.Pane>
                                    ))}
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </Container>
        </>
    );
}

export default PopularProducts;

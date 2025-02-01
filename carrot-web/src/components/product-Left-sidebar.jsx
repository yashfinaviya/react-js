import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FiHeart } from "react-icons/fi";
import { GoEye } from "react-icons/go";
import { IoMdStar } from "react-icons/io";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const ProductLeftsidebar = () => {

    const [priceRange, setPriceRange] = useState([25, 250]);
    const [reviews, setReviews] = useState([
        {
            id: 1,
            image: '/public/1 (2).jpg',
            name: "Oreo Noman",
            date: "Jan 08, 2024",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero sapiente doloribus debitis corporis.",
            rating: 5,
        },
        {
            id: 2,
            image: '/public/TestimonialCarouse2.jpg',
            name: "Lina Wilson",
            date: "Mar 22, 2024",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero sapiente doloribus debitis corporis.",
            rating: 4,
        },
    ]);

    const [newReview, setNewReview] = useState({
        name: "",
        email: "",
        comment: "",
        rating: 3,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReview.name && newReview.email && newReview.comment) {
            const date = new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
            });
            setReviews([
                ...reviews,
                { ...newReview, id: reviews.length + 1, date: date },
            ]);
            setNewReview({ name: "", email: "", comment: "", rating: 3 });
        }
    };

    const handlePriceChange = (event) => {
        const value = Number(event.target.value);
        const minPrice = priceRange[1];
        const maxPrice = priceRange[1];

        if (event.target.id === "min-price") {
            setPriceRange([value, maxPrice]);
        } else {
            setPriceRange([minPrice, value]);
        }
    };

    const [count, setCount] = useState(1);

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 0) setCount(count - 1);
    };

    return (
        <>
            <Container>
                <div className="mt-5">
                    <Row>
                        <div data-aos="fade-up" data-aos-duration="1000" className="asaid-page col-lg-3 mt-5 flex">
                            <h5>Category</h5>
                            <Form>
                                <Form.Check type="checkbox" label="Juice & Drinks [20]" />
                                <Form.Check type="checkbox" label="Dairy & Milk [54]" />
                                <Form.Check type="checkbox" label="Snack & Spice [64]" />
                            </Form>

                            <hr />

                            <h5>Price</h5>
                            <Form>
                                <Form.Range
                                    min="20"
                                    max="250"
                                    value={priceRange[1]}
                                    onChange={handlePriceChange}
                                />
                                <div className="d-flex justify-content-between">
                                    <Form.Label>Price: ${priceRange[0]} - ${priceRange[1]}</Form.Label>
                                </div>
                                <Button variant="success">Filter</Button>
                            </Form>

                            <hr />

                            <h5>Colors</h5>
                            <Form>
                                <Form.Check type="checkbox" label="Blue" />
                                <Form.Check type="checkbox" label="Yellow" />
                                <Form.Check type="checkbox" label="Red" />
                            </Form>

                            <hr />

                            <h5>Weight</h5>
                            <Form>
                                <Form.Check type="checkbox" label="2kg Pack" />
                                <Form.Check type="checkbox" label="20kg Pack" />
                                <Form.Check type="checkbox" label="30kg Pack" />
                            </Form>

                            <hr />

                            <h5>Tags</h5>
                            <div className="bbtn">
                                <Button>Vegetables</Button>
                                <Button>Juice</Button>
                                <Button>Food</Button>
                                <Button>Dry Fruits</Button>
                                <Button>Vegetables</Button>
                                <Button>Juice</Button>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2000" className="col-lg-9 mt-5">
                            <Row>
                                <Col md={6}>
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src="/public/Styl1.jpg"
                                            alt="Product"
                                        />
                                        <Card.Body className="d-flex justify-content-between">
                                            <img
                                                src="/public/Styl2.jpg"
                                                alt="Thumbnail 1"
                                                className="h-25 border"
                                                style={{ width: "20%" }}
                                            />
                                            <img
                                                src="/public/Styl3.jpg"
                                                alt="Thumbnail 2"
                                                className="h-25 border"
                                                style={{ width: "20%" }}
                                            />
                                            <img
                                                src="/public/Styl4.jpg"
                                                alt="Thumbnail 3"
                                                className="h-25 border"
                                                style={{ width: "20%" }}
                                            />
                                            <img
                                                src="/public/Styl5.jpg"
                                                alt="Thumbnail 3"
                                                className="h-25 border"
                                                style={{ width: "20%" }}
                                            />
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <h4>Seeds Of Change Organic Quinoa, Brown</h4>
                                    <p className="text-secondary">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iure minus error doloribus saepe natus?
                                    </p>
                                    <div className="border-bottom mb-2"></div>
                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <span className="fs-6 ms-2 text-dark">(75 Review)</span>
                                    </div>
                                    <div className="list-name">
                                        <ul>
                                            <li>
                                                <label>
                                                    Brand
                                                    <span>:</span>
                                                </label>
                                                ESTA BETTERU CO
                                            </li>
                                            <li>
                                                <label>
                                                    Flavour
                                                    <span>:</span>
                                                </label>
                                                Super Saver Pack
                                            </li>
                                            <li>
                                                <label>
                                                    Diet Type
                                                    <span>:</span>
                                                </label>
                                                Vegetarian
                                            </li>
                                            <li>
                                                <label>
                                                    Weight
                                                    <span>:</span>
                                                </label>
                                                200 Grams
                                            </li>
                                            <li>
                                                <label>
                                                    Speciality
                                                    <span>:</span>
                                                </label>
                                                Gluten Free, Sugar Free
                                            </li>
                                            <li>
                                                <label>
                                                    Info
                                                    <span>:</span>
                                                </label>
                                                Egg Free, Allergen-Free
                                            </li>
                                            <li>
                                                <label>
                                                    Items
                                                    <span>:</span>
                                                </label>
                                                1
                                            </li>
                                        </ul>
                                    </div>
                                    <p>
                                        <span className="text-success" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                            $120.26
                                        </span>{' '}
                                        <del>$123.45</del>
                                    </p>

                                    <Form.Label>Size / Weight:</Form.Label>
                                    <Button className="mx-2 BTN">50 Kg</Button>
                                    <Button className="mx-2 BTN">80 Kg</Button>
                                    <Button className="mx-2 BTN">120 Kg</Button>
                                    <Button className="mx-2 BTN">200 Kg</Button>
                                    <div className="mt-3">
                                        <span className="border rounded-2" style={{ padding: "10px 15px" }}>{count}</span>
                                        <Button variant="outline-primary ms-1" style={{ fontSize: "10px" }} onClick={increment}>
                                            +
                                        </Button>
                                        <Button variant="outline-secondary ms-2" style={{ fontSize: "10px" }} onClick={decrement}>
                                            -
                                        </Button>
                                        <Button variant="primary" className="ms-3">
                                            Add To Cart
                                        </Button>
                                        <Button className="icon-heart text-dark">
                                            <FiHeart />
                                        </Button>
                                        <Button className="icon-heart text-dark">
                                            <GoEye />
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row className="mt-4 border p-3">
                                <Col>
                                    <Tabs
                                        defaultActiveKey="home"
                                        transition={false}
                                        id="noanim-tab-example"
                                        className="mb-3"
                                    >
                                        <Tab eventKey="home" title="Description">
                                            <div>
                                                <p className="text-secondary">
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, sapiente. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, inventore?
                                                </p>
                                                <h5>
                                                    Packaging & Delivery
                                                </h5>
                                                <div className="border-bottom my-3"></div>
                                                <p className="text-secondary">
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, sapiente. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, inventore?
                                                </p>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="profile" title="Information">
                                            <div>
                                                <p className="text-secondary">
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, sapiente. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, inventore?
                                                </p>
                                                <div className="list-name">
                                                    <ul>
                                                        <li>
                                                            <label>
                                                                Brand
                                                                <span>:</span>
                                                            </label>
                                                            ESTA BETTERU CO
                                                        </li>
                                                        <li>
                                                            <label>
                                                                Flavour
                                                                <span>:</span>
                                                            </label>
                                                            Super Saver Pack
                                                        </li>
                                                        <li>
                                                            <label>
                                                                Diet Type
                                                                <span>:</span>
                                                            </label>
                                                            Vegetarian
                                                        </li>
                                                        <li>
                                                            <label>
                                                                Weight
                                                                <span>:</span>
                                                            </label>
                                                            200 Grams
                                                        </li>
                                                        <li>
                                                            <label>
                                                                Speciality
                                                                <span>:</span>
                                                            </label>
                                                            Gluten Free, Sugar Free
                                                        </li>
                                                        <li>
                                                            <label>
                                                                Info
                                                                <span>:</span>
                                                            </label>
                                                            Egg Free, Allergen-Free
                                                        </li>
                                                        <li>
                                                            <label>
                                                                Items
                                                                <span>:</span>
                                                            </label>
                                                            1
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="contact" title="Review">
                                            {reviews.map((review) => (
                                                <Row key={review.id} className="mb-3">
                                                    <Col md={2} className="text-center">
                                                        <div>
                                                            <img
                                                                src={review.image}
                                                                alt="User"
                                                                className="rounded-2 w-50"
                                                            />
                                                        </div>
                                                    </Col>
                                                    <Col md={10}>
                                                        <div>
                                                            <strong>{review.name}</strong> <span>({review.date})</span>
                                                        </div>
                                                        <div>
                                                            {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                                                        </div>
                                                        <p>{review.comment}</p>
                                                    </Col>
                                                </Row>
                                            ))}
                                            <p className="my-3 text-secondary">Add a Review</p>
                                            <Form onSubmit={handleSubmit}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Your Rating</Form.Label>
                                                    <Form.Select
                                                        name="rating"
                                                        value={newReview.rating}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option value="5">★★★★★</option>
                                                        <option value="4">★★★★☆</option>
                                                        <option value="3">★★★☆☆</option>
                                                        <option value="2">★★☆☆☆</option>
                                                        <option value="1">★☆☆☆☆</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="name"
                                                        value={newReview.name}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Email</Form.Label>
                                                    <Form.Control
                                                        type="email"
                                                        name="email"
                                                        value={newReview.email}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                </Form.Group>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Comment</Form.Label>
                                                    <Form.Control
                                                        as="textarea"
                                                        name="comment"
                                                        value={newReview.comment}
                                                        onChange={handleInputChange}
                                                        rows={3}
                                                        required
                                                    />
                                                </Form.Group>
                                                <Button type="submit" variant="primary">
                                                    Submit
                                                </Button>
                                            </Form>
                                        </Tab>
                                    </Tabs>
                                </Col>
                            </Row>
                        </div>
                    </Row >
                    <Row data-aos="fade-up" data-aos-duration="3000"    >
                        <Col>
                            <Card className="p-3 mt-5" style={{ width: '15rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl1.jpg" className="border rounded-3" />
                                </div>

                                <Card.Body className="text-center">
                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Snacks</span>
                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <span className="fs-6">(5.0)</span>
                                    </div>
                                    <Card.Title className="fs-6 my-2">Best snakes with hazel nut pack 200gm</Card.Title>
                                    <Card.Text className="fs-5 text-success fw-bold">
                                        $145
                                        <span className="ms-3 fs-6 text-body-tertiary"><s>$150</s></span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="p-3 mt-5" style={{ width: '15rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl2.jpg" className="border rounded-3" />
                                </div>

                                <Card.Body className="text-center">
                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Snacks</span>
                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <span className="fs-6">(5.0)</span>
                                    </div>
                                    <Card.Title className="fs-6 my-2">Best snakes with hazel nut pack 200gm</Card.Title>
                                    <Card.Text className="fs-5 text-success fw-bold">
                                        $145
                                        <span className="ms-3 fs-6 text-body-tertiary"><s>$150</s></span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="p-3 mt-5" style={{ width: '15rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl3.jpg" className="border rounded-3" />
                                </div>

                                <Card.Body className="text-center">
                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Snacks</span>
                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <span className="fs-6">(5.0)</span>
                                    </div>
                                    <Card.Title className="fs-6 my-2">Best snakes with hazel nut pack 200gm</Card.Title>
                                    <Card.Text className="fs-5 text-success fw-bold">
                                        $145
                                        <span className="ms-3 fs-6 text-body-tertiary"><s>$150</s></span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="p-3 mt-5" style={{ width: '15rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl2.jpg" className="border rounded-3" />
                                </div>

                                <Card.Body className="text-center">
                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Snacks</span>
                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <span className="fs-6">(5.0)</span>
                                    </div>
                                    <Card.Title className="fs-6 my-2">Best snakes with hazel nut pack 200gm</Card.Title>
                                    <Card.Text className="fs-5 text-success fw-bold">
                                        $145
                                        <span className="ms-3 fs-6 text-body-tertiary"><s>$150</s></span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="p-3 mt-5" style={{ width: '15rem' }}>

                                <div className="position-relative">
                                    <Card.Img variant="top" src="/public/Styl3.jpg" className="border rounded-3" />
                                </div>

                                <Card.Body className="text-center">
                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Snacks</span>
                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <span className="fs-6">(5.0)</span>
                                    </div>
                                    <Card.Title className="fs-6 my-2">Best snakes with hazel nut pack 200gm</Card.Title>
                                    <Card.Text className="fs-5 text-success fw-bold">
                                        $145
                                        <span className="ms-3 fs-6 text-body-tertiary"><s>$150</s></span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>

        </>
    )
}

export default ProductLeftsidebar;
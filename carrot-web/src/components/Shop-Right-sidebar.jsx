import { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Dropdown, ButtonGroup } from "react-bootstrap";
import { IoMdStar } from "react-icons/io";
import { RiGridLine } from "react-icons/ri";
import { RiListCheck2 } from "react-icons/ri";

const ShopRightsidebar = () => {

    const [priceRange, setPriceRange] = useState([25, 250]);

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

    return (
        <>
            <Container>
                <div className="mt-5">
                    <Row>
                        <div data-aos="fade-up" data-aos-duration="2000" className="col-lg-9">
                            <Row className="align-items-center mb-3">
                                <div className="main-class d-flex justify-content-between align-items-center p-3 border">
                                    <ButtonGroup>
                                        <RiGridLine className="mt-1 border me-2 rounded-2 bg-success text-white" style={{ fontSize: "40px", padding: "10px" }} />
                                        <RiListCheck2 className="mt-1 border rounded-2" style={{ fontSize: "40px", padding: "10px" }} />
                                        <span className="ms-4 mt-3">We found 29 items for you!</span>
                                    </ButtonGroup>
                                    <Dropdown className="border rounded-2">
                                        <Dropdown.Toggle variant="light" id="dropdown-sort">
                                            Sort By: Featured
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#featured">Featured</Dropdown.Item>
                                            <Dropdown.Item href="#price-low-high">Price: Low to High</Dropdown.Item>
                                            <Dropdown.Item href="#price-high-low">Price: High to Low</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="main">
                                    <Row>
                                        <Col>
                                            <Card className="p-3 mt-5" style={{ width: '13rem' }}>

                                                <div className="position-relative">
                                                    <Card.Img variant="top" src="/public/Styl4.jpg" className="border rounded-3" />
                                                </div>

                                                <Card.Body className="text-center">
                                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Vegetables</span>
                                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <span className="fs-6">(4.5)</span>
                                                    </div>
                                                    <Card.Title className="fs-6 my-2">Fresh organic villa farm  500gm pack</Card.Title>
                                                    <Card.Text className="fs-6 text-success fw-bold">
                                                        $120.25
                                                        <span className="ms-3 text-body-tertiary"><s>$123.25</s></span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="p-3 mt-5" style={{ width: '13rem' }}>

                                                <div className="position-relative">
                                                    <Card.Img variant="top" src="/public/17.jpg" className="border rounded-3" />
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
                                                    <Card.Title className="fs-6 my-2">Best snakes with nut pack 200gm</Card.Title>
                                                    <Card.Text className="fs-6 text-success fw-bold">
                                                        $145
                                                        <span className="ms-3 text-body-tertiary"><s>150</s></span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="p-3 mt-5" style={{ width: '13rem' }}>

                                                <div className="position-relative">
                                                    <Card.Img variant="top" src="/public/13.jpg" className="border rounded-3" />
                                                </div>

                                                <Card.Body className="text-center">
                                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Fruits</span>
                                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <span className="fs-6">(4.5)</span>
                                                    </div>
                                                    <Card.Title className="fs-6 my-2">Fresh organic villa farm  500gm pack</Card.Title>
                                                    <Card.Text className="fs-6 text-success fw-bold">
                                                        $120.25
                                                        <span className="ms-3 text-body-tertiary"><s>$123.25</s></span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="p-3 mt-5" style={{ width: '13rem' }}>

                                                <div className="position-relative">
                                                    <Card.Img variant="top" src="/public/11.jpg" className="border rounded-3" />
                                                </div>

                                                <Card.Body className="text-center">
                                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Fruits</span>
                                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <span className="fs-6">(4.5)</span>
                                                    </div>
                                                    <Card.Title className="fs-6 my-2">Organic fresh watermelon 5kg</Card.Title>
                                                    <Card.Text className="fs-6 text-success fw-bold">
                                                        $50.30
                                                        <span className="ms-3 text-body-tertiary"><s>$72.60</s></span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="p-3 mt-5" style={{ width: '13rem' }}>

                                                <div className="position-relative">
                                                    <Card.Img variant="top" src="/public/12.jpg" className="border rounded-3" />
                                                </div>

                                                <Card.Body className="text-center">
                                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Snacks</span>
                                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <span className="fs-6">(4.5)</span>
                                                    </div>
                                                    <Card.Title className="fs-6 my-2">Sweet crunchy nut mix 250gm pack</Card.Title>
                                                    <Card.Text className="fs-6 text-success fw-bold">
                                                        $120.25
                                                        <span className="ms-3 text-body-tertiary"><s>$123.25</s></span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="p-3 mt-5" style={{ width: '13rem' }}>

                                                <div className="position-relative">
                                                    <Card.Img variant="top" src="/public/Styl5.jpg" className="border rounded-3" />
                                                </div>

                                                <Card.Body className="text-center">
                                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Bakery</span>
                                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <span className="fs-6">(4.5)</span>
                                                    </div>
                                                    <Card.Title className="fs-6 my-2">Delicious white bread and toast</Card.Title>
                                                    <Card.Text className="fs-6 text-success fw-bold">
                                                        $20
                                                        <span className="ms-3 text-body-tertiary"><s>$22.10</s></span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="p-3 mt-5" style={{ width: '13rem' }}>

                                                <div className="position-relative">
                                                    <Card.Img variant="top" src="/public/Styl1.jpg" className="border rounded-3" />
                                                </div>

                                                <Card.Body className="text-center">
                                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Bakery</span>
                                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <span className="fs-6">(4.5)</span>
                                                    </div>
                                                    <Card.Title className="fs-6 my-2">Delicious white bread and toast</Card.Title>
                                                    <Card.Text className="fs-6 text-success fw-bold">
                                                        $20
                                                        <span className="ms-3 text-body-tertiary"><s>$22.10</s></span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="p-3 mt-5" style={{ width: '13rem' }}>

                                                <div className="position-relative">
                                                    <Card.Img variant="top" src="/public/Styl2.jpg" className="border rounded-3" />
                                                </div>

                                                <Card.Body className="text-center">
                                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Bakery</span>
                                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <span className="fs-6">(4.5)</span>
                                                    </div>
                                                    <Card.Title className="fs-6 my-2">Delicious white bread and toast</Card.Title>
                                                    <Card.Text className="fs-6 text-success fw-bold">
                                                        $20
                                                        <span className="ms-3 text-body-tertiary"><s>$22.10</s></span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="p-3 mt-5" style={{ width: '13rem' }}>

                                                <div className="position-relative">
                                                    <Card.Img variant="top" src="/public/Styl6.jpg" className="border rounded-3" />
                                                </div>

                                                <Card.Body className="text-center">
                                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Snacks</span>
                                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <span className="fs-6">(4.5)</span>
                                                    </div>
                                                    <Card.Title className="fs-6 my-2">Sweet crunchy nut mix 250gm pack</Card.Title>
                                                    <Card.Text className="fs-6 text-success fw-bold">
                                                        $120.25
                                                        <span className="ms-3 text-body-tertiary"><s>$123.25</s></span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="p-3 mt-5" style={{ width: '13rem' }}>

                                                <div className="position-relative">
                                                    <Card.Img variant="top" src="/public/11.jpg" className="border rounded-3" />
                                                </div>

                                                <Card.Body className="text-center">
                                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Vegetables</span>
                                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <span className="fs-6">(4.5)</span>
                                                    </div>
                                                    <Card.Title className="fs-6 my-2">Fresh organic villa lomon 500gm pack</Card.Title>
                                                    <Card.Text className="fs-6 text-success fw-bold">
                                                        $120.25
                                                        <span className="ms-3 text-body-tertiary"><s>$123.25</s></span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="p-3 mt-5" style={{ width: '13rem' }}>

                                                <div className="position-relative">
                                                    <Card.Img variant="top" src="/public/12.jpg" className="border rounded-3" />
                                                </div>

                                                <Card.Body className="text-center">
                                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Snacks</span>
                                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <span className="fs-6">(4.5)</span>
                                                    </div>
                                                    <Card.Title className="fs-6 my-2">Best snakes with nut pack 200gm</Card.Title>
                                                    <Card.Text className="fs-6 text-success fw-bold">
                                                        $145
                                                        <span className="ms-3 text-body-tertiary"><s>$150</s></span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="p-3 mt-5" style={{ width: '13rem' }}>

                                                <div className="position-relative">
                                                    <Card.Img variant="top" src="/public/13.jpg" className="border rounded-3" />
                                                </div>

                                                <Card.Body className="text-center">
                                                    <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Fruits</span>
                                                    <div className="start fs-5" style={{ color: '#f5885f' }}>
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <span className="fs-6">(4.5)</span>
                                                    </div>
                                                    <Card.Title className="fs-6 my-2">Fresh organic 1kg simla marming</Card.Title>
                                                    <Card.Text className="fs-6 text-success fw-bold">
                                                        $120.25
                                                        <span className="ms-3 text-body-tertiary"><s>$123.25</s></span>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-center align-items-center mt-4">
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination">
                                                <li className="page-item"><a className="page-link text-secondary" href="javascript:void(0)">Previous</a></li>
                                                <li className="page-item"><a className="page-link text-secondary bg-success text-white" href="javascript:void(0)">1</a></li>
                                                <li className="page-item"><a className="page-link text-secondary" href="javascript:void(0)">2</a></li>
                                                <li className="page-item"><a className="page-link text-secondary" href="javascript:void(0)">3</a></li>
                                                <li className="page-item"><a className="page-link text-secondary" href="javascript:void(0)">Next</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </Row>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000" className="asaid col-lg-3 flex">
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
                    </Row >
                </div>
            </Container >
        </>
    )
}

export default ShopRightsidebar;

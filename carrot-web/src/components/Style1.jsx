import { Card, Col, Container, Row } from "react-bootstrap";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

const Style1 = () => {
    return (
        <>
            {/* STYLE START  */}
            <Container data-aos="fade-up" data-aos-duration="1000">
                <div className="text-center border-top pt-5">
                    <h2>Style 1</h2>
                    <p className="text-body-tertiary w-50 m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                </div>
                <Row>
                    <Col>
                        <Card className="p-3 mt-5" style={{ width: '18rem' }}>

                            <div className=" position-relative">
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
                        <Card className="p-3 mt-5" style={{ width: '18rem' }}>
                            <div className=" position-relative">
                                <Card.Img variant="top" src="/public/Styl2.jpg" className="border rounded-3" />
                            </div>

                            <Card.Body className="text-center">
                                <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Fruits</span>
                                <div className="start fs-5" style={{ color: '#f5885f' }}>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStarOutline />
                                    <span className="fs-6">(4.5)</span>
                                </div>
                                <Card.Title className="fs-6 my-2">Fresh organic apple 1kg simla marming</Card.Title>
                                <Card.Text className="fs-5 text-success fw-bold">
                                    $120.25
                                    <span className="ms-3 fs-6 text-body-tertiary"><s>$123.25</s></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 mt-5" style={{ width: '18rem' }}>
                            <div className=" position-relative">
                                <Card.Img variant="top" src="/public/Styl3.jpg" className="border rounded-3" />
                            </div>
                            <Card.Body className="text-center">
                                <span className="text-body-tertiary" style={{ fontSize: '13px' }}>Fruits</span>
                                <div className="start fs-5" style={{ color: '#f5885f' }}>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStarOutline />
                                    <IoMdStarOutline />
                                    <span className="fs-6">(3.2)</span>
                                </div>
                                <Card.Title className="fs-6 my-2">Organic fresh venila farm watermelon 5kg</Card.Title>
                                <Card.Text className="fs-5 text-success fw-bold">
                                    $50.30
                                    <span className="ms-3 fs-6 text-body-tertiary"><s>$72.60</s></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 mt-5" style={{ width: '18rem' }}>
                            <div className=" position-relative">
                                <Card.Img variant="top" src="/public/Styl4.jpg" className="border rounded-3" />
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
                                <Card.Title className="fs-6 my-2">Sweet crunchy nut mix 250gm pack</Card.Title>
                                <Card.Text className="fs-5 text-success fw-bold">
                                    $120.25
                                    <span className="ms-3 fs-6 text-body-tertiary"><s>$123.25</s></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* ST&YLE END  */}
        </>
    )
}

export default Style1;
import { Card, Col, Container, Row } from "react-bootstrap";
import { IoMdStar } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";


const Style2 = () => {
    return (
        <>
            {/* STYLE START  */}
            <Container data-aos="fade-up" data-aos-duration="2000">
                <div className="text-center pt-5">
                    <h2 className="mb-3">Style 2</h2>
                    <p className="text-body-tertiary w-50 m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                </div>
                <Row>
                    <Col>
                        <Card className="p-3 mt-5" style={{ width: '25rem' }}>
                            <div className=" position-relative">
                                <Card.Img variant="top" src="/public/Styl5.jpg" className="border rounded-3" />
                                <IoBagOutline className="position-absolute bottom-0 end-0 text-success m-2" />
                            </div>
                            <Card.Body className="text-center">
                                <span>Organic fresh lemon</span>
                                <div className="start fs-5" style={{ color: '#f5885f' }}>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </div>
                                <Card.Title className="fs-6 my-2">Lorem ipsum dolor adipisicing elit.</Card.Title>
                                <Card.Text className="fs-5 text-success fw-bold">
                                    $145
                                    <span className="ms-3 fs-6 text-body-tertiary"><s>$150</s></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 mt-5" style={{ width: '25rem' }}>
                            <div className=" position-relative">
                                <Card.Img variant="top" src="/public/Styl2.jpg" className="border rounded-3" />
                                <IoBagOutline className="position-absolute bottom-0 end-0 text-success m-2" />
                            </div>
                            <Card.Body className="text-center">
                                <span>Organic fresh apple juice</span>
                                <div className="start fs-5" style={{ color: '#f5885f' }}>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </div>
                                <Card.Title className="fs-6 my-2">Lorem ipsum dolor adipisicing elit.</Card.Title>
                                <Card.Text className="fs-5 text-success fw-bold">
                                    $120.25
                                    <span className="ms-3 fs-6 text-body-tertiary"><s>$123.25</s></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="p-3 mt-5" style={{ width: '25rem' }}>
                            <div className=" position-relative">
                                <Card.Img variant="top" src="/public/Styl3.jpg" className="border rounded-3" />
                                <IoBagOutline className="position-absolute bottom-0 end-0 text-success m-2" />
                            </div>
                            <Card.Body className="text-center">
                                <span>Organic fresh venila farm watermelon 5kg</span>
                                <div className="start fs-5" style={{ color: '#f5885f' }}>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </div>
                                <Card.Title className="fs-6 my-2">Lorem ipsum dolor adipisicing elit.</Card.Title>
                                <Card.Text className="fs-5 text-success fw-bold">
                                    $50.30
                                    <span className="ms-3 fs-6 text-body-tertiary"><s>$72.60</s></span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* STYLE END  */}
        </>
    )
}

export default Style2;
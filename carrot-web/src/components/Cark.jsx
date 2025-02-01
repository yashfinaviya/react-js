import { Tab, Nav, Row, Col, Card, Container, Button } from "react-bootstrap";

const Cark = () => {
    return (
        <>
            <Container>
                <div className="mt-5">
                    <Tab.Container defaultActiveKey="cake-milk">
                        <Row>
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-column nav-link-cards">
                                    <Nav.Item>
                                        <Nav.Link className="nav-link-card" eventKey="cake-milk">Cake & Milk <br/> <span className="nav-link-card-span">(65 items)</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="nav-link-card" eventKey="fresh-meat">Fresh Meat <br/> <span className="nav-link-card-span">(30 items)</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="nav-link-card" eventKey="vegetables">Vegetables <br/> <span className="nav-link-card-span">(25 items)</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="nav-link-card" eventKey="apple-mango">Apple & Mango <br/> <span className="nav-link-card-span">(45 items)</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="nav-link-card" eventKey="strawberry">Strawberry <br/> <span className="nav-link-card-span">(68 items)</span></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="nav-link-card">
                                            View More
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>

                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="cake-milk">
                                        <Row>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src="/public/cark1.jpg"
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src="/public/cark2.jpg"
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="fresh-meat">
                                        <Row>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src="/public/mest1.jpg"
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src="/public/mest2.jpg"
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="vegetables">
                                        <Row>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src="/public/vegetables1.jpg"
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src="/public/vegetables2.jpg"
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="apple-mango">
                                        <Row>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src="/public/apple1.jpg"
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src="/public/apple2.jpg"
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="strawberry">
                                        <Row>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src="/public/strawberry1.jpg"
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6}>
                                                <Card>
                                                    <Card.Img
                                                        variant="top"
                                                        src="/public/strawberry2.jpg"
                                                        alt="Cake"
                                                        className="position-relative"
                                                    />
                                                    <div className="position-absolute m-3 fs-1 text-white fw-bold">50% <small className="fs-6">OFF</small></div>
                                                    <Card.Body className="position-absolute text-center text-white fw-bold" style={{ left: '35%', bottom: '15px' }}>
                                                        <Card.Title>Cake</Card.Title>
                                                        <Button className="btn btn-success fw-bold">Shop Now</Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>

                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </Container>
        </>
    );
}

export default Cark;

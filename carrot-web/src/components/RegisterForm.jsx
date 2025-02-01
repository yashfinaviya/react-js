import { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router';


const RegisterForm = () => {

    const navigator = useNavigate();

    const [formData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postCode: '',
        country: '',
        region: '',
    });

    const hendleclick = () => {
        navigator('/loginForm')
    }

    return (
        <Container className="form-container">
            <div data-aos="fade-up" data-aos-duration="2000" className="d-flex justify-content-center align-items-center mt-5">
                <div className='border p-5'>
                    <div className="text-center mb-4">
                        <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                            <img src="/public/logo.png" alt="" />
                        </div>
                    </div>
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>First Name*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        placeholder="Enter your first name"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Last Name*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        placeholder="Enter your last name"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Email*</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Phone Number*</Form.Label>
                                    <Form.Control
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Address*</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                value={formData.address}
                                placeholder="Enter your address"
                                required
                            />
                        </Form.Group>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>City*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        placeholder="Enter your city"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Post Code</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="postCode"
                                        value={formData.postCode}
                                        placeholder="Enter your post code"
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Country*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="country"
                                        value={formData.country}
                                        placeholder="Enter your country"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Region/State*</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="region"
                                        value={formData.region}
                                        placeholder="Enter your region/state"
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="d-flex justify-content-between align-items-center">
                            <Button type="submit" variant="primary">
                                Signup
                            </Button>
                            <a href="#" onClick={hendleclick} className="text-decoration-none text-muted">
                                Already have an account?
                            </a>
                        </div>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default RegisterForm;

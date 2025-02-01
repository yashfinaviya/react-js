import { Button, Col, Container, Form, FormCheck, Row } from "react-bootstrap"

const Checkout = () => {
    return (
        <>
            <Container>
                <div className="mt-5">
                    <Row>
                        <div className="col-lg-3">
                            <div className="border p-2">
                                <div>
                                    <h3 className="fs-5">Summary</h3>
                                    <div className="my-2 d-flex justify-content-between align-items-center">
                                        <span className="text-secondary">Sub-Total</span>
                                        <span>$80.00</span>
                                    </div>
                                    <div className="my-2 d-flex justify-content-between align-items-center">
                                        <span className="text-secondary">Delivery Charges</span>
                                        <span>$80.00</span>
                                    </div>
                                </div>
                                <div className="border-bottom"></div>
                                <div>
                                    <div className="my-2 d-flex justify-content-between align-items-center">
                                        <span>Total Amount</span>
                                        <span>$80.00</span>
                                    </div>
                                    <div>
                                        <div className="mt-4">
                                            <Row>
                                                <img src="/public/Styl1.jpg" alt="" style={{ width: "32%", height: '32%' }} />
                                                <Col>
                                                    <div className="checkout-contant">
                                                        <h6>Dates Value Pack Pouch</h6>
                                                        <div className="stat">⭐⭐⭐⭐⭐</div>
                                                        <p>
                                                            <span className="fw-bold" style={{ color: '#64b496' }}>$120.25</span>
                                                            <span className="text-decoration-line-through ms-2">$123.25</span>
                                                        </p>
                                                    </div>
                                                </Col>
                                                <img src="/public/Styl2.jpg" alt="" style={{ width: "32%", height: '32%' }} />
                                                <Col>
                                                    <div className="checkout-contant">
                                                        <h6>Dates Value Pack Pouch</h6>
                                                        <div className="stat">⭐⭐⭐⭐⭐</div>
                                                        <p>
                                                            <span className="fw-bold" style={{ color: '#64b496' }}>$120.25</span>
                                                            <span className="text-decoration-line-through ms-2">$123.25</span>
                                                        </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border p-2 mt-4">
                                <div>
                                    <h3 className="fs-5">Delivery Method</h3>
                                    <p className="text-secondary">Please select the preferred shipping method to use on this order.</p>
                                    <Form>
                                        <div className="d-flex">
                                            <p className="fw-semibold">Free Shipping</p>
                                            <p className="fw-semibold" style={{ marginLeft: "22%" }}>Flat Rate</p>
                                        </div>
                                        <div className="d-flex">
                                            <FormCheck
                                                type="radio"
                                                id="radio2"
                                                name="radio"
                                                label="Rate - $0 .00"
                                                className="text-secondary"
                                                inline
                                            />
                                            <FormCheck
                                                type="radio"
                                                id="radio3"
                                                name="radio"
                                                label="Rate - $5.00"
                                                className="text-secondary"
                                                inline
                                                style={{ marginLeft: "34px" }}
                                            />
                                        </div>
                                    </Form>
                                    <h6 className="mt-4">Add Comments About Your Order</h6>
                                    <textarea name="Message" id="Message" rows="4" cols={34} placeholder="Comments" className="p-2" style={{ borderColor: "#7a7a7a" }}></textarea>
                                </div>
                            </div>
                            <div className="border p-2 mt-4">
                                <div>
                                    <h3 className="fs-5">Payment Method</h3>
                                    <p className="text-secondary">Please select the preferred payment method to use on this order.</p>
                                    <Form>
                                        <FormCheck
                                            type="radio"
                                            id="radio2"
                                            name="radio"
                                            label="Cash On Delivery"
                                            className="text-secondary"
                                            inline
                                        />
                                        <FormCheck
                                            type="radio"
                                            id="radio3"
                                            name="radio"
                                            label=" UPI Delivery Transfer"
                                            className="text-secondary"
                                            inline
                                        />
                                        <FormCheck
                                            type="radio"
                                            id="radio2"
                                            name="radio"
                                            label="Bank Transfer"
                                            className="text-secondary"
                                            inline
                                        />
                                    </Form>
                                </div>
                            </div>
                            <div className="border p-2 mt-4">
                                <div>
                                    <h3 className="fs-5">Payment Method</h3>
                                    <img src="/public/payment.png" alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 border">
                            <div className="container mt-5">
                                <h4>New Customer</h4>
                                <Form>
                                    <div className="d-flex my-2">
                                        <Form.Check
                                            type="radio"
                                            label="Register Account"
                                            name="newCustomerOptions"
                                            id="registerAccount"
                                            defaultChecked
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Guest Account"
                                            name="newCustomerOptions"
                                            id="guestAccount"
                                            className="ms-5"
                                        />
                                    </div>
                                    <p className="text-secondary">By creating an account you will be able to shop faster, be up to date on an order<br />status, and keep track of the orders you have previously made.</p>
                                    <Button className="bg-success">
                                        Continue
                                    </Button>
                                </Form>

                                <h4 className="mt-4">Returning Customer</h4>
                                <Form>
                                    <Form.Group controlId="emailAddress" className="mb-3">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email address" />
                                    </Form.Group>
                                    <Form.Group controlId="password" className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Enter your password" />
                                    </Form.Group>
                                    <Button className="bg-success">Login</Button>
                                    <Button variant="link" className="ms-3 text-dark">
                                        Forgot Password?
                                    </Button>
                                </Form>

                                <h4 className="mt-5">Billing Details</h4>
                                <p>Checkout Options</p>
                                <Form>
                                    <Form.Group>
                                        <div className="d-flex">
                                            <Form.Check
                                                type="radio"
                                                label="I want to use an existing address"
                                                name="billingAddressOptions"
                                                id="existingAddress"
                                            />
                                            <Form.Check
                                                type="radio"
                                                label="I want to use a new address"
                                                name="billingAddressOptions"
                                                id="newAddress"
                                                className="ms-5"
                                                defaultChecked
                                            />      
                                        </div>
                                    </Form.Group>
                                    <Row className="mt-3">
                                        <Col md={6}>
                                            <Form.Group controlId="firstName" className="mb-3">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter your first name" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="lastName" className="mb-3">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter your last name" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group controlId="addressLine1" className="mb-3">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" placeholder="Address Line 1" />
                                    </Form.Group>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group controlId="city" className="mb-3">
                                                <Form.Label>City</Form.Label>
                                                <Form.Control type="text" placeholder="City" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="postcode" className="mb-3">
                                                <Form.Label>Post Code</Form.Label>
                                                <Form.Control type="text" placeholder="Post Code" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group controlId="country" className="mb-3">
                                                <Form.Label>Country</Form.Label>
                                                <Form.Select>
                                                    <option>Select Country</option>
                                                    <option>USA</option>
                                                    <option>UK</option>
                                                    <option>India</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group controlId="regionState" className="mb-3">
                                                <Form.Label>Region/State</Form.Label>
                                                <Form.Control type="text" placeholder="Region/State" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Button variant="success" className="m-4">
                                        Place Order
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Checkout
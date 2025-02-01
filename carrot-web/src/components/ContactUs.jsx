import { Button, Container, Form, Row } from "react-bootstrap"
import { CgMail } from "react-icons/cg"
import { IoCallOutline } from "react-icons/io5"
import { LuMapPin } from "react-icons/lu"
import { RiGlobeLine } from "react-icons/ri"

const ContactUs = () => {
    return (
        <>
            <Container>
                <div data-aos="fade-up" data-aos-duration="3000" className="mt-5">
                    <div className="contact-contant text-center mt-5">
                        <h2>Get in Touch</h2>
                        <p className="text-secondary">Prepared is me marianne pleasure likewise debating. Wonder an unable except<br />better stairs do ye admire. His secure called esteem praise.</p>
                    </div>
                    <Row className="text-center mt-4">
                        <div data-aos="fade-up" data-aos-duration="1000" className="col-lg-4">
                            <div className="info-box rounded-3">
                                <div className="cr-icon">
                                    <IoCallOutline />
                                </div>
                                <div className="info-content">
                                    <h4 className="fs-5 fw-bold">Contact</h4>
                                    <p className="text-dark fw-medium"><IoCallOutline />&nbsp;(+91)-9876XXXXX</p>
                                    <p className="text-dark fw-medium"><IoCallOutline />&nbsp;(+91)-9876XXX</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="2000" className="col-lg-4">
                            <div className="info-box rounded-3">
                                <div className="cr-icon">
                                    <CgMail />
                                </div>
                                <div className="info-content">
                                    <h4 className="fs-5 fw-bold">Mail & Website</h4>
                                    <p className="text-dark fw-medium"><CgMail />&nbsp; mail.example@gmail.com</p>
                                    <p className="text-dark fw-medium"><RiGlobeLine />&nbsp; www.yourdomain.com</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000" className="col-lg-4">
                            <div className="info-box rounded-3">
                                <div className="cr-icon">
                                    <LuMapPin />
                                </div>
                                <div className="info-content">
                                    <h4 className="fs-5 fw-bold">Address</h4>
                                    <p className="text-dark fw-medium"> <LuMapPin />&nbsp;140 Ruami Moraes Filho, 987 - Salvador - MA, 40352, Brazil.</p>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <div className="mt-5">
                        <Row>
                            <div data-aos="fade-up" data-aos-duration="1000" className="col-lg-6">
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.3743827356063!2d-93.6511541!3d42.0212528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee693c8c6b1185%3A0x55e83a09d69e6e64!2sWorkiva!5e0!3m2!1sen!2sus!4v1611234567890!5m2!1sen!2sus"
                                    width="100%"
                                    height="400px"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="2000" className="col-lg-6">
                                <Form className="form-map">
                                    <Form.Group className="mb-4" controlId="formName">
                                        <Form.Control type="text" placeholder="Full name" />
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="formEmail">
                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="formPhone">
                                        <Form.Control type="text" placeholder="Phone" />
                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="formMessage">
                                        <Form.Control as="textarea" rows={6} placeholder="Message" />
                                    </Form.Group>
                                    <Button type="button" className="cr-button">Submit</Button>
                                </Form>
                            </div>
                        </Row>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ContactUs;
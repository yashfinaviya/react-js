import { useEffect } from "react";
import './footer.css'
import { Container, Row, Col } from "reactstrap";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })


  const year = new Date().getFullYear()
  return (<footer className="footer">
    <Container>
      <Row>
        <Col className="text-center social" lg='12'>
          <p className="socialp">
            <FaInstagram />
            <FaFacebook />
            <FaLinkedin />
            <FaGithub />
          </p>
        </Col>
        <Col lg='12'>
          <p className="footer__copyright">Rawcipes<i className="ri-copyright-line"></i>  {year}. All rights reserved. </p>
          <p className="footer__text mt-4">Rawcipes: Your virtual culinary companion. Explore diverse recipes, from classic comfort foods to exotic delights. Elevate your cooking experience with step-by-step instructions and tantalizing flavors, all at your fingertips.</p>

        </Col>
      </Row>
    </Container>
  </footer>
  )
};

export default Footer;
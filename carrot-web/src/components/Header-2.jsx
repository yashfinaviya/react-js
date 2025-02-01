import { useState } from 'react';
import { Accordion, NavDropdown, Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { IoCallOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const Header2 = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container>
                <div className="header2">
                    <header>
                        <Navbar expand="lg" className='text-body'>

                            <Navbar.Brand>
                                <HiOutlineMenuAlt1 onClick={handleShow} variant="primary" className='border rounded-3' style={{ fontSize: '30px' }} />
                            </Navbar.Brand>

                            {/* OFFCENVAS START */}
                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Accordion defaultActiveKey="1">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Home</Accordion.Header>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Category</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li> Shop Left sidebar</li>
                                                    <li>Shop Right sidebar</li>
                                                    <li>Full Width</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Products</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>product Left sidebar</li>
                                                    <li>product Right sidebar</li>
                                                    <li>Product Full Width</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Pages</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>About Us</li>
                                                    <li>Contact Us</li>
                                                    <li>Cart</li>
                                                    <li>Checkout</li>
                                                    <li>Track Order</li>
                                                    <li>Wishlist</li>
                                                    <li>Faq</li>
                                                    <li>Login</li>
                                                    <li>Register</li>
                                                    <li>Policy</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Blog</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>Left sidebar</li>
                                                    <li>Right sidebar</li>
                                                    <li>Full Width</li>
                                                    <li>Detail Left sidebar</li>
                                                    <li>Detail Right sidebar</li>
                                                    <li>Detail Full Width</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Products</Accordion.Header>
                                            <Accordion.Body>
                                                <ul>
                                                    <li>Products</li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Offcanvas.Body>
                            </Offcanvas>
                            {/* OFFCENVAS END */}

                            {/* HEADER START  */}
                            <Navbar.Collapse id="basic-navbar-nav">

                                <Nav className="ms-auto">
                                    <Nav.Link><Link className='text-dark' to={'/'}>Home</Link></Nav.Link>
                                    <NavDropdown title="Category" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1"><Link className='text-dark' to={'/shopLeftsidebar'}>Shop Left sidebar</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1"><Link className='text-dark' to={'/shopRightsidebar'}>Shop Right sidebar</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1"><Link className='text-dark' to={'/shopFullWidthsidebar'}>Full Width sidebar</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Products" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1"><Link className='text-dark' to={'/productLeftsidebar'}>Product Left sidebar</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1"><Link className='text-dark' to={'/productRightsidebar'}>Product Right sidebar</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1"><Link className='text-dark' to={'/productFullWidth'}>Product Full Width</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Pages" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1"><Link className='text-dark' to={'/about'}>About Us</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1"><Link className='text-dark' to={'contactUs'}>Contact US</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2"><Link className='text-dark' to={'/cart'}>Cart</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3"><Link className='text-dark' to={'/checkout'}>Checkout</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3"><Link className='text-dark' to={'/trackOrder'}>Track Order</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3"><Link className='text-dark' to={'/wishlist'}>Wishlist</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3"><Link className='text-dark' to={'/faq'}>Faq</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3"><Link className='text-dark' to={'/loginForm'}>Login</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3"><Link className='text-dark' to={'/registerForm'}>Register</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3"><Link className='text-dark' to={'/policy'}>Policy</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Blog" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1"><Link className='text-dark' to={'/leftSidebar'}>Left Sidebar</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2"><Link className='text-dark' to={'/rightSidebar'}>Right Sidebar</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3"><Link className='text-dark' to={'/fullWidth'}>Full Width</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3"><Link className='text-dark' to={'/detailLeftSidebar'}>Detail Left Sidebar</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3"><Link className='text-dark' to={'/detailRightSidebar'}>Detail Right Sidebar</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3"><Link className='text-dark' to={'/detailFullWidth'}>Detail Full Width</Link></NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Elements" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1"><Link className='text-dark' to={'/products'}>Products</Link></NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <div className=" ms-5 ">
                                    <span>
                                        <IoCallOutline className='me-3' />
                                        +123 ( 456 ) ( 7890 )
                                    </span>
                                </div>
                            </Navbar.Collapse>
                            {/* HEADER END  */}
                        </Navbar>
                    </header>
                </div>
            </Container >
        </>
    );
}

export default Header2;
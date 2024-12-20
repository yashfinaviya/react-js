import Dropdown from 'react-bootstrap/Dropdown'
import { Accordion, NavDropdown, Offcanvas } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import Nav from 'react-bootstrap/Nav';
import { FaSearch, FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import './carrotweb.css'
const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
<>
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="top-header d-flex flex-row justify-content-between position-relative">
                            <a href="#" className='cr-logo'>
                                <img src="/public/logo.png "alt="logo" className=' d-block' />
                            </a>
                            <form className='cr-search position-relative d-lg-block d-none'>
                                <input type="text" className='search-input' placeholder='Search For items...' />
                                <select className='form-select position-absolute'>
                                    <option selected>All Categories</option>
                                    <option value="1">Mens</option>
                                    <option value="2">Womens</option>
                                    <option value="3">Electronics</option>
                                </select>
                                <a href="#" className='search-btn position-absolute end-0 top-0 bottom-0 d-flex align-items-center justify-content-center'>
                                    <FaSearch className='search' />
                                </a>
                            </form>
                            <div className="d-lg-block d-none">
                                <div className='cr-right-bar d-flex'>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='me-2'>
                                            <FaRegUser className='user' />
                                            <span>Account</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Register</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Checkout</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Login</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <a href="#" className='cr-right-bar-item d-flex align-items-center text-decoration-none'>
                                        <FaRegHeart className='heart' />
                                        <span>Wishlist</span>
                                    </a>
                                    <a href="#" className='cr-right-bar-item Shopping-toggle d-flex align-items-center text-decoration-none'>
                                        <AiOutlineShoppingCart className='shopping' />
                                        <span>Cart</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Container>
                <div className="header2">
                    <Navbar expand="lg" className='text-body'>
                        <Navbar.Brand>
                            <HiOutlineMenuAlt1 onClick={handleShow} variant="primary" className='border rounded-3' style={{ fontSize: '30px' }} />
                        </Navbar.Brand>

                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Accordion defaultActiveKey="1">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Home</Accordion.Header>
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
                                                <li>Cart</li>
                                                <li>Checkout</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Blog</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>Shop Left sidebar</li>
                                                <li>Shop Right sidebar</li>
                                                <li>Full Width</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Products</Accordion.Header>
                                        <Accordion.Body>
                                            <ul>
                                                <li>Shop Left sidebar</li>
                                                <li>Shop Right sidebar</li>
                                                <li>Product Full Width</li>
                                            </ul>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Offcanvas.Body>
                        </Offcanvas>
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="ms-auto mt-4 mx-5">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <NavDropdown title="Category" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Shop Left sidebar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Shop Right sidebar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Full Width</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Products" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">product Left sidebar </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">product Right sidebar </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Product Full Width
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Pages" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Cart</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Checkout</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Blog" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Shop Left sidebar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Shop Right sidebar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Full Width</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Elements" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Shop Left sidebar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Shop Right sidebar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Full Width</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <div className=" ms-5 mt-4">
                                <span>
                                    <IoCallOutline className='me-3' />
                                    +123 ( 456 ) ( 7890 )
                                </span>
                            </div>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </Container >

        </header>

        {/* HEADER 2 */}
        <div className='section-breadcrumb'>
                <div className='cr-breadcrumb-image z-0 position-relative d-flex align-items-center'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 col-lg-6'>
                                <div className='cr-breadcrumb-title d-flex align-items-center justify-content-between flex-row'>
                                    <h2 className='mb-0 fw-bold'>Product</h2>
                                    <span>
                                        <a href="#"  className='text-decoration-none'>Home</a> - Product
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </>      
    );
}
export default Header;
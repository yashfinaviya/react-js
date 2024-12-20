import { FaPaperPlane, FaInstagram } from "react-icons/fa";
import { IoCallOutline, IoMenu } from "react-icons/io5";
import { FaXTwitter, FaDribbble } from "react-icons/fa6";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { RiFacebookLine } from "react-icons/ri";
import './carrotweb.css'

const Footer = () => {
    return (
        <>
            <footer className='position-relative'>
                <div className="container">
                    <div className="row footer-top position-relative">

                        <div className='col-xl-4 col-lg-6 col-sm-12 col-12 cr-footer-border'>
                            <div className="footer-logo">
                                <div className='footer-image'>
                                    <img src="/public/logo.png" alt="logo" />
                                </div>
                                <p className='footer-content'>Carrot is the biggest market of grocery products. Get <br/>your daily needs from our store.</p>
                            </div>
                            <div className="cr-footer">
                                <ul className="cr-footer-links">
                                    <li className='location-icon position-relative'>
                                        <CiLocationOn className='footerlocation' />
                                        51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.
                                    </li>
                                    <li className='mail-icon position-relative'>
                                        <CiMail className='footermail' />
                                        <a href="#">example@email.com</a>
                                    </li>
                                    <li className='call-icon position-relative'>
                                        <IoCallOutline className='footercall' />
                                        <a href="#"> +91 123 4567890</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-xl-2 col-lg-6 col-sm-12 col-12 cr-footer-border'>
                            <div className="cr-footer">
                                <ul className='cr-footer-links'>
                                    <h4 className="cr-sub-title fw-bold">Company</h4>
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Delivery Information</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#">contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Support Center</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-xl-2 col-lg-6 col-sm-12 col-12 cr-footer-border'>
                            <div className="cr-footer">
                                <ul className='cr-footer-links'>
                                    <h4 className="cr-sub-title fw-bold">Category</h4>
                                    <li>
                                        <a href="#">Dairy & Bakery</a>
                                    </li>
                                    <li>
                                        <a href="#">Fruits & Vegetable</a>
                                    </li>
                                    <li>
                                        <a href="#">Snack & Spice</a>
                                    </li>
                                    <li>
                                        <a href="#">Juice & Drinks</a>
                                    </li>
                                    <li>
                                        <a href="#">Chicken & Meat</a>
                                    </li>
                                    <li>
                                        <a href="#">Fast Food</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-xl-4 col-lg-6 col-sm-12 col-12 cr-footer-border'>
                            <div className="cr-footer">
                                <h4 className='cr-sub-title fw-bold'>Subscribe Our Newsletter</h4>
                                <div className='cr-footer-links'>
                                    <form className='cr-search-footer'>
                                        <input type="text" placeholder='search here...' />
                                        <a href="#" className='search-btn d-flex align-items-center justify-content-center'>
                                            <FaPaperPlane className='plane' />
                                        </a>
                                    </form>
                                </div>
                                <div className="cr-social-media d-flex flex-row">
                                    <span>
                                        <a href="#" className='d-flex align-items-center justify-content-center'>
                                            <RiFacebookLine />
                                        </a>
                                    </span>
                                    <span>
                                        <a href="#" className='d-flex align-items-center justify-content-center'>
                                            <FaXTwitter />
                                        </a>
                                    </span>
                                    <span>
                                        <a href="#" className='d-flex align-items-center justify-content-center'>
                                            <FaDribbble />
                                        </a>
                                    </span>
                                    <span>
                                        <a href="#" className='d-flex align-items-center justify-content-center'>
                                            <FaInstagram />
                                        </a>
                                    </span>
                                </div>

                                <div>
                                    <div className="insta mx-auto position-relative overflow-hidden p-0 z-1">
                                        <div className='position-relative z-1 d-flex'>

                                            <div className='img h-100 position-relative'>
                                                <a href="#" className='position-relative d-flex'>
                                                    <img src="/public/f1.jpg" alt="insta1" />
                                                    <div className='overlay position-absolute top-0 start-0'></div>
                                                </a>
                                            </div>

                                            <div className='img h-100 position-relative'>
                                                <a href="#" className='position-relative d-flex'>
                                                    <img src="/public/f2.jpg" alt="insta2" />
                                                    <div className='overlay position-absolute top-0 start-0'></div>
                                                </a>
                                            </div>

                                            <div className='img h-100 position-relative'>
                                                <a href="#" className='position-relative d-flex'>
                                                    <img src="/public/f3.jpg" alt="insta3" />
                                                    <div className='overlay position-absolute top-0 start-0'></div>
                                                </a>
                                            </div>

                                            <div className='img h-100 position-relative'>
                                                <a href="#" className='position-relative d-flex'>
                                                    <img src="/public/f4.jpg" alt="insta4" />
                                                    <div className='overlay position-absolute top-0 start-0'></div>
                                                </a>
                                            </div>

                                            <div className='img h-100 position-relative'>
                                                <a href="#" className='position-relative d-flex'>
                                                    <img src="/public/f5.jpg" alt="insta5" />
                                                    <div className='overlay position-absolute top-0 start-0'></div>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="footer-bottom text-center">
                        <p>
                            &copy; <span>2024</span>
                            <a href="#"> Carrot</a>, All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;
import Container from "react-bootstrap/esm/Container";
import './carrotweb.css'
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";



const Style1 = () => {
    return (
        <>
            <Container className="py">
                <div className="title">
                    <h2>Style 1</h2>
                    <p className="text-body-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore lacus vel facilisis.</p>
                </div>
                <div className='row'>

                    <div className="col-lg-3 col-sm-6 mb-24">
                        <div className="product-card bg-white d-flex flex-column">
                            <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative" style={{ overflow: "hidden" }}>
                                    <img src="/public/1.jpg" alt="card1" className='img d-block m-auto' />
                                </div>
                                <div className="cr-side-view position-absolute d-grid opacity-0">
                                    <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                        <FaRegHeart className='heart' />
                                    </a>
                                    <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                        <MdOutlineRemoveRedEye className='eye' />
                                    </a>
                                </div>
                                <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                    <IoBagOutline className='bag' />
                                </a>
                            </div>
                            <div className="cr-product-details text-center overflow-hidden">
                                <div className="cr-brand">
                                    <a href="#" className='d-flex justify-content-center text-decoration-none'>Snacks</a>
                                    <div className="cr-star d-flex justify-content-center align-items-center">
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <p className='rate'>(5.0)</p>
                                    </div>
                                </div>
                                <a href="#" className="title d-flex justify-content-center text-decoration-none">Best snakes with hazel nut pack 200gm</a>
                                <p className="cr-price">
                                    <span className="new-price">$145</span>
                                    <span className="old-price">$150</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 mb-24">
                        <div className="product-card bg-white d-flex flex-column">
                            <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative">
                                    <img src="/public/2.jpg" alt="card2" className='img d-block m-auto' />
                                </div>
                                <div className="cr-side-view position-absolute d-grid opacity-0">
                                    <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                        <FaRegHeart className='heart' />
                                    </a>
                                    <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                        <MdOutlineRemoveRedEye className='eye' />
                                    </a>
                                </div>
                                <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                    <IoBagOutline className='bag' />
                                </a>
                            </div>
                            <div className="cr-product-details text-center overflow-hidden">
                                <div className="cr-brand">
                                    <a href="#" className='d-flex justify-content-center text-decoration-none'>Fruits</a>
                                    <div className="cr-star d-flex justify-content-center align-items-center">
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaRegStar className='star' />
                                        <p className='rate'>(4.5)</p>
                                    </div>
                                </div>
                                <a href="#" className="title d-flex justify-content-center text-decoration-none">Fresh organic apple 1kg simla marming</a>
                                <p className="cr-price">
                                    <span className="new-price">$120.25</span>
                                    <span className="old-price">$123.25</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 mb-24">
                        <div className="product-card bg-white d-flex flex-column">
                            <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative">
                                    <img src="/public/3.jpg" alt="card3" className='img d-block m-auto' />
                                </div>
                                <div className="cr-side-view position-absolute d-grid opacity-0">
                                    <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                        <FaRegHeart className='heart' />
                                    </a>
                                    <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                        <MdOutlineRemoveRedEye className='eye' />
                                    </a>
                                </div>
                                <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                    <IoBagOutline className='bag' />
                                </a>
                            </div>
                            <div className="cr-product-details text-center overflow-hidden">
                                <div className="cr-brand">
                                    <a href="#" className='d-flex justify-content-center text-decoration-none'>Fruits</a>
                                    <div className="cr-star d-flex justify-content-center align-items-center">
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaRegStar className='star' />
                                        <FaRegStar className='star' />
                                        <p className='rate'>(3.2)</p>
                                    </div>
                                </div>
                                <a href="#" className="title d-flex justify-content-center text-decoration-none">Organic fresh venila farm watermelon 5kg</a>
                                <p className="cr-price">
                                    <span className="new-price">$50.30</span>
                                    <span className="old-price">$72.60</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 mb-24">
                        <div className="product-card bg-white d-flex flex-column">
                            <div className="product-card-img d-flex justify-content-center position-relative align-items-center">
                                <div className="image-inner d-flex align-items-center justify-content-center text-center position-relative">
                                    <img src="/public/4.jpg" alt="card4" className='img d-block m-auto' />
                                </div>
                                <div className="cr-side-view position-absolute d-grid opacity-0">
                                    <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                        <FaRegHeart className='heart' />
                                    </a>
                                    <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                        <MdOutlineRemoveRedEye className='eye' />
                                    </a>
                                </div>
                                <a className="cr-shopping-bag position-absolute d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                    <IoBagOutline className='bag' />
                                </a>
                            </div>
                            <div className="cr-product-details text-center overflow-hidden">
                                <div className="cr-brand">
                                    <a href="#" className='d-flex justify-content-center text-decoration-none'>Snacks</a>
                                    <div className="cr-star d-flex justify-content-center align-items-center">
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <FaStar className='star' />
                                        <p className='rate'>(5.0)</p>
                                    </div>
                                </div>
                                <a href="#" className="title d-flex justify-content-center text-decoration-none">Sweet crunchy nut mix 250gm pack</a>
                                <p className="cr-price">
                                    <span className="new-price">$120.25</span>
                                    <span className="old-price">$123.25</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </>
    )
}
export default Style1;
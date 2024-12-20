import './carrotweb.css'
import { FaRegHeart } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Style2 = () => {
    return (
        <>

            <div className="py">
                <div className="title">
                    <h2>Style 2</h2>
                    <p className="text-body-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore lacus vel facilisis.</p>
                </div>


                <div className='row'>

                    <div className="col-lg-4 col-md-6 mb-24">
                        <div className='product-card2 d-flex flex-column'>
                            <div className='product-card2-img d-flex justify-content-center position-relative align-items-center'>
                                <div className='image-inner2  d-flex align-items-center justify-content-center text-center position-relative'>
                                    <img src="/public/5.jpg" alt="card5" className='img d-block m-auto' />
                                    <div className="cr-side-view2 position-absolute d-grid opacit-0">
                                        <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                            <FaRegHeart className='heart' />
                                        </a>
                                        <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                            <MdOutlineRemoveRedEye className='eye' />
                                        </a>
                                    </div>
                                </div>
                                <a className="cr-shopping-bag2 position-absolute bg-white d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                    <IoBagOutline className='bag' />
                                </a>
                            </div>
                            <div className='cr-product2-details position-relative bg-white text-center overflow-hidden'>
                                <a href="#" className='d-flex justify-content-center text-decoration-none'>Organic fresh lemon</a>
                                <p className='cr-product2-name'>Lorem ipsum dolor adipisicing elit.</p>
                                <div className="cr-star d-flex justify-content-center align-items-center">
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                </div>
                                <p className="cr-price">
                                    <span className="new-price">$120.25</span>
                                    <span className="old-price">$123.25</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-24">
                        <div className='product-card2 d-flex flex-column'>
                            <div className='product-card2-img d-flex justify-content-center position-relative align-items-center'>
                                <div className='image-inner2  d-flex align-items-center justify-content-center text-center position-relative'>
                                    <img src="/public/2.jpg" alt="card2" className='img d-block m-auto' />
                                    <div className="cr-side-view2 position-absolute d-grid opacit-0">
                                        <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                            <FaRegHeart className='heart' />
                                        </a>
                                        <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                            <MdOutlineRemoveRedEye className='eye' />
                                        </a>
                                    </div>
                                </div>
                                <a className="cr-shopping-bag2 position-absolute bg-white d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                    <IoBagOutline className='bag' />
                                </a>
                            </div>
                            <div className='cr-product2-details position-relative bg-white text-center overflow-hidden'>
                                <a href="#" className='d-flex justify-content-center text-decoration-none'>Organic fresh apple juice</a>
                                <p className='cr-product2-name'>Lorem ipsum dolor adipisicing elit.</p>
                                <div className="cr-star d-flex justify-content-center align-items-center">
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                </div>
                                <p className="cr-price">
                                    <span className="new-price">$120.25</span>
                                    <span className="old-price">$123.25</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mb-24">
                        <div className='product-card2 d-flex flex-column'>
                            <div className='product-card2-img d-flex justify-content-center position-relative align-items-center'>
                                <div className='image-inner2  d-flex align-items-center justify-content-center text-center position-relative'>
                                    <img src="/public/3.jpg" alt="card3" className='img d-block m-auto' />
                                    <div className="cr-side-view2 position-absolute d-grid opacit-0">
                                        <a href="javascript:void(0)" className="wishlist d-flex align-items-center justify-content-center m-0 p-0 bg-white rounded-circle">
                                            <FaRegHeart className='heart' />
                                        </a>
                                        <a className="model-oraganic-product d-flex align-items-center justify-content-center p-0 bg-white rounded-circle" data-bs-toggle="modal" href="#quickview" role="button">
                                            <MdOutlineRemoveRedEye className='eye' />
                                        </a>
                                    </div>
                                </div>
                                <a className="cr-shopping-bag2 position-absolute bg-white d-flex justify-content-center align-items-center rounded-circle" href="javascript:void(0)">
                                    <IoBagOutline className='bag' />
                                </a>
                            </div>
                            <div className='cr-product2-details position-relative bg-white text-center overflow-hidden'>
                                <a href="#" className='d-flex justify-content-center text-decoration-none'>Organic fresh venila farm watermelon 5kg</a>
                                <p className='cr-product2-name'>Lorem ipsum dolor adipisicing elit.</p>
                                <div className="cr-star d-flex justify-content-center align-items-center">
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                    <FaStar className='star' />
                                </div>
                                <p className="cr-price">
                                    <span className="new-price">$120.25</span>
                                    <span className="old-price">$123.25</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}
export default Style2;
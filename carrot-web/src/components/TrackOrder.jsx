import { Container, Row } from "react-bootstrap";
import { FiTruck } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { IoCheckmark, IoGiftOutline, IoSettingsOutline, IoShieldCheckmarkOutline } from "react-icons/io5";


const TrackOrder = () => {
    return (
        <>
            <Container>
                <div className="mt-5">
                    <Row className="text-center ">
                        <div className="col-lg-4">
                            <div className="info-box rounded-3">
                                <div className="info-content">
                                    <h6 className="fs-6 fw-bold">order</h6>
                                    <p className="text-secondary">#9857</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="info-box rounded-3">
                                <div className="info-content">
                                    <h6 className="fs-6 fw-bold">Grasshoppers</h6>
                                    <p className="text-secondary">M254HT</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="info-box rounded-3">
                                <div className="info-content">
                                    <h6 className="fs-6 fw-bold">Expected date</h6>
                                    <p className="text-secondary">Feb 17, 2025</p>
                                </div>
                            </div>
                        </div>
                    </Row>
                    <div className="text-center mt-5">
                        <Row>
                            <div className="col-lg-2">
                                <div className="info-box bg-body-tertiary text-secondary rounded-3 position-relative">
                                    <div className="my-3 fs-5">
                                        <IoShieldCheckmarkOutline />
                                    </div>
                                    <div className="trackorder-icon">
                                        <IoCheckmark />
                                    </div>
                                    <div className="info-content">
                                        <h6 className="fs-6 fw-bold">order</h6>
                                        <p>confirmed</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="info-box bg-body-tertiary text-secondary rounded-3 position-relative">
                                    <div className="my-3 fs-5">
                                        <IoSettingsOutline />
                                    </div>
                                    <div className="trackorder-icon">
                                        <IoCheckmark />
                                    </div>
                                    <div className="info-content">
                                        <h6 className="fs-6 fw-bold">Processing</h6>
                                        <p>order</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="info-box rounded-3">
                                    <div className="my-3 fs-5">
                                        <IoGiftOutline />
                                    </div>
                                    <div className="info-content text-dark">
                                        <h6 className="fs-6 fw-bold">Quality</h6>
                                        <p>check</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="info-box text-secondary rounded-3">
                                    <div className="my-3 fs-5">
                                        <FiTruck />
                                    </div>
                                    <div className="info-content">
                                        <h6 className="fs-6 fw-bold">Product</h6>
                                        <p>dispatched</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="info-box text-secondary rounded-3">
                                    <div className="my-3 fs-5">
                                        <GoHome />
                                    </div>
                                    <div className="info-content">
                                        <h6 className="fs-6 fw-bold">Product</h6>
                                        <p>delivered</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="info-box text-secondary rounded-3">
                                    <div className="my-3 fs-5">
                                        <GoHome />
                                    </div>
                                    <div className="info-content">
                                        <h6 className="fs-6 fw-bold">Product</h6>
                                        <p>delivered</p>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default TrackOrder;
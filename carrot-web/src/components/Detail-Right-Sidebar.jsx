import { Button, Card, Container, Form, Row } from "react-bootstrap"
import { FaDribbble, FaInstagram, FaXTwitter } from "react-icons/fa6"
import { MdArrowCircleRight } from "react-icons/md"
import { RiFacebookLine, RiMessage3Line } from "react-icons/ri"

const DetailRightSidebar = () => {
    return (
        <>
            <Container>
                <div className="mt-5">
                    <Row>
                        <div data-aos="fade-up" data-aos-duration="2000" className="col-lg-9">
                            <div className="detailsidebar-img">
                                <img src="/public/blog-1.jpg" alt="" className="w-100" />
                            </div>
                            <div className="detailsidebar-contant mt-4">
                                <p className="text-success fw-bold">By Admin<span className="text-body-tertiary fw-semibold"> / 07 Comment / </span><code className="text-body-tertiary fw-semibold">Date - 09 ,09 ,2024</code></p>
                                <h2>Health Benefits of a Row food</h2>
                                <p className="text-body-tertiary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia nihil sunt reprehenderit natus, soluta officia iure enim<br />itaque. Iste qui exercitationem et odit beatae debitis ratione molestiae quis atque.
                                </p>
                                <p className="text-body-tertiary">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed doloribus dolor odio nobis eum voluptatem laudantium magni<br />veritatis sint! Aspernatur est quisquam modi laudantium. Assumenda neque vitae corrupti asperiores, quos vel aliquid hic nisi<br />nostrum repellendus dolorem placeat vero odit.
                                </p>
                            </div>
                            <Row>
                                <div className="col-lg-6">
                                    <img src="/public/blog-2.jpg" alt="" className="w-100" />
                                    <div className="detailsidebar-icon mt-3 d-flex">
                                        <MdArrowCircleRight />
                                        <div className="detailsidebar-contant">
                                            <p>Lorem ipsum dolor consectetur adipisicing elit.<br />Molestias, dolorum!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img src="/public/blog-3.jpg" alt="" className="w-100" />
                                    <div className="detailsidebar-icon mt-3 d-flex">
                                        <MdArrowCircleRight />
                                        <div className="detailsidebar-contant">
                                            <p>Lorem ipsum dolor consectetur adipisicing elit.<br />Molestias, dolorum!</p>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                            <div className="border p-4 detailsidebar-card position-relative">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellat earum architecto odit soluta quas odio distinctio quae numquam? Quaerat nulla blanditiis possimus quae. Iusto doloribus, est aliquam delectus pariatur voluptatem cum iste exercitationem rem.
                                </p>
                                <h4 className="text-success fw-bold">John martin</h4>
                                <RiMessage3Line className="detailsidebar-svg" />
                            </div>
                            <p className="text-body-tertiary my-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia magni explicabo fuga molestiae architecto ipsa<br />excepturi laudantium molestias, assumenda vel fugiat hic exercitationem. Necessitatibus itaque et id! Ratione accusantium<br />voluptatum optio rerum facilis expedita.
                            </p>
                            <div className="border p-4 d-flex justify-content-between align-items-center">
                                <div className="">
                                    <div className="buttons btn btn-outline-success text-secondary ">Cabbage</div>
                                    <div className="buttons btn btn-outline-success text-secondary  mx-2">Appetizer</div>
                                    <div className="buttons btn btn-outline-success text-secondary ">Meat Food</div>
                                </div>
                                <div className="detailsidebar-svg-icon">
                                    <RiFacebookLine />
                                    <FaXTwitter />
                                    <FaDribbble />
                                    <FaInstagram />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mt-4">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item"><a className="page-link text-secondary" href="javascript:void(0)">Previous</a></li>
                                        <li className="page-item"><a className="page-link text-secondary bg-success text-white" href="javascript:void(0)">1</a></li>
                                        <li className="page-item"><a className="page-link text-secondary" href="javascript:void(0)">2</a></li>
                                        <li className="page-item"><a className="page-link text-secondary" href="javascript:void(0)">3</a></li>
                                        <li className="page-item"><a className="page-link text-secondary" href="javascript:void(0)">Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000" className="col-lg-3 flex">
                            <Form className="d-flex my-3" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search here" aria-label="Search" />
                                <Button className="btn btn-success" type="submit">Search</Button>
                            </Form>
                            <h4 className="fs-5">Category</h4>
                            <div className="headering">
                                <ul>
                                    <li>
                                        Milks & Dairies
                                        <span>(12)</span>
                                    </li>
                                    <li>
                                        Sea Food
                                        <span>(09)</span>
                                    </li>
                                    <li>
                                        Fresh Fruit
                                        <span>(65)</span>
                                    </li>
                                    <li>
                                        Pet Food
                                        <span>(45)</span>
                                    </li>
                                    <li>
                                        Meat Food
                                        <span>(34)</span>
                                    </li>
                                </ul>
                            </div>
                            <h4 className="fs-5">Recent Post</h4>
                            <div className="my-3">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="/public/NewsCarousel2.jpg" />
                                    <Card.Body className="text-center">
                                        <span className="text-success">Sep 09, 2024</span>
                                        <p className="fw-bold mb-0">10 Tasty Organic Fruit choose</p>
                                        <Card.Text className="text-secondary">
                                            Lorem ipsum dolor consectetur adipisicing elit.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <h4 className="fs-5">Latest Gallery</h4>
                            <div className="my-3 header-img">
                                <a href="javascript:void(0)"><img src="/public/1.jpg" alt="" /></a>
                                <a href="javascript:void(0)"><img src="/public/2.jpg" alt="" /></a>
                                <a href="javascript:void(0)"><img src="/public/3.jpg" alt="" /></a>
                                <a href="javascript:void(0)"><img src="/public/4.jpg" alt="" /></a>
                                <a href="javascript:void(0)"><img src="/public/5.jpg" alt="" /></a>
                                <a href="javascript:void(0)"><img src="/public/6.jpg" alt="" /></a>
                            </div>
                            <h4 className="fs-5">Popular Tags</h4>
                            <div className="vegetables mb-4 ms-3">
                                <Button>Vegetables</Button>
                                <Button>Juice</Button><br />
                                <Button>Meat Food</Button>
                                <Button>Cabbage</Button>
                                <Button>Organic Food</Button>
                                <Button>Juice</Button>
                            </div>
                        </div>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default DetailRightSidebar
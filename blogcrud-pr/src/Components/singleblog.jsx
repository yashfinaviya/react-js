import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useLocation, useNavigate } from "react-router";
import { getLocalData } from "../services/localData";
import { useEffect, useState } from "react";
import { IoChevronBackCircle } from "react-icons/io5";



const Singleblog = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const blogId = location.state?.blogId;
        if (blogId) {
            const blogs = getLocalData();
            const foundBlog = blogs.find((b) => b.id === blogId);
            setBlog(foundBlog);
        }
    }, [location.state]);

    if (!blog) {
        return (
            <Container className="text-center my-5">
                <h3>Blog Not Found</h3>
                <p>The requested blog could not be found. It might have been deleted or does not exist.</p>
                <Button variant="primary" onClick={() => navigate(-1)}>
                    <IoChevronBackCircle />
                </Button>
            </Container>
        );
    }
    return (
        <>
            <Container className='d-flex flex-wrap mt-2 cardhome'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={blog.img} className='cardimg' />
                    <hr />
                    <Card.Body>
                        <div className='d-flex justify-content-between mt-0'>
                            <Button className='category fw-bolder'>{blog.category}</Button>
                            <Card.Text className='text-black-50'>{blog.date}</Card.Text>
                        </div>
                        <Card.Title className='mt-3'>{blog.title}</Card.Title>
                        <Card.Text className='desc'>
                            {blog.desc}
                        </Card.Text>
                        <div className='d-flex mt-2 '>
                            <Card.Img className='authorimg me-1' src={blog.authorimg} ></Card.Img>
                            <Card.Text className='fw-bold text-black-50 authorname'>{blog.authorname}~~</Card.Text>
                        </div>
                        <Button variant="secondary" className='mt-4 ms-5 mb-0' onClick={() => navigate(-1)}>
                            Go Back
                        </Button>
                    </Card.Body>
                </Card>
            </Container >
        </>
    )
}

export default Singleblog;
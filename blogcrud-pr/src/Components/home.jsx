import React, { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { getLocalData, setLocalData } from "../services/localData";
import { useNavigate } from "react-router";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import './blog.css'

function Home() {
    let navigate = useNavigate();

    let [blog, setBlogs] = useState(getLocalData());

    const handelEdit = (id) => {
        navigate(`edit/${id}`);
    }

    const handelView = (id) => {
        navigate(`view/${id}`, { state: { blogId: id } });
    }

    const handelDelete = (id) => {
        let oldRecords = getLocalData();
        let updateData = oldRecords.filter((blog) => blog.id != id);
        setBlogs(updateData);
        setLocalData(updateData);
    }

    return (
        <>
            <Container className='d-flex flex-wrap mt-2'>
                {blog.map((blog) => (
                    <Card style={{ width: '20rem' }} key={blog.id} >
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
                            <div className='mt-4 ms-3'>
                                <Button onClick={() => handelView(blog.id)} variant="info" className='me-4'>
                                    <FaEye />
                                </Button>
                                <Button onClick={() => handelEdit(blog.id)} variant="warning" className='me-4'>
                                    <FaEdit />
                                </Button>{"  "}
                                <Button onClick={() => handelDelete(blog.id)} variant="danger">
                                    <FaTrash />
                                </Button>
                            </div>

                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </>
    )
}

export default Home;
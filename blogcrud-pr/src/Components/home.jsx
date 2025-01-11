import React, { useState } from 'react';
import { Button, Card, Container, Form, Dropdown } from 'react-bootstrap';
import { getLocalData, setLocalData } from "../services/localData";
import { useNavigate } from "react-router";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import './blog.css';

function Home() {
    let navigate = useNavigate();

    const [blog, setBlogs] = useState(getLocalData());
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('title');
    const [sortOrder, setSortOrder] = useState('asc');

    // Handle Edit
    const handelEdit = (id) => {
        navigate(`edit/${id}`);
    }

    // Handle View
    const handelView = (id) => {
        navigate(`view/${id}`, { state: { blogId: id } });
    }

    // Handle Delete
    const handelDelete = (id) => {
        let oldRecords = getLocalData();
        let updateData = oldRecords.filter((blog) => blog.id !== id);
        setBlogs(updateData);
        setLocalData(updateData);
    }

    const filteredBlogs = blog.filter((item) => {
        const valueToCheck = item[filterCategory].toLowerCase();
        return valueToCheck.includes(searchTerm.toLowerCase());
    });

    const sortedBlogs = filteredBlogs.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a[filterCategory].toLowerCase() > b[filterCategory].toLowerCase() ? 1 : -1;
        } else {
            return a[filterCategory].toLowerCase() < b[filterCategory].toLowerCase() ? 1 : -1;
        }
    });

    return (
        <>
            <Container className='d-flex flex-column mt-3 cardhome'>
                <div className='d-flex justify-content-between mb-3'>
                    <Form.Control
                        type="text"
                        placeholder={`Search by ${filterCategory}`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Filter by {filterCategory}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setFilterCategory('title')}>Title</Dropdown.Item>
                            <Dropdown.Item onClick={() => setFilterCategory('authorname')}>Author</Dropdown.Item>
                            <Dropdown.Item onClick={() => setFilterCategory('date')}>Date</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-sort">
                            Sort by {filterCategory} ({sortOrder === 'asc' ? 'Ascending' : 'Descending'})
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setSortOrder('asc')}>Ascending</Dropdown.Item>
                            <Dropdown.Item onClick={() => setSortOrder('desc')}>Descending</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <Container className='d-flex flex-wrap mt-2'>
                    {sortedBlogs.map((blog) => (
                        <Card style={{ width: '18rem' }} key={blog.id}>
                            <Card.Img variant="top" src={blog.img} className='cardimg' />
                            <hr />
                            <Card.Body>
                                <div className='d-flex justify-content-between mt-0'>
                                    <Button className='category fw-bolder'>{blog.category}</Button>
                                    <Card.Text className='text-black-50'>{blog.date}</Card.Text>
                                </div>
                                <Card.Title className='mt-3'>{blog.title}</Card.Title>
                                <Card.Text className='desc'>{blog.desc}</Card.Text>
                                <div className='d-flex mt-2'>
                                    <Card.Img className='authorimg me-1' src={blog.authorimg}></Card.Img>
                                    <Card.Text className='fw-bold text-black-50 authorname'>{blog.authorname}~~</Card.Text>
                                </div>
                                <div className='mt-4 ms-3'>
                                    <Button onClick={() => handelView(blog.id)} className='me-4 eye'>
                                        <FaEye className='eyebtn' />
                                    </Button>
                                    <Button onClick={() => handelEdit(blog.id)} className='me-4 edit'>
                                        <FaEdit className='editbtn' />
                                    </Button>
                                    <Button onClick={() => handelDelete(blog.id)} className='delete'>
                                        <FaTrash className='deletebtn' />
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </Container>
            </Container>
        </>
    )
}

export default Home;

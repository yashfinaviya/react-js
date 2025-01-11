import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import generateUniqueID from "generate-unique-id";
import { getLocalData, setLocalData } from "../services/localData";
import { useNavigate } from 'react-router';


function Blog() {
    const navigate = useNavigate();
    const initialState = {
        id: "",
        img: "",
        category: "",
        date: "",
        title: "",
        desc: "",
        authorimg: "",
        authorname: "",
    }
    const [inputForm, setInputForm] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [showError, setShowError] = useState(false);

    console.log(inputForm);
    const validateForm = () => {
        const newErrors = {};
        setShowError(false);

        if (!inputForm.img) newErrors.img = "Image Url is required.";
        if (!inputForm.category) newErrors.category = "Category is required.";
        if (!inputForm.date) newErrors.date = "Date is required.";
        if (!inputForm.title) newErrors.title = "Title is required.";
        if (!inputForm.desc) newErrors.desc = "Blog Description is required.";
        if (!inputForm.authorimg) newErrors.authorimg = "Author Image is required.";
        if (!inputForm.authorname) newErrors.authorname = "Author Name is required.";
        else if (new Date(inputForm.date) > new Date()) {
            newErrors.date = "Blog date cannot br in future.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setShowError(true);
            return false;
        }

        return true;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        let getData = getLocalData();
        let id = generateUniqueID({
            length: 6,
            useLetters: false,
        })
        getData.push({ ...inputForm, id });
        setLocalData(getData);
        navigate("/");
        console.log('Form Submit...');
        console.log(getData);

    }

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        })
    }


    return (
        <>
            <Container>
                <h2 className='text-center mt-5'>
                    Add Your Blog Detail..
                </h2>
                <Form className='p-5' onSubmit={handleSubmit}>


                    {/* Img Url */}

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" className='fw-bolder'>
                            Img :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="link"
                                name="img"
                                value={inputForm.img}
                                onChange={handleChanged}
                                isInvalid={!!errors.img}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.img}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>


                    {/* Category */}

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" className='fw-bolder'>
                            Category:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                name="category"
                                value={inputForm.category}
                                onChange={handleChanged}
                                isInvalid={!!errors.category}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.category}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>


                    {/* Date  */}

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" className='fw-bolder'>
                            Date:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="date"
                                name="date"
                                value={inputForm.date}
                                onChange={handleChanged}
                                isInvalid={!!errors.date}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.date}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>

                    {/* Title */}

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" className='fw-bolder'>
                            Title:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                name="title"
                                value={inputForm.title}
                                onChange={handleChanged}
                                isInvalid={!!errors.title}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.title}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>


                    {/* Description */}

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" className='fw-bolder'>
                            Description :                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                name="desc"
                                value={inputForm.desc}
                                onChange={handleChanged}
                                isInvalid={!!errors.desc}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.desc}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>


                    {/* Author Img */}

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" className='fw-bolder'>
                            Author Img :
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="link"
                                name="authorimg"
                                value={inputForm.authorimg}
                                onChange={handleChanged}
                                isInvalid={!!errors.authorimg}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.authorimg}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>


                    {/* Author Name */}

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" className='fw-bolder'>
                            Author Name:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                name="authorname"
                                value={inputForm.authorname}
                                onChange={handleChanged}
                                isInvalid={!!errors.authorname}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.authorname}
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>


                    {/* Add Blog */}

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="6"></Form.Label>
                        <Col sm="5">
                            <Button type="submit" className='mt-3 addblog'>
                                Add Blog
                            </Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export default Blog;
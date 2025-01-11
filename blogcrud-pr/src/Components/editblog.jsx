import { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { getLocalData, setLocalData } from '../services/localData';
import { useNavigate, useParams } from "react-router";
import './blog.css'


const Editblog = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const initialState = {
        id: "",
        img: "",
        title: "",
        desc: "",
        name: "",
        type: "",
        date: "",
    }

    const [inputForm, setInputForm] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [showError, setShowError] = useState(false);

    const handleChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        })
    }

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
        let updateData = getData.map((blog) => {
            if (blog.id == inputForm.id) {
                return inputForm
            } else {
                return blog;
            }
        })
        setLocalData(updateData);
        navigate("/");
    };

    useEffect(() => {
        let data = getLocalData();
        let singleRecord = data.find((blog) => blog.id == id);
        setInputForm(singleRecord);
    }, [])

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
                                {errors.authorname }
                            </Form.Control.Feedback>
                        </Col>
                    </Form.Group>


                    {/* Update Blog */}

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="5"></Form.Label>
                        <Col sm="5">
                            <Button type="submit">Update Blog</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>
        </>
    )
}

export default Editblog;
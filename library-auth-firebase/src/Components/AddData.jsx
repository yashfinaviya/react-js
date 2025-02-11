import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addBookAsync, addNewBook } from "../services/actions/library.action";
import generateUniqueId from "generate-unique-id";
import { useNavigate } from "react-router";
import './library.css'

function AddData() {
    const { error, isCreated } = useSelector(state => state.bookReducer)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector(state => state.authReducer);
    const [bookInput, setBookInput] = useState({
        img: "",
        title: "",
        author: "",
        edition: "",
        publication: "",
        date: "",
    });

    const [errors, setErrors] = useState({});
    const [showError, setShowError] = useState(false);

    const handelChanged = (e) => {
        const { name, value } = e.target;
        setBookInput({
            ...bookInput,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};

        setShowError(false);

        if (!bookInput.img) newErrors.img = "Image Url is required.";
        if (!bookInput.title) newErrors.title = "Title is required.";
        if (!bookInput.author) newErrors.desc = "author is required.";
        if (!bookInput.edition) newErrors.name = "edition is required.";
        if (!bookInput.publication) newErrors.type = "publication is required.";
        if (!bookInput.date) newErrors.date = "Date is required.";
        else if (new Date(bookInput.date) > new Date()) {
            newErrors.date = "Date cannot be in future.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setShowError(true);
            return false;
        }

        return true;
    };

    const handelSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        let id = generateUniqueId({
            length: 5,
            useLetters: false,
        });
        dispatch(addBookAsync({ ...bookInput, id: id.toString() }));
    };

    useEffect(() => {
        if (isCreated) {
            navigate("/")
        }
    }, [isCreated])

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);
    return (
        <>
            <Container>
                {!user ? "" : error ? <p>{error}</p> : ""}
                <Form onSubmit={handelSubmit} className="addform">
                    <div className="add"></div>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Book img:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                placeholder="Enter Book img Url"
                                name="img"
                                value={bookInput.img}
                                onChange={handelChanged}
                                isInvalid={!!errors.img}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Book Title:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                placeholder="Enter Book Title"
                                name="title"
                                value={bookInput.title}
                                onChange={handelChanged}
                                isInvalid={!!errors.title}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Book Author:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                placeholder="Enter Book Author"
                                name="author"
                                value={bookInput.author}
                                onChange={handelChanged}
                                isInvalid={!!errors.author}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Book Edition:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="number"
                                placeholder="Enter Book Edition(Number)"
                                name="edition"
                                value={bookInput.edition}
                                onChange={handelChanged}
                                isInvalid={!!errors.edition}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Book Publication:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                placeholder="Enter Book Publication"
                                name="publication"
                                value={bookInput.publication}
                                onChange={handelChanged}
                                isInvalid={!!errors.publication}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                            Book Add date:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="date"
                                placeholder="Enter Book Add Date"
                                name="date"
                                value={bookInput.date}
                                onChange={handelChanged}
                                isInvalid={!!errors.date}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2"></Form.Label>
                        <Col sm="10">
                            <Button type="submit" className="squishy squishy-cosmic">Add Book</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Container>

        </>
    );
}

export default AddData;
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addBookAsync } from "../services/actions/library.action";
import generateUniqueId from "generate-unique-id";
import { useNavigate } from "react-router";
import './library.css';

function AddData() {
    const { error, isCreated } = useSelector(state => state.bookReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [bookInput, setBookInput] = useState({
        img: "",
        title: "",
        author: "",
        edition: "",
        publication: "",
        date: "",
    });
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookInput({
            ...bookInput,
            [name]: value,
        });
        setFormErrors({ ...formErrors, [name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(bookInput);
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            let id = generateUniqueId({
                length: 5,
                useLetters: false,
            });
            dispatch(addBookAsync({ ...bookInput, id: id.toString() }));
        }
    };

    const validateForm = (values) => {
        let errors = {};

        if (!values.img) {
            errors.img = "Book Image URL is required";
        } else if (!isValidURL(values.img)) {
            errors.img = "Invalid image URL";
        }

        if (!values.title) {
            errors.title = "Book Title is required";
        }

        if (!values.author) {
            errors.author = "Book Author is required";
        }

        if (!values.edition) {
            errors.edition = "Book Edition is required";
        } else if (isNaN(values.edition) || parseInt(values.edition) <= 0) {
            errors.edition = "Invalid edition number";
        }

        if (!values.publication) {
            errors.publication = "Book Publication is required";
        }

        if (!values.date) {
            errors.date = "Book Add Date is required";
        } else if (!isValidDate(values.date)) {
            errors.date = "Invalid date format";
        } else if (isFutureDate(values.date)) {
            errors.date = "Date cannot be in the future";
        }

        return errors;
    };

    const isFutureDate = (dateString) => {
        const inputDate = new Date(dateString);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); 
        return inputDate > currentDate;
    };


    const isValidURL = (string) => {
        let url;
        try {
            url = new URL(string);
        } catch (_) {
            return false;
        }
        return url.protocol === "http:" || url.protocol === "https:";
    };

    const isValidDate = (dateString) => {
        const date = new Date(dateString);
        return !isNaN(date);
    };

    useEffect(() => {
        if (isCreated) {
            navigate("/");
        }
    }, [isCreated, navigate]);

    return (
        <Container>
            {error ? <p className="error-message">{error}</p> : ""}
            <Form onSubmit={handleSubmit} className="mt-5">
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Book img:</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            placeholder="Enter Book img Url"
                            name="img"
                            value={bookInput.img}
                            onChange={handleChange}
                            isInvalid={!!formErrors.img}
                        />
                        <Form.Control.Feedback type="invalid" className="text-white bg-danger w-25 ms-5">
                            {formErrors.img}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Book Title:</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            placeholder="Enter Book Title"
                            name="title"
                            value={bookInput.title}
                            onChange={handleChange}
                            isInvalid={!!formErrors.title}
                        />
                        <Form.Control.Feedback type="invalid" className="text-white bg-danger w-25 ms-5">
                            {formErrors.title}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Book Author:</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            placeholder="Enter Book Author"
                            name="author"
                            value={bookInput.author}
                            onChange={handleChange}
                            isInvalid={!!formErrors.author}
                        />
                        <Form.Control.Feedback type="invalid" className="text-white bg-danger w-25 ms-5">
                            {formErrors.author}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Book Edition:</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="number"
                            placeholder="Enter Book Edition(Number)"
                            name="edition"
                            value={bookInput.edition}
                            onChange={handleChange}
                            isInvalid={!!formErrors.edition}
                        />
                        <Form.Control.Feedback type="invalid" className="text-white bg-danger w-25 ms-5">
                            {formErrors.edition}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Book Publication:</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="text"
                            placeholder="Enter Book Publication"
                            name="publication"
                            value={bookInput.publication}
                            onChange={handleChange}
                            isInvalid={!!formErrors.publication}
                        />
                        <Form.Control.Feedback type="invalid" className="text-white bg-danger w-25 ms-5">
                            {formErrors.publication}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="2">Book Add date:</Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="date"
                            placeholder="Enter Book Add Date"
                            name="date"
                            value={bookInput.date}
                            onChange={handleChange}
                            isInvalid={!!formErrors.date}
                        />
                        <Form.Control.Feedback type="invalid" className="text-white bg-danger w-25 ms-5">
                            {formErrors.date}
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit" className="bttn bttn-1">Add Book</Button>
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    )
};


export default AddData;
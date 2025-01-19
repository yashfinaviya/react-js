import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote } from "../Services/Actions/note.actions";
import "./note.css";
import generateUniqueId from "generate-unique-id";

function AddNote() {
    const { notes } = useSelector((state) => state.noteReducer);
    const dispatch = useDispatch();

    const initialState = {
        id: "",
        title: "",
        description: "",
        date: "",
        priority: "",
    };

    const [noteInput, setNoteInput] = useState(initialState);
    const [isEditing, setIsEditing] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [priorityFilter, setPriorityFilter] = useState("");
    const [validationErrors, setValidationErrors] = useState({});

    const handelChanged = (e) => {
        const { name, value } = e.target;
        setNoteInput({
            ...noteInput,
            [name]: value,
        });
        setValidationErrors({
            ...validationErrors,
            [name]: "",
        });
    };

    const validateForm = () => {
        const errors = {};
        if (!noteInput.title.trim()) errors.title = "Title is required.";
        if (!noteInput.description.trim()) errors.description = "Description is required.";
        if (!noteInput.date) errors.date = "Date is required.";
        else if (new Date(noteInput.date) > new Date()) {
            errors.date = "Date Can not Used by Future"
        }
        if (!noteInput.priority) errors.priority = "Priority is required.";
        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };


    const handelSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        if (isEditing) {
            dispatch({
                type: "EDIT_NOTE",
                payload: noteInput,
            });
            setIsEditing(false);
        } else {
            const id = generateUniqueId({
                length: 5,
                useLetters: false,
            });
            dispatch(addNote({ ...noteInput, id }));
        }
        setNoteInput(initialState);
    };

    const handleEdit = (id) => {
        const noteToEdit = notes.find((note) => note.id === id);
        setNoteInput(noteToEdit);
        setIsEditing(true);
    };

    const handleDelete = (id) => {
        dispatch(deleteNote(id));
    };

    const handleResetFilters = () => {
        setSearchQuery("");
        setPriorityFilter("");
    };

    const filteredNotes = notes
        .filter((note) =>
            note.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter((note) =>
            priorityFilter ? note.priority === priorityFilter : true
        );

    return (
        <Container>
            <Row className="mt-3 ms-5">
                <Col sm="6">
                    <input
                        type="text"
                        placeholder="Search by title"
                        className="form-control"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </Col>
                <Col sm="6">
                    <Form.Select className="filter"
                        value={priorityFilter}
                        onChange={(e) => setPriorityFilter(e.target.value)}>
                        <option value="">Filter by Priority</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </Form.Select>
                </Col>
            </Row>
            {(searchQuery || priorityFilter) && (
                <Row className="mt-3">
                    <Col className="text-center">
                        <Button variant="secondary" className="back" onClick={handleResetFilters}>
                            Back
                        </Button>
                    </Col>
                </Row>
            )}
            <Col>
                <form onSubmit={handelSubmit} className="form text-center mt-3">
                    <Form.Group as={Row} className="mb-3">
                        <Col sm="12">
                            <input
                                type="text"
                                placeholder="Title"
                                name="title"
                                value={noteInput.title}
                                onChange={handelChanged}
                            />
                            {validationErrors.title && (
                                <p className="text-danger">{validationErrors.title}</p>
                            )}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm="12">
                            <input
                                type="text"
                                placeholder="Description"
                                name="description"
                                value={noteInput.description}
                                onChange={handelChanged}
                            />
                            {validationErrors.description && (
                                <p className="text-danger">{validationErrors.description}</p>
                            )}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 date">
                        <Col sm="12">
                            <input
                                type="date"
                                placeholder="Date"
                                name="date"
                                value={noteInput.date}
                                onChange={handelChanged}
                            />
                            {validationErrors.date && (
                                <p className="text-danger">{validationErrors.date}</p>
                            )}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 priority">
                        <Col sm="12">
                            <Form.Select
                                name="priority"
                                value={noteInput.priority}
                                onChange={handelChanged}
                            >
                                <option>Priority..</option>
                                <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </Form.Select>
                            {validationErrors.priority && (
                                <p className="text-danger">{validationErrors.priority}</p>
                            )}
                        </Col>
                        <Col sm="12">
                            <button type="submit" className="plusicon">
                                {isEditing ? <FaEdit /> : <FaPlus />}
                            </button>
                        </Col>
                    </Form.Group>
                </form>

                <Row>
                    <Container className="d-flex flex-wrap mt-2">
                        {filteredNotes.length > 0 ? (
                            filteredNotes.map((note) => (
                                <Card style={{ width: "18rem" }} key={note.id} className="me-2 mb-3 flex-wrap">
                                    <Card.Body>
                                        <Card.Text className="fw-bolder text-warning-emphasis my-2">
                                            Title: <span className="text-secondary">{note.title}</span>
                                        </Card.Text>
                                        <Card.Text className="fw-bolder text-warning-emphasis my-2">
                                            Description: <span className="text-secondary">{note.description}</span>
                                        </Card.Text>
                                        <Card.Text className="fw-bolder text-warning-emphasis my-2">
                                            Date: <span className="text-secondary">{note.date}</span>
                                        </Card.Text>
                                        <Card.Text className="fw-bolder text-warning-emphasis">
                                            Priority: <span className="text-secondary">{note.priority}</span>
                                        </Card.Text>
                                        <div className="mt-4 ms-3 text-center">
                                            <Button
                                                onClick={() => handleEdit(note.id)}
                                                className="me-4 edit-btn"
                                                aria-label="Edit Note"
                                            >
                                                <FaEdit className="icon" />
                                            </Button>
                                            <Button
                                                onClick={() => handleDelete(note.id)}
                                                className="delete-btn"
                                                aria-label="Delete Note"
                                            >
                                                <FaTrash className="icon" />
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))
                        ) : (
                            <p className="text-center">
                                No notes available. Add a note to get started!
                            </p>
                        )}
                    </Container>
                </Row>
            </Col>
        </Container>
    );
}

export default AddNote;

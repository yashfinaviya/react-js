import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBookAsync, getAllBooksAsync } from "../services/actions/library.action";
import { Button, Card, Container, Form, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./library.css";

function Home() {
  const { books, isLoading } = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getAllBooksAsync());
  }, [dispatch]);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    dispatch(deleteBookAsync(id));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Container className="mt-3">
        <Form.Control
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-3"
        />
      </Container>
      {isLoading ? (
        <h2>Loading....</h2>
      ) : filteredBooks.length === 0 ? (
        <h4 className="bg-white mt-5 p-5 text-danger">Data Not Found</h4>
      ) : (
        <Container className="d-flex flex-wrap mt-2">
          {filteredBooks.map((book) => (
            <Col xl={4} key={book.id}>
              <Card className="card" style={{ width: "300px", marginTop: "10px" }}>
                <Card.Img
                  variant="top"
                  src={book.img}
                  className="img"
                  style={{ width: "100%", height: "270px", objectFit: "cover" }}
                />
                <Card.Body className="body">
                  <Card.Title>
                    <h5 className="title text-white fw-bolder">
                      Title: <span className="text-secondary fs-4 fw-normal">{book.title}</span>
                    </h5>
                  </Card.Title>
                  <Card.Text>
                    <h5 className="desc text-white fw-bolder">
                      Author: <span className="text-secondary fs-4 fw-normal">{book.author}</span>
                    </h5>
                    <h5 className="edition text-white fw-bolder">
                      Edition: <span className="text-secondary fs-4 fw-normal">{book.edition}</span>
                    </h5>
                    <h5 className="publication text-white fw-bolder">
                      Publication: <span className="text-secondary fs-4 fw-normal">{book.publication}</span>
                    </h5>
                    <h5 className="date text-white fw-bolder">
                      Date: <span className="text-secondary fs-4 fw-normal">{book.date}</span>
                    </h5>
                  </Card.Text>
                  <Button className="edit me-3" onClick={() => handleEdit(book.id)} variant="warning">
                    <FaEdit className="editbtn" />
                  </Button>{" "}
                  <Button className="delete" onClick={() => handleDelete(book.id)} variant="danger">
                    <FaTrash className="deletebtn" />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Container>
      )}
    </div>
  );
}

export default Home;

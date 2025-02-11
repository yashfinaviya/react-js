import './library.css';

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBookAsync, getAllBooksAsync } from "../services/actions/library.action";
import { Button, Card, Container, Col, Form, Row, InputGroup } from 'react-bootstrap';
import { useNavigate } from "react-router";
import { FaArrowDown, FaArrowUp, FaEdit, FaEye, FaTrash, FaSearch } from "react-icons/fa";

import Login from "./Auth/login";

function Home() {
  const { user } = useSelector(state => state.authReducer);
  const { books, isLoading } = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: "", order: "asc" });

  useEffect(() => {
    dispatch(getAllBooksAsync());
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Filter books based on the search query
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.publication.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sorting Function
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    if (!sortConfig.key) return 0;

    let valA = a[sortConfig.key].toLowerCase();
    let valB = b[sortConfig.key].toLowerCase();

    if (valA < valB) return sortConfig.order === "asc" ? -1 : 1;
    if (valA > valB) return sortConfig.order === "asc" ? 1 : -1;
    return 0;
  });

  // Handle Sort Click
  const handleSort = (key) => {
    setSortConfig(prevConfig => ({
      key,
      order: prevConfig.key === key && prevConfig.order === "asc" ? "desc" : "asc"
    }));
  };

  return (
    <div>
      {!user ? <Login /> :
        isLoading ? <h2 className="text-center mt-5">Loading....</h2> : sortedBooks.length === 0 ? (
          <h4 className="text-center text-danger mt-5">No Books Found</h4>
        ) : (
          <Container className='mt-3'>
            {/* Search Bar and Sorting */}
            <Row className="mb-4 d-flex justify-content-between align-items-center">
              <Col md={6} className="mb-2">
                <InputGroup>
                  <InputGroup.Text>
                    <FaSearch />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search by Title, Author, Publication..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-pill"
                  />
                </InputGroup>
              </Col>

              <Col md={6} className="text-end">
                {["title", "author", "publication", "date"].map((key) => (
                  <Button
                    key={key}
                    variant="outline-primary"
                    onClick={() => handleSort(key)}
                    className="mx-1 rounded-pill shadow-sm"
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                    {sortConfig.key === key ? (
                      sortConfig.order === "asc" ? <FaArrowUp /> : <FaArrowDown />
                    ) : null}
                  </Button>
                ))}
              </Col>
            </Row>

            {/* Book Cards */}
            <Row>
              {sortedBooks.map((book) => (
                <Col xl={4} lg={6} md={6} sm={12} key={book.id}>
                  <Card className="shadow-lg p-3 mb-4 rounded">
                    <Card.Img
                      variant="top"
                      src={book.img}
                      className="rounded"
                      style={{
                        height: "250px",
                        objectFit: "cover"
                      }}
                    />
                    <Card.Body>
                      <Card.Title className="text-success">{book.title}</Card.Title>
                      <Card.Text className="text-muted">
                        <strong></strong> {book.author} <br />
                        <strong></strong> {book.edition} <br />
                        <strong></strong> {book.publication}<br/>
                        <strong></strong> {book.date}
                      </Card.Text>

                      <div className="d-flex justify-content-between">
                        <Button
                          className="view"
                          onClick={() => navigate(`/view/${book.id}`)}
                          variant="info"
                          style={{ transition: "0.3s" }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = "#0dcaf0"}
                          onMouseLeave={(e) => e.target.style.backgroundColor = "#17a2b8"}
                        >
                          <FaEye /> View
                        </Button>

                        <Button
                          className="edit"
                          onClick={() => navigate(`/edit/${book.id}`)}
                          variant="warning"
                          style={{ transition: "0.3s" }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = "#ffcc00"}
                          onMouseLeave={(e) => e.target.style.backgroundColor = "#ffc107"}
                        >
                          <FaEdit /> Edit
                        </Button>

                        <Button
                          className="delete"
                          onClick={() => dispatch(deleteBookAsync(book.id))}
                          variant="danger"
                          style={{ transition: "0.3s" }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = "#d9534f"}
                          onMouseLeave={(e) => e.target.style.backgroundColor = "#dc3545"}
                        >
                          <FaTrash /> Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        )}
    </div>
  );
}

export default Home;

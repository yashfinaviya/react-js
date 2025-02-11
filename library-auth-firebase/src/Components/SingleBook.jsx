import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from '../config/firebaseConfig';
import { doc, getDoc } from "firebase/firestore";
import { Card, Button, Container, Spinner } from "react-bootstrap";

function SingleBook() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const bookRef = doc(db, "books", id);
                const bookSnap = await getDoc(bookRef);

                if (bookSnap.exists()) {
                    setBook({ id: bookSnap.id, ...bookSnap.data() });
                } else {
                    setError("Book not found.");
                }
            } catch (err) {
                setError("Error fetching book details.");
                console.error("Error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [id]);

    if (loading) {
        return (
            <Container className="text-center mt-5">
                <Spinner animation="border" />
                <p>Loading...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="text-center mt-5">
                <h4 className="text-danger">{error}</h4>
                <Button onClick={() => navigate("/")} variant="primary">Back to Home</Button>
            </Container>
        );
    }

    return (
        <Container className="d-flex justify-content-center align-items-center mt-5">
            <Card className="shadow-lg p-4 text-center" style={{ width: "400px", borderRadius: "15px" }}>
                <Card.Img
                    variant="top"
                    src={book.img}
                    style={{
                        height: "250px",
                        width: "100%",
                        objectFit: "cover",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
                    }}
                />
                <Card.Body>
                    <Card.Title className="text-success" style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                        {book.title}
                    </Card.Title>
                    <Card.Text style={{ fontSize: "1rem", color: "#555" }}>
                        <strong className="text-primary"></strong> {book.author} <br />
                        <strong className="text-primary"></strong> {book.edition} <br />
                        <strong className="text-primary"></strong> {book.publication} <br />
                        <strong className="text-primary"></strong> {book.date}
                    </Card.Text>
                    <Button
                        variant="secondary"
                        onClick={() => navigate("/")}
                        style={{
                            backgroundColor: "#007bff",
                            border: "none",
                            borderRadius: "8px",
                            padding: "10px 20px",
                            fontSize: "1rem",
                            transition: "0.3s"
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = "#0056b3"}
                        onMouseLeave={(e) => e.target.style.backgroundColor = "#007bff"}
                    >
                        Back to Home
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default SingleBook;

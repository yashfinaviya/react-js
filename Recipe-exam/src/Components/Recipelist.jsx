import './Recipe.css';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRecipeAsync, getAllRecipeAsync } from "../services/actions/Recipe.action";
import { Button, Card, Container, Col, Form, Row, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { useNavigate } from "react-router";
import { FaSearch, FaEye, FaEdit, FaTrash } from "react-icons/fa";

import Login from "./Auth/login";

function Home() {
  const { user } = useSelector(state => state.authReducer);
  const { recipes, isLoading } = useSelector((state) => state.recipeReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterField, setFilterField] = useState("title");  // Default filter field is 'title'

  useEffect(() => {
    dispatch(getAllRecipeAsync());
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const filteredRecipes = recipes.filter(recipe => {
    const fieldValue = recipe[filterField];
    return fieldValue && typeof fieldValue === 'string' && fieldValue.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      {!user ? <Login /> :
        isLoading ? <h2 className="text-center mt-5">Loading....</h2> : filteredRecipes.length === 0 ? (
          <h4 className="text-center text-danger mt-5">No Recipes Found</h4>
        ) : (
          <Container className='mt-3'>
            {/* Search Bar and Dropdown for Filtering */}
            <Row className="mb-4 d-flex justify-content-between align-items-center">
              <Col md={6} className="mb-2">
                <InputGroup>
                  <InputGroup.Text className='me-2 border-radius-50'>
                    <FaSearch />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder={`Search by ${filterField.charAt(0).toUpperCase() + filterField.slice(1)}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="rounded-pill shadow-sm"
                  />
                </InputGroup>
              </Col>
              <Col md={4} className="mb-2">
                <DropdownButton
                  variant="outline-primary"
                  title={`Filter by ${filterField.charAt(0).toUpperCase() + filterField.slice(1)}`}
                  id="filter-dropdown"
                  className="rounded-pill w-100 shadow-sm"
                  onSelect={(eventKey) => setFilterField(eventKey)} // Update the selected filter field
                >
                  <Dropdown.Item eventKey="title">Title</Dropdown.Item>
                  <Dropdown.Item eventKey="categories">Categories</Dropdown.Item>
                  <Dropdown.Item eventKey="ingredients">Ingredients</Dropdown.Item>
                  <Dropdown.Item eventKey="instructions">Instructions</Dropdown.Item>
                  <Dropdown.Item eventKey="date">Date</Dropdown.Item>
                </DropdownButton>
              </Col>


            </Row>

            {/* Recipe Cards */}
            <Row>
              {filteredRecipes.map((recipe) => (
                <Col xl={4} lg={6} md={6} sm={12} key={recipe.id}>
                  <Card className="shadow-lg p-3 mb-4 rounded card">
                    <Card.Img
                      variant="top"
                      src={recipe.img}
                      className="rounded"
                      style={{
                        height: "250px",
                        objectFit: "cover"
                      }}
                    />
                    <Card.Body>
                      <Card.Title className="text-success fs-4">{recipe.title}</Card.Title>
                      <Card.Text className="text-muted">
                        <strong></strong> <span className='bg-success p-1 my-2 text-white'>{recipe.categories}</span> <br />
                        <strong></strong> {recipe.instructions} <br />
                        <strong></strong> <span className='bg-success p-1 my-2 text-white'>{recipe.ingredients}</span><br />
                        <strong></strong> {recipe.date}
                      </Card.Text>

                      <div className="d-flex justify-content-between mt-3">
                        <Button
                          className="view rounded-pill"
                          onClick={() => navigate(`/view/${recipe.id}`)}
                          variant="info"
                          style={{ transition: "0.3s" }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = "#0dcaf0"}
                          onMouseLeave={(e) => e.target.style.backgroundColor = "#17a2b8"}
                        >
                          <FaEye /> View
                        </Button>

                        <Button
                          className="edit rounded-pill"
                          onClick={() => navigate(`/edit/${recipe.id}`)}
                          variant="warning"
                          style={{ transition: "0.3s" }}
                          onMouseEnter={(e) => e.target.style.backgroundColor = "#ffcc00"}
                          onMouseLeave={(e) => e.target.style.backgroundColor = "#ffc107"}
                        >
                          <FaEdit /> Edit
                        </Button>

                        <Button
                          className="delete rounded-pill"
                          onClick={() => dispatch(deleteRecipeAsync(recipe.id))}
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

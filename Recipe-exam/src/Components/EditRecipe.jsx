import './Recipe.css'
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { singleRecipe, singleRecipeAsync, updateRecipe, updateRecipeAsync } from "../services/actions/Recipe.action";
import { useNavigate, useParams } from "react-router";

function EditRecipe() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { recipe, isUpdated } = useSelector(state => state.recipeReducer)
  const [recipeInput, setRecipeInput] = useState({
    id: "",
    img: "",
    title: "",
    categories: "",
    instructions: "",
    ingredients: "",
    date: "",
  });

  const [errors, setErrors] = useState({});
  const [showError, setShowError] = useState(false);

  const handelChanged = (e) => {
    const { name, value } = e.target;
    setRecipeInput({
      ...recipeInput,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    setShowError(false);

    if (!recipeInput.img) newErrors.img = "image is required.";
    if (!recipeInput.title) newErrors.title = "Title is required.";
    if (!recipeInput.categories) newErrors.categories = "Image Url is required.";
    if (!recipeInput.instructions) newErrors.instructions = "instructions is required.";
    if (!recipeInput.ingredients) newErrors.ingredients = "ingredients is required.";
    if (!recipeInput.date) newErrors.date = "date is required.";
    else if (new Date(recipeInput.date) > new Date()) {
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

    dispatch(updateRecipeAsync(recipeInput));
  };

  useEffect(() => {
    dispatch(singleRecipeAsync(id));
  }, [])
  useEffect(() => {
    if (recipe)
      setRecipeInput(recipe);
  }, [recipe])

  useEffect(() => {
    if (isUpdated) {
      navigate("/");
    }
  }, [isUpdated])
  return (
    <>
      <Container>
        <Form onSubmit={handelSubmit} className="addform">
        <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">
                          Recipe img:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                placeholder="Enter Recipe img Url"
                                name="img"
                                value={recipeInput.img}
                                onChange={handelChanged}
                                isInvalid={!!errors.img}
                            />
                        </Col>
                    </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Title
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Recipe categories Url"
                name="title"
                value={recipeInput.title}
                onChange={handelChanged}
                isInvalid={!!errors.title}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Categories (Separated by Commas)
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Recipe Categories"
                name="Categories"
                value={recipeInput.categories}
                onChange={handelChanged}
                isInvalid={!!errors.categories}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Instructions
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Recipe categories"
                name="instructions"
                value={recipeInput.instructions}
                onChange={handelChanged}
                isInvalid={!!errors.instructions}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Ingredients (Separated by Commas)
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                placeholder="Enter Recipe ingredients"
                name="ingredients"
                value={recipeInput.ingredients}
                onChange={handelChanged}
                isInvalid={!!errors.ingredients}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Recipe Add date:
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="date"
                placeholder="Enter Recipe Add Date"
                name="date"
                value={recipeInput.date}
                onChange={handelChanged}
                isInvalid={!!errors.date}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2"></Form.Label>
            <Col sm="10">
              <Button type="submit" className="squishy squishy-cosmic">Update Recipe</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default EditRecipe;
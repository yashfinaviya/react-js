import { useEffect, useState } from "react";
import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { addProductAsync } from "../services/action/Product.action";
import generateUniqueId from "generate-unique-id";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import './redux.css'

const AddProduct = () => {
  const dispatch = useDispatch();
  const { isCreated } = useSelector((state) => state.productReducer);
  const navigate = useNavigate();
  const [inputForm, setInputForm] = useState({
    image: "",
    title: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = generateUniqueId({
      length: 5,
      useLetters: false,
    });
    dispatch(addProductAsync({ ...inputForm, id }));
  };

  useEffect(() => {
    if (isCreated) {
      navigate("/");
    }
  }, [isCreated]);

  return (
    <Container>
      <h2 style={{ margin: "30px 0", textAlign: "center" }}>Add New Product...</h2>
      <Form onSubmit={handleSubmit} className="">
        <Row className="mb-3">
          <Form.Group as={Col} md="8" controlId="validationCustom04">
            <Form.Label>Image</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={handleChange}
              name="image"
              value={inputForm.image}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="8" controlId="validationCustom01">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={handleChange}
              name="title"
              value={inputForm.title}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="8" controlId="validationCustom02">
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={handleChange}
              name="description"
              value={inputForm.description}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="8" controlId="validationCustom03">
            <Form.Label>Price</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={handleChange}
              name="price"
              value={inputForm.price}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
          <Button type="submit">Submit</Button>


      </Form>
    </Container>
  );
};

export default AddProduct;

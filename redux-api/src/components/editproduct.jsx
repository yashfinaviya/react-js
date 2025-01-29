import { useEffect, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import {updateProductAsync  ,singleProductAsync , updateProduct , singleproduct} from "../services/action/Product.action";
import { useDispatch , useSelector} from "react-redux";
import { useNavigate, useParams } from "react-router";

const EditProduct = () => {
    const {id} = useParams();   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {product , isupdated} = useSelector(state => state.productReducer)
    const [inputForm, setInputForm] = useState({
        id:'',
        image:'',
        title: '',
        description: '',
        price: '',
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
        dispatch(updateProductAsync(inputForm));
        navigate("/")
    };

    useEffect(() => {
        dispatch(singleProductAsync(id));
    }, []);

    useEffect(() => {
        if(product)
            setInputForm(product)
    }, [product])

    return (
        <div className="container">
            <Form onSubmit={handleSubmit}>
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

                <Button type="submit">Submit form</Button>
            </Form>
        </div>
    );
};

export default EditProduct;

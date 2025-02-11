import { useEffect, useState } from 'react'
import { Container, Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router'
import { addNewUserAsync } from "../../services/actions/auth.action";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isCreated, error } = useSelector(state => state.authReducer);
    const [inputForm, setInputForm] = useState({
        email: "",
        password: "",
        cpassword: "",
    });

    const handelChanged = (e) => {
        const { name, value } = e.target;
        setInputForm({
            ...inputForm,
            [name]: value
        })
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        if (inputForm.password === inputForm.cpassword) {
            dispatch(addNewUserAsync(inputForm));
        } else {
            alert('Password & Confirm Password does not matched!')
        }
    }

    useEffect(() => {
        if (isCreated) {
            navigate("/login")
        }
    }, [isCreated])

    return (
        <>
            <div>
                <Container>
                    <Form onSubmit={handelSubmit} style={{ width: "50%", margin: "auto", marginTop: "6%", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", padding: "50px" }}>
                        {error ? <p>{error}</p> : ""}
                        <h3>Register User</h3>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Email
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Email"
                                    name="email"
                                    value={inputForm.email}
                                    onChange={handelChanged}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="password"
                                    placeholder="Enter password"
                                    name="password"
                                    value={inputForm.password}
                                    onChange={handelChanged}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                                Confirm Password
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="password"
                                    placeholder="Enter Confirm password"
                                    name="cpassword"
                                    value={inputForm.cpassword}
                                    onChange={handelChanged}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2"></Form.Label>
                            <Col sm="10">
                                <button className='squishy squishy-cosmic' style={{marginLeft : "-20%"}} type="submit">Register User</button>
                            </Col>
                        </Form.Group>
                        <p>Already Account ? <Link to={"/login"}>Login</Link></p>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default Register
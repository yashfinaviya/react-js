import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router'
import { Button, Col, Form, Row } from "react-bootstrap";
import { googleLoginAsync, loginUserAsync } from "../../services/actions/auth.action";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, error } = useSelector(state => state.authReducer);
    const [inputForm, setInputForm] = useState({
        email: "",
        password: "",
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
        dispatch(loginUserAsync(inputForm));
    }

    const handleGoogleLogin = () => {
        dispatch(googleLoginAsync())
    }

    useEffect(() => {
        if (user) {
            navigate("/")
        }
    }, [user])

    return (
        <>
            <Container>
                <Form onSubmit={handelSubmit} style={{ width: "50%", margin: "auto", marginTop: "6%" ,  boxShadow : "rgba(0, 0, 0, 0.35) 0px 5px 15px" , padding : "50px"}}>
                    {error ? <p>{error}</p> : ""}
                    <h3>Login User</h3>
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
                        <Col>
                            <button className='squishy squishy-cosmic' type="submit">Login User</button>
                        </Col>
                    </Form.Group>
                    <button onClick={handleGoogleLogin} className='squishy squishy-cosmic'>Google Login</button>
                    <p className='mt-4'>Create an Account ? <Link to={"/reg"}>Register</Link></p>
                </Form>
            </Container >
        </>
    )
}

export default Login;
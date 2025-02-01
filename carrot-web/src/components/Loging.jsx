import { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigator = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted:', { email, password, rememberMe });
    };

    const hendleclick = () => {
        navigator('/registerForm')
    }

    return (
        <>
            <Container data-aos="fade-up" data-aos-duration="2000" className="d-flex align-items-center justify-content-center min-vh-100">
                <div className="mt-5">
                    <Card style={{ width: '400px', padding: '2rem' }}>
                        <Card.Body>
                            <div className="text-center mb-4">
                                <img src="/public/logo.png" alt="" />
                            </div>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email Address*</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Password*</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter Your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <Form.Check
                                        type="checkbox"
                                        label="Remember Me"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
                                    <a href="#forgot-password" className="text-decoration-none">
                                        Forgot Password?
                                    </a>
                                </div>

                                <Button
                                    variant="success"
                                    type="submit"
                                    className="w-100 mb-3"
                                    style={{ backgroundColor: '#66bb6a' }}
                                >
                                    Login
                                </Button>
                                <div className="text-center">
                                    <span className="me-2">Dont have an account?</span>
                                    <a href="#signup" onClick={hendleclick} className="text-decoration-none">
                                        Signup?
                                    </a>
                                </div>

                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    );
};

export default LoginForm;
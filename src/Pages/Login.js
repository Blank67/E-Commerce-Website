import { Fragment, useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { authActions } from "../redux-store/auth-slice/auth-slice";

const Login = (props) => {

    const [error, setError] = useState(false);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (emailRef.current.value === '' || passwordRef.current.value === '') {
            setError(true);
            return;
        }
        const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        // console.log(user);
        try {
            const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBNjecweWClb674rPRI_bvncRSGkEDo1Uw';
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({ ...user, returnSecureToken: true }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            // console.log(response);
            let transformedResponse = await response.json();
            if (response.ok) {
                dispatch(authActions.login({ token: transformedResponse.idToken, uuID: transformedResponse.localId }));
                history.replace('/store');
            } else {
                let errorMessage = 'Authentication Failed!';
                if (transformedResponse.error.message) {
                    errorMessage = transformedResponse.error.message;
                }
                throw new Error(errorMessage);
            }
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <Fragment>
            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col xs={4}>
                        <Card className="shadow-lg">
                            <Card.Header className="text-center p-3">
                                <h4>Login</h4>
                            </Card.Header>
                            <Card.Body style={{ backgroundColor: '#f7f5f0' }}>
                                <Form>
                                    {error && <div className="mt-1 text-center text-danger">Enter some valid data.</div>}
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="name">Email</Form.Label>
                                        <Form.Control id="name" type="text" required ref={emailRef} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="email">Password</Form.Label>
                                        <Form.Control id="email" type="text" required ref={passwordRef} />
                                    </Form.Group>
                                    <div className="text-center">
                                        <Button variant="warning" type="submit" onClick={onSubmitHandler}>Login</Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Login;
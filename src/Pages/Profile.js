import { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../redux-store/http-request/http-request";

const Profile = (props) => {

    const newPasswordRef = useRef('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch();
    const uID = useSelector(state => state.auth.uuID);

    useEffect(() => {
        // console.log('Get useEffect');
        dispatch(fetchCartData((uID)));
    }, [dispatch, uID]);

    const submitHandler = async (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);
        const newPassword = newPasswordRef.current.value;
        if (newPassword.length < 6) {
            setError(true);
            return;
        }
        try {
            const url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBNjecweWClb674rPRI_bvncRSGkEDo1Uw';
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    idToken: token,
                    password: newPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            // console.log(response);
            const transformedResponse = await response.json();
            // console.log(transformedResponse);
            if (response.ok) {
                setSuccess(true);
            } else {
                let errorMessage;
                if (transformedResponse.error.message) {
                    errorMessage = transformedResponse.error.message;
                }
                throw new Error(errorMessage);
            }
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <Container className="my-3">
            <Row className="justify-content-center">
                <Col xs={5}>
                    <Card>
                        <Card.Header className="text-center p-3">
                            <h4>Change Password</h4>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                {error && <div className="mt-1 text-center text-danger">Password length should be atleast 6.</div>}
                                {success && <div className="mt-1 text-center text-info">Password Changed Successfully.</div>}
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="name">Enter New Password:</Form.Label>
                                    <Form.Control id="name" type="text" minLength="6" required ref={newPasswordRef} />
                                </Form.Group>
                                <div className="text-center">
                                    <Button variant="warning" type="submit" onClick={submitHandler}>Change Password</Button>
                                </div>
                            </Form>
                        </Card.Body>

                    </Card>
                </Col>
            </Row>

        </Container>
    );
}

export default Profile;
import { Fragment, useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const ContactUs = (props) => {

    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(false);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (nameRef.current.value === '' || emailRef.current.value === '' || phoneRef.current.value === '') {
            setError(true);
            setSubmit(false);
            return;
        }
        const user = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value
        }
        console.log(user);
        props.onPost(user);
        setSubmit(true);
        setError(false);
    }

    return (
        <Fragment>
            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col xs={4}>
                        <Card className="shadow-lg">
                            <Card.Header className="text-center p-3">
                                <h4>Contact Us</h4>
                            </Card.Header>
                            <Card.Body style={{ backgroundColor: '#f7f5f0' }}>
                                <Form>
                                    {error && <div className="mt-1 text-center text-danger">Enter some valid data.</div>}
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="name">Name:</Form.Label>
                                        <Form.Control id="name" type="text" ref={nameRef} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="email">Email Address:</Form.Label>
                                        <Form.Control id="email" type="text" ref={emailRef} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="phone">Phone:</Form.Label>
                                        <Form.Control id="phone" type="text" ref={phoneRef} required />
                                    </Form.Group>
                                    <div className="text-center">
                                        <Button variant="warning" type="submit" onClick={onSubmitHandler}>Submit</Button>
                                    </div>
                                </Form>
                                {submit && <div className="mt-1 text-center text-info">Thank you for contacting us.</div>}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default ContactUs;
import React from 'react'
import { Button, Form, Row, Col, Container } from 'react-bootstrap';



export default function Contact() {
    return (

        <Container className='my-5' id='contact'>

            <Row>
            <Col className='col-md-10 col-12 mx-auto' >
                <Row className=''>
                    <Col className='mx-auto my-auto col-12 mx-auto'>
                        <h4>
                            Reach out to me and lets chat!
                        </h4>
                        <p className='contact-description'>
                            Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta
                            facilis perspiciatis corporis nulla
                        </p>
                    </Col>
                    <Col className='col-10 col-md-6 mx-auto  '>
                        <Form >
                        <Row>
                        <Col className='col-12 col-sm-5'>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control type="Name" placeholder="Name" />
                            </Form.Group>
                        </Col>
                        <Col >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                        </Col>

                    </Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={8} placeholder="Message" />
                    </Form.Group>
                    <button className='contact-btn' type="submit">
                        Submit
                    </button>
                </Form>
            </Col>
        </Row>
    </Col>
                <Col className='col-12'>
                    <div className='' >
                        Lets Connect
                    </div>
                </Col>
                <Col>
                    <div>
                        Email
                    </div>
                    <div>
                        <a className='contacts' href="mailto: coreycoleman1001@gmail.com">
email@email.com                        </a>
                    </div>
                </Col>
                <Col>
                    <div>
                        Phone
                    </div>
                    <div className='contacts'>
                        1(310) 648-9724
                    </div>

                </Col>
            </Row>

        </Container>
    )
}




/* 


            <Col className='col-md-10 col-12 mx-auto' >
                <Row className=''>
                    <Col className='mx-auto my-auto col-12 mx-auto'>
                        <h4>
                            Reach out to me and lets chat!
                        </h4>
                        <p className='contact-description'>
                            Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta
                            facilis perspiciatis corporis nulla
                        </p>
                    </Col>
                    <Col className='col-10 col-md-6 mx-auto  '>
                        <Form >
                        <Row>
                        <Col className='col-12 col-sm-5'>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Control type="Name" placeholder="Name" />
                            </Form.Group>
                        </Col>
                        <Col >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                        </Col>

                    </Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={8} placeholder="Message" />
                    </Form.Group>
                    <button className='contact-btn' type="submit">
                        Submit
                    </button>
                </Form>
            </Col>
        </Row>
    </Col> */
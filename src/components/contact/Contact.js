import React from 'react'
import {  Row, Col, Container } from 'react-bootstrap';



export default function Contact() {
    return (

        <div className='my-5' id='contact'>
            <Container>
                <Row>
                    <Col className='col-md-5 mx-auto  '>
                        <h3 className='contact-title py-2'>Lets Chat</h3>
                        <p className='pb-md-2'>
                            Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                        </p>
                        <div className='center'>
                            <a href='#projects' className='button blue contact-button'>Say Hello</a>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}





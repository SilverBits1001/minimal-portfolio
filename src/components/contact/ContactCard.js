
import React, { useRef } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import emailjs from '@emailjs/browser';

export default function ContactCard({ setShow }) {

    const form = useRef(null)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('default_service', 'template_0154k98', form.current, 'QQhjd3TZsYgws7y-o')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Col className='contact-card col-md-9 col-12 p-md-5  mx-auto py-4'>
            <Row className=''>
                <Col className='mx-auto px-4 contact-info-wrapper col-md-6   d-flex flex-column justify-content-between '>
                    <span>
                        <h3 className='contact-title  mb-4 '>Lets connect </h3>
                        <p className='pb-md-0 contact-info    '>
                            Thanks for checking out my website, I’m currently looking to join a new team of developers. If you think we might be a good fit for one another, feel free to reach out and send me an  email.
                        </p>
                    </span>
            <a className='email' href="mailto: coreycoleman1001@gmail.com">
                   
                        coreycoleman1339@gmail.com
                    </a>
                </Col>

                <Col className=' col-12 col-md-6 mx-auto px-4  py-3 contact-form-wrapper '>
                    <Form ref={form} onSubmit={sendEmail} >
                        <Row>
                            <Col className='col-5 col-sm-6 '>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control type="Name"  name="from_name" placeholder="Name" />
                                </Form.Group>
                            </Col>
                            <Col >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" name='from_email' placeholder="Email" />
                                </Form.Group>

                            </Col>

                        </Row>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={7} name='message' placeholder="Message" />
                        </Form.Group>
                        <button type='submit' className='button blue contact-button' onClick={() => setShow(false)}>
                            Say Hello
                        </button>

                    </Form>
                </Col>

            </Row>

        </Col>
    )
}

/* 
example 

<form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />
    <label>Message</label>
    <textarea name="message" />
    <input type="submit" value="Send" />
</form> */
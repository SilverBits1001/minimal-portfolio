import React, { useState, useRef } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import wavebttm from '../../assets/pagebttm1.svg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SentEmail from '../../assets/sent.json'
import Lottie from 'lottie-react'
export default function Contact() {
    const lottie = useRef(null)
    const [show, setShow] = useState(true)
    return (


        <div className='pt-5  ' id='contact'>

            <Container className='mb-5 contact-wrapper' fluid>
                {show ? <Col className='contact-card col-md-9 col-12 p-md-5  mx-auto py-4'>
                    <Row className=''>


                        <Col className='mx-auto px-4 contact-info-wrapper col-md-6   d-flex flex-column justify-content-between '>
                            <span>
                                <h3 className='contact-title  mb-4 '>Lets connect </h3>


                                <p className='pb-md-0 contact-info    '>
                                    Thanks for checking out my website, I’m currently looking to join a new team of developers. If you think we might be a good fit for one another, reach out and send send me an  email.
                                </p>
                            </span>
                            <p className='email'>
                                coreycoleman1339@gmail.com
                            </p>



                        </Col>

                        <Col className=' col-12 col-md-6 mx-auto px-4  py-3 contact-form-wrapper '>
                            <Form >
                                <Row>
                                    <Col className='col-5 col-sm-6 '>
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
                                    <Form.Control as="textarea" rows={7} placeholder="Message" />
                                </Form.Group>
                                <a onClick={()=> setShow(false)} className='button blue contact-button'>Say Hello</a>


                            </Form>
                        </Col>

                    </Row>

                </Col> :  <Col className=' col-md-3 col-6  mx-auto  '>
                    <Lottie lottieRef={lottie} onComplete={()=> setShow(true)} animationData={SentEmail} loop={false} autoplay={true}  />
                </Col>}

               
            </Container>
            {/*  
            <Lottie animationData={SentEmail} loop={false} />
                     <Col className=' col-md-2  me-auto my-auto '>
                    <Lottie lottieRef={lottie}  animationData={SentEmail} loop={false} autoplay={false} onClick={()=> console.log(lottie.current.play()) } />
                    </Col>
*/}
        </div>


    )
}






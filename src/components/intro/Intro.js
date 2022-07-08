import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Intro() {
    return (
    

            <Container className='test  mt-5'>
                <Row>
                    <Col className='center col-lg-7 mx-auto p-2 align-center'>
                        <h1 className='intro-title my-5'>
                            Hi, I am Corey Coleman.
                        </h1>
                        <h2 className='intro-tagline my-5'>
                            A Front End Engineer.
                        </h2>
                        <p className='left description my-5 mx-lg-5'>
                            Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className='center mx-auto'>
                        <button className='resume-btn'>
                            Resume
                        </button>
                        <a>
                            <FaGithub className='icon' />
                        </a>
                        <a>
                            <FaLinkedin className='icon' />
                        </a>
                    </Col>

                </Row>
            </Container>

      
    )
}

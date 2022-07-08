import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const skills = ['HTML', 'CSS', 'Javascript', 'React', 'ReactNative', 'SASS', 'Git']

export default function About() {
    return (
        <div className='my-5'>

            <Container>
                <Row className=' mx-auto'>
                    <Col className='col-6 project-card p-5'>
                        <h3 className='center'>
                            About
                        </h3>
                        <span className='left'>
                            Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.
                            Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.

                        </span>
                    </Col>
                    <Col>
                        <Row>
                            {skills.map((skill, index) => (
                                <Col className='col-3 project-card p-2' key={index}>
                                    {skill}
                                </Col>
                            ))}
                        </Row>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

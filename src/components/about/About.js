import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const skills = ['HTML', 'CSS', 'Javascript', 'React', 'ReactNative', 'SASS', 'Git']

export default function About() {
    return (
        <div id='about' className='my-5'>

            <Container>
                <Row className='  mx-auto'>
                    <Col className='about col-lg-8 col-12 p-5'>
                        <h4 className=''>
                            About
                        </h4>
                        <span className=''>
                            Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.
                            Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.

                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

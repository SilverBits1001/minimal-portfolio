import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Resume from '../../assets/CColemanResume.pdf'
export default function SideLinks() {
    return (

        <Row className='d-none d-md-flex'>
            <div className='vertical d-flex justify-content-end'>
                <Col className='my-5 col-lg-4 col-3'>
                    <a target="_blank" rel="noreferrer" href='https://github.com/SilverBits1001'>
                        github
                    </a>
                </Col>
                <Col className='my-5 col-lg-4 col-3'>
                    <a target="_blank" rel="noreferrer" href='http://www.linkedin.com/in/corey-coleman-881983218'>
                        linkedin
                    </a>
                </Col>
                <Col className='my-5 col-lg-4 col-3'>
                    <a href={Resume} target="_blank" rel="noreferrer" eventKey="link-2">
                        resume
                    </a>
                </Col>

            </div>
        </Row>



    )
}

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaArrowDown, FaAngleDown, FaLinkedin, FaAngleRight } from "react-icons/fa";
import SideLinks from '../sidelinks/SideLinks';
import gradienttriangle from '../../assets/PNGs/Grad_09.png';
export default function Intro() {


    //add gooey image distortion on hover to the gradients



    return (


        <Container className='intro-content d-flex' fluid id='intro'>
            <div className='intro-content d-flex flex-column justify-content-center'>
                <Row className=''>
                    <Col className='col-6 intro-test d-none d-sm-inline'>
                        <img className='' src={gradienttriangle} alt='gradient triangle' />
                    </Col> 
                    <Col className='col-lg-5 mx-auto me-lg-auto me-lg-5 my-auto'>
                        <Row>

                            <Col className=' col-lg-12 mx-auto p-2 align-center'>
                                <h1>
                                    Hi, I am <br className='d-sm-none' /><span className='large'>Corey Coleman</span>.

                                </h1>
                                <h2 className='my-1'>
                                    A Front End Engineer.
                                </h2>
                                <p className='mt-lg-5 mt-4 p-1  '>
                                    Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='col-md-6 col-12'>
                                <button href='#projects' className=''>
                                    Check out my projects 
                                </button>
                                <a>
                                    <h4>

                                    </h4>
                                </a>
                                {/*  <a>
                                <FaLinkedin className='icon' />
                            </a>  */}
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </div>

            <SideLinks />
        </Container>


    )
}


<>
    <div className='d-lg-flex  intro-content'>
        <Row className=''>
            <Col className='d-none d-sm-inline col-lg-6 col-12 my-auto red'>

                <img className='' src={gradienttriangle} alt='gradient triangle' />

            </Col>
            <Col className='col-lg-5 mx-auto me-lg-auto me-lg-5 my-auto'>
                <Row>

                    <Col className=' col-lg-12 mx-auto p-2 align-center'>
                        <h1>
                            Hi, I am <br className='d-sm-none' /><span className='large'>Corey Coleman</span>.

                        </h1>
                        <h2 className='my-1'>
                            A Front End Engineer.
                        </h2>
                        <p className='mt-lg-5 mt-4 p-1  mx-sm-5'>
                            Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className='mx-auto'>
                        {/*       <button className=''>
                                Projects
                            </button> */}
                        <a>
                            <h4>

                            </h4>
                        </a>
                        {/*  <a>
                                <FaLinkedin className='icon' />
                            </a>  */}
                    </Col>

                </Row>
            </Col>

        </Row>


        <SideLinks />
    </div>


    <a href='#projects' className='arrow'>

        <FaAngleDown className='icon' />
    </a>

</>
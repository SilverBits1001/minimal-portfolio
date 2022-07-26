import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaArrowDown, FaAngleDown, FaLinkedin, FaAngleRight, FaGithub } from "react-icons/fa";
import SideLinks from '../sidelinks/SideLinks';
import gradienttriangle from '../../assets/PNGs/Grad_09.png';
import { motion } from 'framer-motion';
import Resume from '../../assets/CColemanResume.pdf'
export default function Intro() {


    //add gooey image distortion on hover to the gradients

    const one = <h3> Hi, I am </h3>

    const two = <h1 className='large-header'>Corey Coleman</h1>
    const three = <h2 className='regular-header'>A Front End Engineer.</h2>
    const four = (
        <>
            <p className='p-1  '>
                I build websites with a focus on responsive design
            </p>

        </>
    )
    const five = (
        <div>
            <a href='#projects' className='button blue'>
                View My Projects
            </a>

            <a href={Resume} target="_blank" rel="noreferrer" className='d-lg-none  button white'>
                Resume
            </a>

        </div>
    )

    const content = [one, two, three, four, five]

    return (

        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1 }}
            transition={{ duration: .5 }}
            className=' d-flex m ps-sm-5 ps-3 ' fluid id='intro'
        >




            <div className='intro-content d-flex flex-row w-100 '>


                {/*    <Col className='col-6 intro-test d-none d-sm-inline'>
                        <img className='' src={gradienttriangle} alt='gradient triangle' />
                    </Col>  */}
                <Col className='col-lg-8 col-12 mx-auto mt-5'>
                    <Row>

                        <Col className='col-lg-12 mx-auto p-2 align-center'>
                            {content.map((item, index) => (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: (index * .15) }}

                                    >
                                        <div key={index}>{item}</div>
                                    </motion.div>
                                </>
                            ))}

                        </Col>
                    </Row>
                    <Row>
                        <Col className='col-12'>

                            {/*  <a>
                                <FaLinkedin className='icon' />
                            </a>  */}
                        </Col>

                    </Row>
                </Col>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: .75 }}
                    className='d-none d-sm-flex me-3'
                >
                    <SideLinks />

                </motion.div>

            </div>



        </motion.div>


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
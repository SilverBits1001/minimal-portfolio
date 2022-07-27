import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SideLinks from '../sidelinks/SideLinks';
import { motion } from 'framer-motion';
import Resume from '../../assets/CColemanResume.pdf'
export default function Intro() {


    //add gooey image distortion on hover to the gradients

    const one = <h3 className='ms-0'> Hi, I am </h3>

    const two = <h1 className='regular-header'>Corey Coleman</h1>
    const three = <h2 className='large-header'>A Front End Engineer.</h2>
    const four = (
        <>
            <h3 style={{ }} className='p-1  '>
                I build websites with a focus on responsive design.
            </h3>

        </>
    )
    const five = (
        <div className='mt-3'>
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
            className=' d-flex m ps-sm-5 ps-3 '  id='intro'
        >




            <div className='intro-content d-flex flex-row w-100 '>


                {/*    <Col className='col-6 intro-test d-none d-sm-inline'>
                        <img className='' src={gradienttriangle} alt='gradient triangle' />
                    </Col>  */}
                <Col className='col-lg-8 col-12 mx-auto my-auto mt-5' >
                    <Row>

                        <Col className='col-lg-12 mx-auto  p-2 align-center '>
                            {content.map((item, index) => (
                                
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: (index * .15) }}
                                        className=''
                                        key={index}
                                    >
                                        {item}
                                    </motion.div>
                            
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



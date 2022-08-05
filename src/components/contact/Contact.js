import React, { useState, useRef } from 'react'
import { Col, Container } from 'react-bootstrap';
import SentEmail from '../../assets/sent.json'
import Lottie from 'lottie-react'
import { AnimatePresence, motion } from 'framer-motion';
import ContactCard from './ContactCard';


export default function Contact() {
    const lottie = useRef(null)
    const [show, setShow] = useState(true)
    const container = {
        hidden: { opacity: 0, scale: .9, },
        show: { opacity: 1, scale: 1, },
        exit: { opacity: 0, scale: .9, }


    }
    return (

        <div id='contact'>
            <motion.div
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
                viewport={{ once: true, amount: 0.30, }}
                className=' '>
                <Container className='mb-5 contact-wrapper' fluid>
                    <AnimatePresence exitBeforeEnter>
                        {show ? <motion.div
                            variants={container}
                            initial='hidden'
                            animate='show'
                            exit='exit'
                            key='ard'
                        >
                            <ContactCard setShow={setShow} />
                        </motion.div> :
                            <motion.div
                                key='lottie'
                                variants={container}
                                initial='hidden'
                                animate='show'
                                exit='exit'
                            >
                                <Col className=' col-md-3 col-7  mx-auto  '>
                                    <Lottie lottieRef={lottie} onComplete={() => setShow(true)} delay={1} animationData={SentEmail} loop={false} autoplay={true} />
                                </Col>
                            </motion.div>}
                    </AnimatePresence>
                </Container>
            </motion.div>

        </div>
    )
}






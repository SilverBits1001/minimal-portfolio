import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion';
import { DiCss3, DiGit, DiHtml5, DiJavascript, DiReact, DiSass } from "react-icons/di";


const skills = [
    {
        name: 'Html',
        icon: <DiHtml5 size={40} />
    },
    {
        name: 'CSS',
        icon: <DiCss3 size={40} />,
    },
    {
        name: 'Javascript',
        icon: <DiJavascript size={40} />,
    },
    {
        name: 'React',
        icon: <DiReact size={40} />,
    },
         {
            name: 'React Native' ,
            icon: <DiReact size={40}/> ,
        },
    {
        name: 'Sass',
        icon: <DiSass size={40} />,
    },
    {
        name: 'Git',
        icon: <DiGit size={40} />,
    },

]


export default function About() {
    return (

        <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: 0.30, }}
            className=' d-flex m ps-sm-5 ps-3 py-5 '
            id='about'
        >



            <Container>
                <div className='title-wrapper'>
                    <h3 className='about-me-title mb-3 ms-2'>
                        About Me
                    </h3>
                </div>
                <Row className='about  mx-auto'>
                    <Col className='mx-auto col-lg-7 col-12'>


                        <div className='about-me-info'>
                            <p>
                                My name is Corey and I enjoy creating  interactive digital experiences. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &amp; CSS!
                            </p>
                            <p>
                                Fast-forward to today, and I’ve had the privilege of working at <a href="https://us.mullenlowe.com/" rel="noopener noreferrer" target="_blank">an advertising agency</a>, <a href="https://starry.com/" rel="noopener noreferrer" target="_blank">a start-up</a>, <a href="https://www.apple.com/" rel="noopener noreferrer" target="_blank">a huge corporation</a>, and <a href="https://scout.camd.northeastern.edu/" rel="noopener noreferrer" target="_blank">a student-led design studio</a>. My main focus these days is building accessible, inclusive products and digital experiences at <a href="https://upstatement.com/" rel="noopener noreferrer" target="_blank">Upstatement</a> for a variety of clients.
                            </p>
                            <p>I also recently <a href="https://www.newline.co/courses/build-a-spotify-connected-app" rel="noopener noreferrer" target="_blank">launched a course</a> that covers everything you need to build a web app with the Spotify API using Node &amp; React.</p>

                        </div>
                    </Col>
                     <Col className='mx-auto my-auto tech-container' >

                        <ul className="row skills-list p-md-auto mx-auto ">
                            {skills.map((skill, index) => (
                                <li className='col-4 col-sm-6   ' key={index}>{skill.icon} <span className='d-none d-sm-inline-flex'>{skill.name}</span> </li>
                            ))}
                        </ul>
                    </Col> 
                </Row>

            </Container>
        </motion.div>
    )
}

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion';
import { DiCss3, DiGit, DiHtml5, DiJavascript, DiReact, DiSass } from "react-icons/di";

const iconSize = 50;

const skills = [
    {
        name: 'Html',
        icon: <DiHtml5 size={iconSize} />
    },
    {
        name: 'CSS',
        icon: <DiCss3 size={iconSize} />,
    },
    {
        name: 'Javascript',
        icon: <DiJavascript size={iconSize} />,
    },
    {
        name: 'React',
        icon: <DiReact size={iconSize} />,
    },
    {
        name: 'React Native',
        icon: <DiReact size={iconSize} />,
    },
    {
        name: 'Sass',
        icon: <DiSass size={iconSize} />,
    },
    {
        name: 'Git',
        icon: <DiGit size={iconSize} />,
    },

]


export default function About() {
    return (

        <motion.div
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: 0.30, }}
            className=' d-flex py-5  '
            id='about'
        >
            <Container className='about my-5'>
                <div className='title-wrapper'>
                    <h3 className='about-me-title mb-3 '>
                        About Me
                    </h3>
                </div>
                <Row className='  '>
                    <Col className='p-3 col-lg-7 col-12'>


                        <div className='about-me-info'>
                            <p>
                                My name is Corey and I enjoy creating  interactive digital experiences. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &amp; CSS!
                            </p>
                            <p>
                                Fast-forward to today, and I’ve had the privilege of working at <a href="https://us.mullenlowe.com/" rel="noopener noreferrer" target="_blank">an advertising agency</a>, <a href="https://starry.com/" rel="noopener noreferrer" target="_blank">a start-up</a>, <a href="https://www.apple.com/" rel="noopener noreferrer" target="_blank">a huge corporation</a>, and <a href="https://scout.camd.northeastern.edu/" rel="noopener noreferrer" target="_blank">a student-led design studio</a>. My main focus these days is building accessible, inclusive products and digital experiences at <a href="https://upstatement.com/" rel="noopener noreferrer" target="_blank">Upstatement</a> for a variety of clients.
                            </p>
                            <p>I also recently <a href="https://www.newline.co/courses/build-a-spotify-connected-app" rel="noopener noreferrer" target="_blank">launched a course</a> that covers everything you need to build a web app with the Spotify API using Node &amp; React.</p>
                            <a href='#projects' className='button blue my-2'>
                                View My Resume
                            </a>
                        </div>




                    </Col>
                    <Col className=' col-lg-5 col-12 tech-container' >

                        <span className="row skills-list p-md-auto p-3  mx-auto ">
                            {skills.map((skill, index) => (
                                <li className='col-4 col-lg-6   ' key={index}>{skill.icon} <span className='d-none d-sm-inline-flex skill-name'>{skill.name}</span> </li>
                            ))}
                        </span>
                    </Col>
                </Row>

            </Container>

        </motion.div>
    )
}

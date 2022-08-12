import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion';
import { DiCss3, DiGit, DiHtml5, DiJavascript, DiReact, DiSass } from "react-icons/di";
import Resume from '../../assets/CColemanResume.pdf'

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
                                Hi, My name is Corey, a Front End Engineer based in southern California. I enjoy creating clean yet performant digital experiences and am currently looking for Front-End engineering opportunities with a team that I can grow and learn with.
                            </p>
                            <p>
                                While, my main love is web and mobile app development through the React framework, I am currently working towards learning more back end technologies, such as Node.Js and Express.Js, to become a more well rounded and versatile developer.
                            </p>
                            <p>
                                When I am not mulling over bugs in my code, I usually spend my time reading (currently The Martian by Andy Weir) or listening to Dungeons and Dragons podcasts.
                            </p>
                            <p>

                            </p>
                            <a href={Resume} target="_blank" rel="noreferrer" className='button blue my-3'>
                                View My Resume
                            </a>
                        </div>




                    </Col>
                    <Col className=' col-lg-5 col-12 tech-container' >

                        <span className="row skills-list p-md-auto p-3  mx-auto ">
                            {skills.map((skill, index) => (
                                <li className='col-4 col-lg-4 mx-auto justify-content-center align-items-center tech  d-flex flex-column ' key={index}>{skill.icon} <span className='d-none d-sm-inline-flex skill-name'>{skill.name}</span> </li>
                            ))}
                        </span>
                    </Col>
                </Row>

            </Container>

        </motion.div>
    )
}

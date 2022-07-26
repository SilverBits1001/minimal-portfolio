import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import ProjectsDB from './ProjectsDB'
import img from '../../assets/PNGs/Grad_01.png';

export default function ProjectListSection() {

    const backgroundStyle = {
        "backgroundImage": `url(../../assets/PNGs/Grad_01.png)`,
        "backgroundSize": "contain",
        "backgroundPposition": "center",
        "backgroundRepeat": "no-repeat",
    }

    return (
        <Container className='list-bg'>

            <Row>
                <Col className='col-md-6 col-12  sticky '>
                    <h2 className='about-me-title'>
                        About Me
                    </h2>
                    <div className=''>
                        <p className='about-me-info'>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &amp; CSS!</p>
                        <p className='about-me-info'>Fast-forward to today, and I’ve had the privilege of working at <a href="https://us.mullenlowe.com/" rel="noopener noreferrer" target="_blank">an advertising agency</a>, <a href="https://starry.com/" rel="noopener noreferrer" target="_blank">a start-up</a>, <a href="https://www.apple.com/" rel="noopener noreferrer" target="_blank">a huge corporation</a>, and <a href="https://scout.camd.northeastern.edu/" rel="noopener noreferrer" target="_blank">a student-led design studio</a>. My main focus these days is building accessible, inclusive products and digital experiences at <a href="https://upstatement.com/" rel="noopener noreferrer" target="_blank">Upstatement</a> for a variety of clients.</p>
                        <p className='about-me-info'>Here are a few technologies I’ve been working with recently:</p>

                    </div>
                    {/*                     <ul class="skills-list"><li>JavaScript (ES6+)</li><li>TypeScript</li><li>React</li><li>Eleventy</li><li>Node.js</li><li>WordPress</li></ul>
 */}
                </Col>
                <Col className='col-5 ms-auto '>

                    {ProjectsDB.map((project, index) => (
                        <Col className='col-12 ms-auto p-5 m-5 mesh-bg'>
                            <img className='project-list-img project-img-bg' src={project.img} alt={project.title} />

                            <div className='project-list-details'>
                                <h3 className='index-up'>
                                    {project.title}
                                </h3>
                                <Col className='col-8'>
                                    <p>
                                        {project.description}
                                    </p>
                                </Col>

                                
                                    <span className='d-flex flex-wrap'>
                                        {project.technologies.map((tech, index) => (
                                            <ul key={index} className='project-tech'>
                                                {tech}
                                            </ul>

                                        ))}
                                    </span>
                            </div>




                        </Col>


                    ))}
                </Col>
            </Row>
        </Container>
    )
}


/* 
 <Col className='mx-auto list-card col-12 overflow-hidden '>
                            
{/*                                 <Col
                                    className='p-1 mesh-bg col-6 d-flex justify-content-center align-items-center'>

                                    <img className='project-list-img' src={project.img} alt={project.title} />


                                </Col> 
                                <Col className=' my-auto col-12 mx-auto p-5'>
                                    <Col className='project-list-title mx-auto '>
                                        <h2>
                                            {project.title}
                                        </h2>
                                    </Col>

                                             
      <Col className='project-list-number p-4 col-5 col-md-5'>
    <div className=''>
        <a>
            <FaGithub />

        </a>
        <a>
            <FaExternalLinkAlt />
        </a>
    </div>
</Col> 

                                    <Col className='project-list-description mx-auto col-12 mt-4'>
                                        {project.description}
                                    </Col>
                                    <Col>
                                        <span className='d-flex flex-wrap'>
                                            {project.technologies.map((tech, index) => (
                                                <ul key={index} className='project-tech'>
                                                    {tech}
                                                </ul>

                                            ))}
                                        </span></Col>
                                </Col>
                            



                        </Col>
 */
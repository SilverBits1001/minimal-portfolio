import React, { useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function TestProject({ project, parallax }) {


    return (

        <div

            className='project-card col-md-4 col-10 m-3 p-md-5 p-3'
        >

            <Col className='info-wrap mx-auto my-auto col- col-md-12'>
                <h2 data-swiper-parallax={parallax.medium} className=''>{project.title}
                </h2>
                <p data-swiper-parallax={parallax.fast} className='project-description'>{project.description}</p>
                <span data-swiper-parallax={parallax.fast} className='d-flex flex-wrap'>
                    {project.technologies.map((tech, index) => (
                        <ul key={index} className='project-tech'>
                            {tech}
                        </ul>

                    ))}
                </span>
                <div className='mx-auto'>
                    <a>
                        <FaGithub />
                    </a>
                    <a>
                        <FaExternalLinkAlt />
                    </a>
                </div>
            </Col>






            {/*       <Row>
        <Col className='col-12 '>
          <span className='d-flex flex-wrap'>
            {project.technologies.map((tech, index) => (
              <ul key={index} className='project-tech'>
                {tech}
              </ul>

            ))}
          </span>
        </Col>
        <Col className='col-12 '>
          <div className=''>
            <a>
              <FaGithub />
            </a>
            <a>
              <FaExternalLinkAlt />
            </a>
          </div>

        </Col>
      </Row>
 */}

        </div>






    )
}

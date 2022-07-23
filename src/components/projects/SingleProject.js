import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function SingleProject({ project, parallax }) {
  

  return (

    <Col className='mesh-bg project-card mx-auto col-md-12 p-5 m-md-5 '>
      <Row className='px-3'>
        <Col className='col-md-5 col-12 my-auto d-flex justify-content-center '>

            <img className='project-img'  data-swiper-parallax={parallax.slow} src={project.img} alt='Movie Swiper App' />


        </Col>

        <Col className='info-wrap mx-auto my-auto col-12 col-md-7'>
          <h2  data-swiper-parallax={parallax.medium} className=''>{project.title}
          </h2>
          <p  data-swiper-parallax={parallax.fast} className='project-description'>{project.description}</p>
          <span data-swiper-parallax={parallax.fast}  className='d-flex flex-wrap'>
            {project.technologies.map((tech, index) => (
              <ul key={index} className='project-tech'>
                {tech}
              </ul>

            ))}
          </span>
        </Col>






      </Row>
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

    </Col>






  )
}

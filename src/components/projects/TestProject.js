import React, { useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub, FaExternalLinkAlt, FaReact, FaRaspberryPi } from "react-icons/fa";

export default function TestProject({ project, parallax, index }) {


  return (



    <Col className=''>
      <img className='project-list-img project-img-bg' src={project.img} alt={project.title} />

      <div className='project-list-details d-flex flex-column justify-content-between p-3 '>
        <h3 className='index-up'>
          {project.title}
        </h3>
        <Col className='pt-3  d-md-block d-none col-md-8 col-12'>
          <p>

            {project.description}
          </p>
        </Col>

        <div className='tech-wrapper w-75 d-flex  flex-wrap align-items-end '>


          {project.technologies.map((tech, index) => (

            <p key={index} className='project-tech p-1 mb-0'>
              {tech}
            </p>

          ))}
        </div>


      </div>




    </Col>




  )
}

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

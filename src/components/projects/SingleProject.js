import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function SingleProject({ project }) {
  return (
    <Col className='project-card col-12 p-3  col-lg-3 '>

      {/*       <Col className=' col-6'>
          <img className='project-img' src={project.img} alt='Movie Swiper App' />
        </Col> */}
      <span >
        <h4 className='project-title'>{project.title}</h4>
        <p className='mt-3 left'>{project.description}</p>
<span className='d-flex justify-content-center flex-wrap'>
{project.technologies.map((tech, index) => (
          <ul key={index}>
            {tech}
          </ul>

        ))}
</span>

        <div className=''>
          <a>
            <FaGithub />
          </a>
          <a>
            <FaExternalLinkAlt />
          </a>
        </div>

      </span>




    </Col>


  )
}

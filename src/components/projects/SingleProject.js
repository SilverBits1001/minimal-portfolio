import React from 'react'
import { Col } from 'react-bootstrap'

export default function SingleProject({ project, parallax, index }) {


  return (



    <Col className='h-100'>
      <img className='project-list-img project-img-bg' src={project.img} alt={project.title} />

      <div className='project-list-details d-flex flex-column justify-content-between p-3 '>
          <h3 className='project-list-title'>
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


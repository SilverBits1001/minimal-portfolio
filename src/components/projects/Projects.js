import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SingleProject from './SingleProject'
import ProjectsDB from './ProjectsDB'
export default function Projects() {
  return (
    <Container>
      <h2 className='mt-5 mb-3 center '>
        Projects
      </h2>
      <Row className='d-flex justify-content-center '>

        {ProjectsDB.map((project, index) => (
          <SingleProject key={index} project={project} />
        ))}





      </Row>
    </Container>
  )
}

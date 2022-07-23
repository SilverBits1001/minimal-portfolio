import React, { useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TestProject from './TestProject'
import ProjectsDB from './ProjectsDB'
export default function Projects() {


  const scrollRef = useRef(null)
  const onWheel = e => {
   
    const container = scrollRef.current;
    const containerScrollPosition = scrollRef.current.scrollLeft;
    console.log(e.deltaY + containerScrollPosition );

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };
  return (

    <Container >

      <h2 className='pt-5 mb-3 ms-5'>
        Projects
      </h2>
      <div ref={scrollRef}
        className='m-0 p-0 d-flex test-project-container '>

        {ProjectsDB.map((project, index) => (
          <TestProject key={index} project={project} parallax={{ slow: '-300', medium: '-200', fast: '-100' }} />
        ))}

      </div>
    </Container>
  )
}

import React from 'react';
import SingleProject from './SingleProject';
import ProjectsDB from './ProjectsDB';
import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';

export default function Projects() {


  return (
    <motion.div
      initial={{ opacity: 0, }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5 }}
      className=' py-md-3' id='projects'
    >

      <div className='ps-md-5 p-3  d-flex test-project-container '>

        {ProjectsDB.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.03,
              transition: { duration: .3 },
            }}
            initial={{ opacity: 0, translateY: 50 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true, amount: 0.20, }}
            className='col-lg-5 col-12 me-5 mesh-bg p-3'
            onClick={() => window.open(project.link)}>
            <SingleProject index={index} project={project} parallax={{ slow: '-300', medium: '-200', fast: '-100' }} />
          </motion.div>
        ))}

      </div>

    </motion.div>
  )
}

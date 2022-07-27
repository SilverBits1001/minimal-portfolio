import React, { useRef } from 'react'
import SingleProject from './SingleProject'
import ProjectsDB from './ProjectsDB'
import { motion } from 'framer-motion';

export default function Projects() {


  const scrollRef = useRef(null)
  const onWheel = e => {

    const container = scrollRef.current;
    const containerScrollPosition = scrollRef.current.scrollLeft;
    console.log(e.deltaY + containerScrollPosition);

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, }}
      animate={{ opacity: 1 }}
      transition={{ duration: .5 }}
      className=' py-md-3' id='projects'
    >

      <div ref={scrollRef} className='ps-md-5 p-3  d-flex test-project-container '>

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

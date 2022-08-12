import { motion, useScroll, useSpring } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function MyNavbar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress)
  const [hState, sethState] = useState(true);

  const variants = {
    hidden: { opacity: 0, y: -45 },
    visible: { opacity: 1, y: 0},
  }

  useEffect(() => {
    var lastVal = 0;
    window.onscroll = function () {
      let y = window.scrollY;
      if (y > lastVal) {
        sethState(false);
      }
      if (y < lastVal) {
        sethState(true);
      }
      if (y === 0) {
        sethState(true);
      }
      lastVal = y;
    };

  }, []);

  return (
    <motion.div
      initial="hidden"
      animate={hState ? "visible" : "hidden"}
      transition={{ duration:0 }}
      variants={variants}
      id='navbar'


    >

      <Navbar  className='custom-nav d-flex'>
        <Container className='py-0'>
          <Navbar.Brand style={{ "color": "white" }} className='d-sm-flex brand  ' href="#home">CC.</Navbar.Brand>
          <div className=' align-items-center '>
            <span className='d-lg-none d-flex justify-content-between'>
              <a target="_blank" rel="noreferrer" href='https://github.com/SilverBits1001'>
                <FaGithub className='ms-2' size={25} />
              </a>
              <a target="_blank" rel="noreferrer" href='http://www.linkedin.com/in/corey-coleman-881983218'>
                <FaLinkedin className='ms-2' size={25} />
              </a>
              <a href="mailto: coreycoleman1001@gmail.com">
                <FaEnvelope className='ms-2' size={25} />
              </a>
            </span>

            <Nav.Link className='contact-link px-1 d-none d-lg-flex' href="mailto: coreycoleman1001@gmail.com">say hi.</Nav.Link>
          </div>
        </Container>

      </Navbar>
    </motion.div>


  )
}







import React from 'react'
import { Container, Row, COl } from 'react-bootstrap'
import About from '../about/About'
import Contact from '../contact/Contact'
import Intro from '../intro/Intro'
import MyNavbar from '../navbar/Navbar'
import ProjectListSection from '../projects/ProjectListSection'
import Projects from '../projects/Projects'
import ProjectsSwiper from '../projects/ProjectsSwiper'
import SingleProject from '../projects/SingleProject'
import SideLinks from '../sidelinks/SideLinks'

export default function Layout() {
    return (
        <div >
            <MyNavbar />
      
            <Intro />
        {/*      <ProjectListSection/> */}
       
 
               <Projects />  
               <About />
       {/*       <ProjectsSwiper />  */}
  {/*           <Contact />  */}
        </div>
    )
}

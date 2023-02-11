import React from 'react'
import About from '../about/About'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import Intro from '../intro/Intro'
import MyNavbar from '../navbar/Navbar'
import Projects from '../projects/Projects'

export default function Layout() {
    return (
        <div id='Layout-Wrapper'>
            <MyNavbar />
            <Intro />
            <Projects />
            <About />
            <Contact/>
            <Footer/>
        </div>
    )
}

import React from 'react'
import About from '../about/About'
import Contact from '../contact/Contact'
import Intro from '../intro/Intro'
import MyNavbar from '../navbar/Navbar'
import Projects from '../projects/Projects'

export default function Layout() {
    return (
        <div >
            <MyNavbar />
            <Intro />
            <Projects />
            <About />
            <Contact/>
        </div>
    )
}

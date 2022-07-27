import React from 'react'
import About from '../about/About'
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
        </div>
    )
}

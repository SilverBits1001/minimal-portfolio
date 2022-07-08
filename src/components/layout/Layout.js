import React from 'react'
import { Container } from 'react-bootstrap'
import About from '../intro/about/About'
import Intro from '../intro/Intro'
import MyNavbar from '../navbar/Navbar'
import Projects from '../projects/Projects'
import SingleProject from '../projects/SingleProject'

export default function Layout() {
    return (
        <Container>
            <MyNavbar />
            <Intro />
            <Projects/>
            <About/>
        </Container>
    )
}

import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='footer-wrapper d-flex align-items-center justify-content-center'>

            <div className=''>
            <a target="_blank" rel="noreferrer" href="http://www.github.com/silverbits1001">
                    <FaGithub />
                </a>   |
                <a target="_blank" rel="noreferrer" href="http://www.linkedin.com/in/corey-coleman-881983218">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    )
}



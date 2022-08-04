import React from 'react'
import {  FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className='footer-wrapper d-flex align-items-center justify-content-center'> 
       
            <div className=''>
               GitHi <FaGithub /> | <FaLinkedin />
            </div>
        </div>
    )
}

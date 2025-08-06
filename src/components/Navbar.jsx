import React from 'react'
import kevinRushLogo from '../assets/kevinRushLogo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className="bg-white-900 mb-20 flex items-center justify-between py-6" >
            <div className="flex flex-shrink-0 items-center">
                <img src={kevinRushLogo} alt="Kevin Rush Logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/enzo-aparicio/"
                    target="_blank"
                    rel="noopener noreferrer" // Esto previene ataques de tipo "reverse tabnabbing"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <FaGithub />
                <FaPhone />
                <FaEnvelope />
            </div>

        </nav >
    )
}

export default Navbar
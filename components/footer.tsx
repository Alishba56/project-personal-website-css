import Link from 'next/link';
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";



const footer = () => {
  return (
    <div>
          <footer className="footer">
        <ul className="List">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
        <div className="social">
        <Link href=''> <FaLinkedin/> </Link>
          <Link href=''> <FaGithub/> </Link>
          <Link href=''> <FaPhoneAlt /> </Link>
          <Link href=''> <MdOutlineEmail/> </Link>
        </div>
        <p className="copyright">@ Alishba shahzad | All Rights Reserved</p>
      </footer>      
      
    </div>
  )
}

export default footer

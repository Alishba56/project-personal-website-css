import Link from 'next/link';
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";




const home = () => {
  return (
    <div>
            <section className="Home" id="home">
        <div className="home-content">
          <h1>Hi, It s <span>Alishba</span></h1>
           <h3 className="text-animation">I m a <span></span></h3>
          <p>
            I specialize in crafting responsive, user-friendly web interfaces with a focus on clean design and seamless functionality. With a strong foundation in HTML, CSS, JavaScript, and TypeScript, I enjoy bringing ideas to life in the browser and ensuring that every element serves the user experience..
          </p>
          <div className="social-icon">
          <Link href=''> <FaLinkedin/> </Link>
          <Link href=''> <FaGithub/> </Link>
          <Link href=''> <FaPhoneAlt /> </Link>
          <Link href=''> <MdOutlineEmail/> </Link>
          </div>
  
          <div className="btn-group">
            <a href="#" className="btn">Hire</a>
            <a href="contact" className="btn">Contact</a>
          </div> 
        </div>
        
      </section>  
     
     
    </div>
  )
}

export default home

'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoMenuSharp } from 'react-icons/io5';
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [attr, setAttr] = useState<string>('block')
  const [attr2, setAttr2] = useState<string>('none')

  const handleOpen = () =>{
    setAttr(isOpen? 'block' : 'none')
    setAttr2(isOpen? 'none' : 'block')
    setIsOpen(!isOpen)
  }

  return (
    <div>
        <header className="header">
        <Link href="/" className="logo">
          Alishba
          <span>shahzad</span>
        </Link>
    
        
        <nav className="navbar">
          <Link href="#" className="active"> Home</Link>
          <Link href="#education">Education</Link>
          <Link href="#skill">Skills</Link>
          <Link href="#contact">Contact</Link>
          <Link href="#about">About</Link>
          </nav>
          <IoMenuSharp className= {`icon-menu ${attr}`} onClick={handleOpen} />
      
      <RxCross2 className={`icon ${attr2}`}  onClick={handleOpen}/>
    </header>
    <nav className={`navbar-res ${attr2}`}>
      <Link href="#"> <li>Home</li> </Link>
      <Link href="#education"> <li>Education</li> </Link>
      <Link href="#skill"> <li>Skills</li> </Link>
      <Link href="#contact"> <li>Contact</li> </Link>
      <Link href="#about"> <li>About</li> </Link>
     
    </nav>
      
    </div>
  )

}

export default Header

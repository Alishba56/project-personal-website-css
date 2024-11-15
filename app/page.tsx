import About from '@/components/about'
import Contact from '@/components/contact'
import Education from '@/components/education'
import Home from '@/components/main'
import Skills from '@/components/skills'
import React from 'react'

const page = () => {
  return (
    <div>
      <Home/>
      <Education/>
      <About/>
      <Skills/>
      <Contact/>
      
    </div>
  )
}

export default page

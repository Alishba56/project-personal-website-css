import React from 'react'
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";




const skills = () => {
  return (
    <div>
       <div className='arrow'>
      <MdOutlineKeyboardDoubleArrowDown/>
      </div>

         <section className="skills" id="skills">
         <div className="skills-content">
          <h2 className="heading">Skills & Expertise</h2>
          <p className="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <div className="skill-items">
            <h2>Programming Languages</h2>
            <ul>
              <li className="html">HTML5
              <div className="one">
                <div className="two"></div>
              </div>
            </li>
            <li className="css">CSS
              <div className="one">
                <div className="two"></div>
              </div>
            </li>
            <li className="tailwind">Tailwind
              <div className="one">
                <div className="two"></div>
              </div>
            </li>
            <li className="typescript">Typescript
              <div className="one">
                <div className="two"></div>
              </div>
            </li>
             </ul>
          </div>
        </div> 
          <div className="skill-items">
            <h2>Learning</h2>
            <ul>
              <li className="framer">Framer motion
              <div className="one">
                <div className="two"></div>
              </div>
            </li>
            <li className="js">Next.js
              <div className="one">
                <div className="two"></div>
              </div>
            </li>
             <li className="gsap">GSAP
              <div className="one">
                <div className="two"></div>
              </div>
            </li>
             </ul>
          </div>          
    
      </section>
      

    </div>
  )
}

export default skills

import React from 'react'
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";


const education = () => {
  return (
    <div>
      
      <div className='arrow'>
      <MdOutlineKeyboardDoubleArrowDown/>
      </div>

      
      <section className="Education" id="education">
        <h2 className="heading">Education</h2>
        <div className="education-items">
          <div className="education-item">
            <div className="education-dot"></div>
            <div className="education-data">2018</div>
            <div className="education-content">

              <h3>School</h3>
              <p>
               Children paradise secondary school
              </p>
            </div>
          </div>
          <div className="education-item">
            <div className="education-dot"></div>
            <div className="education-data">2019</div>
            <div className="education-content">
              <h3>Collage</h3>
              <p>
               Government girls of collage
              </p>
            </div>
          </div>
          <div className="education-item">
            <div className="education-dot"></div>
            <div className="education-data">2022</div>
            <div className="education-content">
              <h3>University</h3>
              <p>
                University of karachi University
              </p>
            </div>
          </div>
          <div className="education-item">
            <div className="education-dot"></div>
            <div className="education-data">2024</div>
            <div className="education-content">
              <h3>Fontend developer</h3>
              <p>
               Governer house of karachi
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default education

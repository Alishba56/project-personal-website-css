
import React from 'react'

import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";





const page = () => {
  return (
    <div>
        <div className='arrow'>
      <MdOutlineKeyboardDoubleArrowDown/>
      </div>
      <section className='contact'>
      <h2 className="heading">
        Contact me
      </h2>

      <form action="">
        <div className="input-group">
          <div className="input-box">
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-box">
            <input type="number" placeholder="Phone number" />
            <input type="text" placeholder="Subject" />
          </div>
        </div>

        <div className="input-group-2">
          <textarea
           name="message"
           required
           rows={10}
            placeholder="Your Message"
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </div>
      </form>
      
      </section>
    </div>
  )
}

export default page

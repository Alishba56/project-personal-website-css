import Link from 'next/link';
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";




const page = () => {
  return (
    <div>
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
      <div className="social-icon">
          <Link href=''> <FaLinkedin/> </Link>
          <Link href=''> <FaGithub/> </Link>
          <Link href=''> <FaPhoneAlt /> </Link>
          <Link href=''> <MdOutlineEmail/> </Link>
          </div>
      </section>
    </div>
  )
}

export default page

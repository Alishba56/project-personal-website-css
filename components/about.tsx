import React from "react";
import Image from "next/image";
import img from "@/home.jpg";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";


const about = () => {
  return (
    <div>
        <div className='arrow'>
      <MdOutlineKeyboardDoubleArrowDown/>
      </div>
      <section>
        <h1 className="heading">about</h1>
        <div className="about">
            <div className="about-content">
          <h1> Purpose: </h1>
          <p>
            Involves creating the visual elements of a website that users
            directly interact with, focusing on design, layout, and user
            experience. Key Technologies:
          </p>
          <h1> HTML (Hypertext Markup Language): </h1>
          <p>
            The basic structure and content of a webpage, defining elements like
            text, images, and links.
          </p>
          <h1>CSS (Cascading Style Sheets): </h1>
          <p>
            Styles the appearance of the HTML elements, controlling layout,
            colors, fonts, and responsiveness.
          </p>
          <h1>JavaScript:</h1>
          <p>
            {" "}
            Adds interactivity and dynamic elements, such as forms, animations,
            and real-time updates, enhancing user engagement.
          </p>
          </div>
          <Image className="img" src={img} alt="About Image" />
        </div>
      </section>
    </div>
  );
};

export default about;

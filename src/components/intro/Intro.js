import React from 'react';
import './intro.css';
import bg from "../../assets/image.png";

export const Intro = () => {
  return(
  <section id='intro'>
      <div className='introContent'>
        <span className='hello'>
          Hello,
        </span>

        <span className='introText'>
        I'm
        </span>

        <span className='introName'>
          Prentice
          <br/>
          Web Designer
        </span>

    

      </div>

      <img src={bg} alt="Profile Background Image" className="bg" />

  </section>
  )
}

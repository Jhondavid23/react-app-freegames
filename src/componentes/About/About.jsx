import React from 'react'
import image from '../icons/screenshot.png'
import './about.css'
import { FaSearchengin, FaRobot, FaFolderPlus, FaLinkedin} from "react-icons/fa";

function About() {
  const onClick = ()=>{
    <a href="https://www.linkedin.com/in/juan-david-diaz-orozco-8b850a1a7"></a>
  }

  return (
    <section className='section-about'>


      <article className='first-article-about'>
        <div className='first-container-article' >
          <div>
            <h1 className='title-first-article'>Find your game </h1>
            <h1 className='title2-first-article'>In your favorite place</h1>
          </div>
          <img src={image} alt="image" className='img-about' />
        </div>
      </article>

      <article className='second-article-about'>
        <div className='information-about'>
          <h1 className='title-info-about'>What is FREEGAMES all about</h1>
          <p className='text-about'>Is a single page application that allows you to find all the games of your interest in one place, you will find complete information of the game you are looking for, you can go to the main page of the game and if you want you can save in favorites the games that catch your attention.</p>
        </div>
      </article>

      <article className='third-article-about'>
        <div className='div-about'>
          <FaSearchengin className='search-icon-about' />
          <p className='text-icon-about'>Discover games easily and get introduced to new ones. </p>
        </div>
        <div className='div-about'>
          <FaRobot className='search-icon-about' />
          <p className='text-icon-about'>Get personalized recommendations powered by our own algorithm. </p>
        </div>
        <div className='div-about'>
          <FaFolderPlus className='search-icon-about' />
          <p className='text-icon-about'>Manage your games library and add games you want to play. </p>
        </div>
      </article>

      <article className='information-about'>
        <h1 className='title-info-about'>By Juan David Diaz Orozco</h1>
        <p className='text-about'>I have decided to create this project in order to put into practice my skills using React, this experience has been a great learning experience which serves as a basis and starting point for the next ones.
          This project is created using JavaScript, React, React router V6 and Redux Toolkit technologies.

          </p>
          <p className='follow-about'>Follow me:</p>
        <div className='div-about-link'>
          <FaLinkedin className='search-icon-about' />
          
        </div>
        <a href="https://www.linkedin.com/in/juan-david-diaz-orozco-8b850a1a7" className='a-about' target="_blank">Link</a>
      </article>

    </section>
  )
}

export default About
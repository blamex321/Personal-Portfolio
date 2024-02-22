import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hello, my name is <b>Laxman Bankupalle</b> and I am from Bengaluru, India.
            I'm a <b>Full Stack Web Developer</b> and a Third year student pursuing <b>B.Tech in CSE</b>. <br/><br/>
            I have done an internship as a <b>software developer</b> at <b>Snap Smart</b> and I have also worked as a <b>freelancer</b> for a few projects. <br/><br/>
            I love to develop unique projects which will be helpfull. I am currently building different real time projects.<br/><br/>
            With my eyes set on the future, I am on the lookout for <b>opportunities to collaborate</b> with like-minded individuals and businesses who share my passion for technology. <br/> <br/> Embark on a <b>collaborative </b> journey with me, and together, we can bring <b> extraordinary ideas</b> to life!
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Technical Skills</h1>
      <div className='skills'>
        <Skills skill='python'/>
        <Skills skill='cpp'/>
        <Skills skill='java'/>
        <Skills skill='javascript'/>
        <Skills skill='html'/>
        <Skills skill='react'/>
        <Skills skill='node'/>
        <Skills skill='android'/>
        <Skills skill='mysql'/>
        <Skills skill='postgresql'/>
        <Skills skill='mongodb'/>
        <Skills skill='aws'/>
        <Skills skill='git'/>
        <Skills skill='github'/>
        <Skills skill='notion'/>
        <Skills skill='postman'/>
        <Skills skill='docker'/>
        <Skills skill='firebase'/>
        <Skills skill='tailwindCss'/>
        <Skills skill='solidity'/>
      </div>
    </>
  )
}

export default About
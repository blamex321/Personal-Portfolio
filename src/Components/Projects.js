import React from 'react';
import ProjectBox from './ProjectBox';
import img1 from "../images/opuluxe-small.png"
const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox  projectName="Opuluxe Jewllery" />
        <ProjectBox  projectName="FAARAS" />
        <ProjectBox  projectName="Similarity Search" />
      </div>

    </div>
  )
}

export default Projects
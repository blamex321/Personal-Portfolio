import React from 'react';
import {FaGithub} from "react-icons/fa";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    "Opuluxe Jewllery Desc" : "A Freelance project made for a Jewellery Shop. It is a E-commerce application made using React Native and Firebase. The application is still in development.",
    "Opuluxe Jewllery Github": "https://github.com/blamex321/Opuluxe-jewelry",

    "FAARAS Desc" : "",
    "FAARAS Github": "https://github.com/blamex321/FAARAS",

    "Similarity Search Desc" : "",
    "Similarity Search Github": "https://github.com/blamex321/Similarity-Search",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + ' Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + ' Github']} target='_blank' rel="noreferrer">
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox
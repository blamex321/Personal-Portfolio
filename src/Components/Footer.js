import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Laxman Bankupalle</h4>
      
      <div className='footerLinks'>
        <a href="https://github.com/blamex321" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/laxman-bankupalle/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href='mailTo:laxman.bankupalle@gmail.com' target='_blank' rel="noreferrer"><GrMail/></a>
        <a href='https://www.instagram.com/bankulaxman/' target='_blank' rel="noreferrer"><FaInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
    <div className='socialMedia'>
    <a href='https://github.com/Sherdderz'target="_blank" rel="noreferrer"><GithubIcon/></a>
    <a href='https://www.linkedin.com/in/muhammad-rizky-gaez-743022166/'target="_blank" rel="noreferrer"><LinkedInIcon/></a>
    <a href='https://www.facebook.com/gaezrizky/'target="_blank" rel="noreferrer"><FacebookIcon/></a>
    <a href='https://www.instagram.com/rizkygaez/'target="_blank" rel="noreferrer"><InstagramIcon/></a>
    </div>
    <p> &copy; 2023 Muhammad Rizky Gaez</p>
    </div>
  )
}

export default Footer
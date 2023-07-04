import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'> 
    <div className='about'>
      <h2>Hi, I'm Muhammad Rizky Gaez</h2>
      <div className='prompt'>
        <p>I am an eighth-semester student who is interested in programming, especially in Python as a Software Programmer or Back End Developer. </p>
        <div className='socialMedia'>
        <a href='https://www.linkedin.com/in/muhammad-rizky-gaez-743022166/'target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href='https://mail.google.com/mail/u/0/#inbox?compose=VpCqJKjFxfpSfWGczBGQpPxtQFkztLsvRmXjfmntSkJxZcszqQkmRXJFckQKdgksdxdpGPV'target="_blank" rel="noreferrer"><EmailIcon/></a>
        <a href='https://github.com/Sherdderz'target="_blank" rel="noreferrer"><GithubIcon/></a>
        </div>
      </div>
    </div>
    <div className='skills'>
      <h1>Skills</h1>
      <ol className='list'>
        <li className='item'>
          <h2>English</h2>
          <span>I can understand English and capable to write and speak smoothly. I always practice my English by selling goods and services internationally, mostly when I'm doing transactions with buyers I'll use English to communicate.</span>
        </li>
        <li className='item'>
          <h2>Programming</h2>
          <span>I've learned a lot of programming languages such as HTML, CSS, JavaScript, Python, Java, C#, and LUA. 
            For HTML, CSS, and JavaScript I use it to create a simple website called Helmify E-Commerce, 
            YArts to post your own picture, and also this portfolio website using ReactJs framework. 
            For Python, I was an intern at PT Hashmicro Solusi Indonesia as Software Programmer to create, edit, and debug a module using Odoo framework.
            I've also created a simple credit calculation android application using Android Studio with Java language, and for C# I use it to create a simple endless runner 
            game using Unity. And last but not least is LUA, I created a simple cheat script for Naruto x Boruto Ninja Voltage android game to make the character immortal.</span>
        </li>
        <li className='item'>
          <h2>Salesperson</h2>
          <span>
          I've been a salesperson on global marketplace from 2021 until now, and also I've been promoted become forum moderator because of 
          170+ items sold and having good positive feedback. The item that I'm selling is mostly game account.
          </span>
        </li>
        <li className='item'>
          <h2>Microsoft Office</h2>
          <span>
          I've been a salesperson on global marketplace from 2021 until now, and also I've been promoted become forum moderator because of 
          170+ items sold and having good positive feedback. The item that I'm selling is mostly game account.
          </span>
        </li>
      </ol>
    </div>
    </div>
  )
}

export default Home
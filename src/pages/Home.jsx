import React from 'react'
import NavBar from './../components/NavBar'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import css from './../assets/resource01/css.png'
import html from './../assets/resource01/html.png'
import react from './../assets/resource01/react.png'
import spring from './../assets/resource01/spring.png'
import node from './../assets/resource01/node.png'
import firebase from './../assets/resource01/Firebase.png'
import figma from './../assets/resource01/figma.png'
import java from './../assets/resource01/java.png'

export default function Home() {
  return (
    <>
      <NavBar pname='h' colorLinkNavBar="#FFF714" />
      {/* Hero Section */}
      <div className="flex items-center justify-between pt-30 pl-80 pr-80">
        {/* content on left */}
        <div className="flex flex-col gap-2">
          <span className = "text-white text-6xl font-bold">Full Stack Web</span>
          <span className = "text-white text-6xl font-bold">Developer</span>
          <span className = "text-white text-2xl">Hi, I'm ApisiT SAU. A passwionate Full Stack</span>
          <span className = "text-white text-2xl">Web developer base in Thailand</span>
          <div className="flex gap-3 pt-3">
            <FaLinkedinIn className="text-green-500 text-4xl" />
            <FaGithub className="text-green-500 text-4xl" />
          </div>
        </div>
        {/* content on right */}
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMVLh6-YUshrUWF8HjQSxic6nPZwccgG_daH7i7XmGA&s=10" alt="John Doe" className = "w-[450px] h-[450px] object-cover rounded-full" />
        </div>
      </div>
      {/* Text Stack */}
      <div className="flex justify-center">
        <p className="text-white text-2xl font-bold ">
          My Text Stacks
        </p>
      </div>
      {/* Pic of Text Stack */}
      <div className="flex justify-center items-center gap-10 pt-5">
        <img src={html} alt="HTML" />
        <img src={css} alt="CSS"  />
        <img src={node} alt="Node"  />
        <img src={react} alt="React"  />
        <img src={spring} alt="Spring"  />
        <img src={java} alt="Java"  />
        <img src={figma} alt="Figma" />
        <img src={firebase} alt="Firebase"  />
      </div>
    </>
  )
}

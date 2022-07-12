import React from 'react'
import "./about.scss"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

const About = () => {
  const head_tag1 = "<"
  const head_tag2 = "/>"
  return (
    <div className='about'>
      <Navbar />
      <h1 className='heading'><span>arjunSharma.</span>aboutMe()</h1>
      <div className="about_container">

        <div className="about_content">
          <h1>{head_tag1}</h1>
          <p>Hi I’m <span>Arjun Sharma</span> a 20 year old Engineering Student who resides in Hyderabad. I’m a guy who loves
        to live life no holds barred and always seek out towards the world in a
        venturesome manner. I’m a <span>Coder</span>,<span> Calisthenics athlete</span>,
        <span> Charity Worker</span> and an <span>Entrepreneur </span> who loves
        to solve regular day to day problems with modern solutions and keen
        towards revolutionising mankind and making the world a better place.</p>

        <h1>{head_tag2}</h1>
        </div>
        <div className="about_image">
          <img src="./blue_bg.png" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
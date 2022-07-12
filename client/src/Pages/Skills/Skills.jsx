import React from 'react'
import "./skills.scss"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import SkillsCard from '../../components/SkillsCard/SkillsCard'

const Skills = () => {



  const webdev = "webDevelopment </>"
  const other = "other skills"
  return (
    <div className='skills'>
      <Navbar />
      <h1 className='heading'><span>arjunSharma.</span>skills()</h1>

      <div className="skills_container">
        <div className="skills_container_wrapper">



          {/* <h1 className='skill_category'>{webdev}</h1> */}
          <div className="webdev">
            <div className="webdev_wrapper">
            <SkillsCard 
              title="HTML" 
              img_url="./Images/Icons/html.png" 
              level="60%"
            />
            <SkillsCard 
              title="CSS" 
              img_url="./Images/Icons/css.png" 
              level="70%"
            />
            <SkillsCard 
              title="JS" 
              img_url="./Images/Icons/js.png" 
              level="70%"
            />
            <SkillsCard 
              title="Bootstrap" 
              img_url="./Images/Icons/bootstrap.png" 
              level="30%"
            />
            <SkillsCard 
              title="React" 
              img_url="./Images/Icons/react.png" 
              level="55%"
            />
            <SkillsCard 
              title="SASS" 
              img_url="./Images/Icons/sass.png" 
              level="50%"
            />
            <SkillsCard 
              title="Node" 
              img_url="./Images/Icons/node.png" 
              level="85%"
            />
            <SkillsCard 
              title="MongoDB" 
              img_url="./Images/Icons/mongodb.png" 
              level="45%"
            />
            </div>
          </div>



          {/* <h1 className='skill_category'>{other}</h1>
          <div className="other">
            <div className="other_wrapper">
            <SkillsCard 
              title="Typing"
               
              level="Max-86 Avg-52"
            />
            <SkillsCard 
              title="Arduino" 
              level="40%"
            />
            <SkillsCard 
              title="Automation" 
              level="35%"
            />
            <SkillsCard 
              title="Python" 
              level="55%"
            />
            <SkillsCard 
              title="hardwareRepair" 
              level="60%"
            />
            <SkillsCard 
              title="Calesthenics" 
              level="5%"
            />
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Skills
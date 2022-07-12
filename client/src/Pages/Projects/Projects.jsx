import React, {useEffect} from 'react'
import "./projects.scss"
import Navbar from '../../components/Navbar/Navbar'
import Footer from "../../components/Footer/Footer"
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import axios from "axios"
import { useState } from 'react'


const Projects = () => {
  const [project_data, setProject_data] = useState()
  useEffect(() => {
    const getProjects = async () => {
      const res = await axios.get("http://localhost:8000/api/project/projects_data")
      const projects = res.data
      setProject_data(projects)
    }
    getProjects()

  }, [])
  return (
    <div className='projects'>
        <Navbar />
        <h1 className='heading'><span>arjunSharma.</span>projects()</h1>
        <div className="projects_container">
        <div className="projectCardWrapper">
          {project_data?.map((project, index) => (
            <ProjectCard 
            key={index}
            title={project.title}
            img_url={project.img_url}
            desc={project.desc}
            tech_stack={project.tech_stack}
            git_link={project.git_link}
            demo_link={project.demo_link}
            />

          ))}
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Projects
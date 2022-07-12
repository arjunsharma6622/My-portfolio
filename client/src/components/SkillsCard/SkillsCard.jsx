import React from 'react'
import "./skillsCard.scss"

const SkillsCard = ({title, img_url, level}) => {
    const start = "<"
    const end = "/>"
  return (
    <div className='skillsCard'>
        {/* <h1 className='start'>{start}</h1> */}
        <div className="skills_wrapper">
            <div className="skill_title">
                {title}
            </div>

            {img_url && (
            <div className="skills_img">

            <img src={img_url} alt="" />
        </div>
            )}

            <div className="level">
                <span>Level</span>
                <p>{level}</p>
            </div>
        </div>
        {/* <h1 className='end'>{end}</h1> */}

    </div>
  )
}

export default SkillsCard
import React from "react";
import "./projectCard.scss"
import {OpenInNew, GitHub} from "@mui/icons-material"

const ProjectCard = ({title, img_url, tech_stack, desc, git_link, demo_link}) => {
  return (
    <div className="projectCard">
      <div className="projectComponentsWrapper">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="project_img">
          <img
            src={`./Images/Projects/${img_url}`}
            alt=""
          />
        </div>
        <div className="project_links">
          <a
            target="_blank"
            className="icons"
            href={git_link}
          >
            <span>
              <GitHub style={{ fontSize: "25px" }} />
            </span>
          </a>
          <a
            target="_blank"
            className="icons"
            href={demo_link}
          >
            <span>
              <OpenInNew style={{ fontSize: "25px" }} />
            </span>
          </a>
        </div>
        <div className="techStack">
          <span className="main_head">Tech Stack</span>
          <p>{tech_stack}</p>
        </div>
        <div className="desc">
          <span className="main_head">Description</span>
          <p>{desc}</p>
          
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;

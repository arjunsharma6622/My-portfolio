import React from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";
import {LinkedIn, GitHub, Instagram} from "@mui/icons-material"

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const name = "< arjunSharma />"

  return (
    <div className="navbar">
      <div className="navbar_wrapper">

        <div className="left">
          <a
              target="_blank"
              className="icons"
              href="https://github.com/Arjun27sharma"
          >
              <span>
                <GitHub style={{ fontSize: "30px" }} />
              </span>
          </a>

          <a
              target="_blank"
              className="icons"
              href="https://www.linkedin.com/in/arjun-sharma-250906226/"
          >
              <span>
                <LinkedIn style={{ fontSize: "30px" }} />
              </span>
          </a>

          <a
              target="_blank"
              className="icons"
              href="https://www.instagram.com/arjunsharma_6622/"
          >
              <span>
                <Instagram style={{ fontSize: "30px" }} />
              </span>
          </a>
        </div>

        <div className="middle">
          <span>{name}</span>
        </div>

        <div className="right">
          <Link to="/" className={splitLocation[1] === "" ? "link active" : "link"} >
          .aboutMe()
          </Link>

          <Link to="/skills" className={splitLocation[1] === "skills" ? "link active" : "link"} >
            .skills()
          </Link>

          <Link to="/projects" className={splitLocation[1] === "projects" ? "link active" : "link"} >
            .projects()
          </Link>

          <Link to="/work" className={splitLocation[1] === "work" ? "link active" : "link"} >
            .work()
          </Link>

          <Link to="/contact" className={splitLocation[1] === "contact" ? "link active" : "link"} >
            .contact()
          </Link>
        </div>



       </div>
       
    </div>
  );
};

export default Navbar;

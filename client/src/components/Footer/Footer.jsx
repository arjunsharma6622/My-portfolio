import React from 'react'
import "./footer.scss"
import {LinkedIn, GitHub, Instagram} from "@mui/icons-material"



const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_wrapper">

        <div className="top">
        <a
              target="_blank"
              className="icons"
              href="https://github.com/Arjun27sharma"
          >
              <span>
                <GitHub style={{ fontSize: "20px" }} />
              </span>
          </a>

          <a
              target="_blank"
              className="icons"
              href="https://www.linkedin.com/in/arjun-sharma-250906226/"
          >
              <span>
                <LinkedIn style={{ fontSize: "20px" }} />
              </span>
          </a>

          <a
              target="_blank"
              className="icons"
              href="https://www.instagram.com/arjunsharma_6622/"
          >
              <span>
                <Instagram style={{ fontSize: "20px" }} />
              </span>
          </a>
        </div>

        <div className="bottom">
      © 2022 arjunSharma
        </div>
      </div>
    </div>
  )
}

export default Footer
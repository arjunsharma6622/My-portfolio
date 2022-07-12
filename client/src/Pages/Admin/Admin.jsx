import "./admin.scss"
import { useRef, useState } from "react"
import axios from "axios"
import {CircularProgress} from "@material-ui/core"
import Navbar from "../../components/Navbar/Navbar"

function Admin() {
  const title = useRef()
  const img_url = useRef()
  const tech_stack = useRef()
  const desc = useRef()
  const git_link = useRef()
  const demo_link = useRef()

  const [isSuccess, setIsSuccess] = useState(false)
  const [isFailure, setIsFailure] = useState(false)
  const [isClicked, setIsClicked] = useState(false)


  const handleClick = async (e) => {
    e.preventDefault()
    const project = {
      "title": title.current.value,
      "img_url": img_url.current.value,
      "tech_stack": tech_stack.current.value,
      "desc": desc.current.value,
      "git_link": git_link.current.value,
      "demo_link": demo_link.current.value
    }


    try {
      await axios.post("http://localhost:8000/api/project/register", project);
      setIsSuccess(true)
    } catch (err) {
      setIsFailure(true)
      console.log(err);
    }

    setTimeout((e) => {
      window.location.reload()
      e.target.reset()
    }, 3000);

  }



  return (
    <div className="Admin">
      <Navbar />

      <h1 className="heading">Projects Details</h1>

      <div className="message">
        {isSuccess ? (
          <div className="success">
            <h1>Your Details have been saved successfully</h1>        
          </div>
        ) : isFailure ? (
          <div className="failure">
          <h1>Error : Your details have not saved, Please enter your details again and submit</h1>
        </div>
        ) : ("")}
      </div>

      <form onSubmit={handleClick} className="form">

        <p>Project Title</p>
        <input required={true} type="text" placeholder="ex : Netflix Clone" ref={title} />
        <p>Image Name</p>
        <input required={true} type="text" placeholder="ex : netflix.png" ref={img_url} />
        <p>Tech Stack</p>
        <input required={true} type="text" placeholder="ex : MongoDB, Express" ref={tech_stack} />

        <p>Description</p>
        <input required={true} type="text" placeholder="desc" ref={desc} />

        <p>Git Link</p>
        <input required={true} type="text" placeholder="git link" ref={git_link} />
        <p>Demo Link</p>
        <input required={true} type="text" placeholder="demo link" ref={demo_link} />

        <button type="submit" onClick={() => { setIsClicked(true) }}>
          {isClicked ? <CircularProgress style={{ width : "20px", height : "20px", color: "white"}}/> : "Submit"}
        </button>

      </form>




    </div>
  );
}

export default Admin;

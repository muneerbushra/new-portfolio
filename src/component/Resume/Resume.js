import React from "react"


import "./Resume.css"
import resume from "../pic/resume.pdf";
const Resume = () => {
   
   
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>3+ YEARS OF EXPERIENCE</h4>
            <h1>My Resume</h1>
          </div>
<div class="dbtn">
<a target="_blank" href={resume} download={Resume} class="btn">Download Resume</a>

</div>
       
         
       
        </div>
      </section>
    </>
  )
  }

export default Resume

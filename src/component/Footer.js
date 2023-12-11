import React from "react"
import logo1 from "./pic/logo.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img src={logo1} alt='' />
          </div>
          <p>© 2023. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer

import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

const Footer = () => {
  return (
    <div className='footer'>
        <Link to="mailto:paramtomar01@gmail.com" target="_blank" style={{textDecoration:"none", color:"#5d5757", marginRight:"50px", marginLeft:"20px"}}><i className="fa fa-envelope"></i> Contact </Link>
        <Link to="https://github.com/Param129" target="_blank" style={{textDecoration:"none", color:"#5d5757", marginRight:"50px"}}><i className="fa fa-github"></i> Github</Link> 
    </div>
  )
}

export default Footer

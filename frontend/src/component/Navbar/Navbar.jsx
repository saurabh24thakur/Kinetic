import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div className='w-[90%] border-2 flex justify-between p-3 mt-3'> 
      <div className="logo">
        <h1 className='logo_content text-white font-bold text-3xl '>Kinetic</h1>
      </div>

      <div className="nav-button">
       
       
      <Link to="/workspace">
  <button className="text-2xl border-2 p-2 rounded-3xl bg-yellow-300 border-black font-semibold hover:bg-yellow-400 transition-colors">
    Get Started
  </button>
</Link> 
        
      </div>
    </div>
  )
}

export default Navbar

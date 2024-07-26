import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
    <div className="mypage__navbar">
      <div className="mypage__navbar-links">
        <div className="mypage__navbar-links_logo">
          <a>Here gonna be logo</a>
        </div>
        <nav className="mypage__navbar-links_container">
          <ul className="mypage__navbar-links_container_list">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Blog</a></li>
            <li><a>Projects</a></li>
            <li><a>Contacts</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default navbar
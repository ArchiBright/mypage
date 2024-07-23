import React from 'react'

const navbar = () => {
  return (
    <div className="mypage__navbar">
      <div className="mypage__navbar-links">
        <div className="mypage__navbar-links_logo">
          <img src="#" alt="logo" />
        </div>
        <nav className="mypage__navbar-links_container">
          <ul className="mypage__navbar-links_container_list">
            <li className="mypage__navbar-links_container_list_item">Home</li>
            <li className="mypage__navbar-links_container_list_item">About</li>
            <li className="mypage__navbar-links_container_list_item">Projects</li>
            <li className="mypage__navbar-links_container_list_item">Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default navbar
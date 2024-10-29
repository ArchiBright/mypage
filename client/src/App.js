import React from 'react'
import './App.css';

import Navbar from './components/navbar/navbar'
import Blog from './containers/blog/blog'
import Player from './components/player/player';

document.addEventListener('mousemove', function(e) {
  const spotlight = document.querySelector('.spotlight');
  const x = e.clientX;
  const y = e.clientY;
  spotlight.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 204, 255, 0.09) 0%, rgba(255, 255, 255, 0) 30%)`;
});

const App = () => {
  return (
    <div className="App">
      <div className="spotlight"></div>
        <Navbar />
        <Blog />
        <Player />
        {/* <Header />
        <Technologies />
        <FrontEndApps />
        <FullStackApps />
        <OtherProjects />
        <Footer /> */}
    </div>
  )
}

export default App
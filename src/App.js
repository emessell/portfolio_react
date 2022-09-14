import React from 'react';
import './css/Global.scss';
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Blog from "./components/Blog";
import Work from "./components/Work";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="background">
      <Nav/>
      <Intro/>
      <Blog/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;

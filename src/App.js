import React from 'react';
import './css/Global.scss';
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Blog from "./components/Blog";
import Work from "./components/Work";


function App() {
  return (
    <div className="background">
      <Nav/>
      <Intro />
      <Blog />
      <Work />
    </div>
  );
}

export default App;

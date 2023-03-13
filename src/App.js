import React, { useState } from "react";

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {

  const [mode, setMode] = useState('light');

  const changeMode = ()=> {
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#070c0f'

    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Navbar title="Text Analyzer" aboutPage="About Page" mode = {mode} changeMode = {changeMode} />
      {/* <Navbar /> */}
      <div className="container">
        <TextForm heading="Enter The Text To Convert 👇" mode = {mode} />
        {/* {<About />} */}
      </div>

    </>
  );
}

export default App;


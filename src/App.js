import React, { useState } from "react";

import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Route, Router, Routes } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light');

  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#070c0f'

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>

      <Navbar title="Text Analyzer" aboutPage="About Page" mode={mode} changeMode={changeMode} />
      {/* <Navbar /> */}


      <div className="container">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Enter The Text To Convert 👇" mode={mode} />} />
          <Route exact path="/about" element={<About />} />
          {/* use exact path= to match exact url
          eg: /home ---> component 1
              /home/form ---> component 2
              if we just use path = /home/form then it will render component 1(partial mapping) */}

        </Routes>
      </div>

    </>
  );
}

export default App;


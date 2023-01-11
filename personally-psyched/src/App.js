import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route }  from "react-router-dom";
import Footer from "./components/Footer";;


function App() {

  return (

    <div className="App">

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;  


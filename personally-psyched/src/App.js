import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Volunteers from "./components/Volunteers";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import { Routes, Route }  from "react-router-dom";
import Footer from "./components/Footer";;


function App() {

  return (

    <div className="App">

      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/events" element={<Events/>} />
          <Route path="/volunteers" element={<Volunteers/>} />
          <Route path="/faqs" element={<FAQs/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;  


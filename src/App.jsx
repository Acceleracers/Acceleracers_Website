import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import Home2 from './Pages/home/home2';
import CrowdFunding from './Pages/crowd_funding/CF';
import AboutFs from './Pages/About_FS/aboutfs';
import Sponsors from './Pages/Sponsors/sponsors';
// import Contact from './Pages/ContactUs/contact'
import History from './Pages/History/history';
// import { ListProvider } from './components/ListContext';  // Import the ListProvider
function App() {
  return (
    <>
        <Routes>
          <Route path="/" exact element={<Home2 />} />
          <Route path="/crowdfunding" exact element={<CrowdFunding />} />
          <Route path="/About_FS" exact element={<AboutFs />} />
          <Route path="/Sponsors" exact element={<Sponsors />} />
          <Route path="/Legacy" exact element={<History />} />
          {/* <Route path="/Contact_Us" exact element={<Contact />} /> */}
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
    </>
  );
}

export default App;
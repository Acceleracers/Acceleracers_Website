import React, { useState, useContext, useEffect } from "react";
import "./base_page.css";
import NavigationBar from "./nav_bar";
const BasePage = ({ maincontent }) => {
    
      return (
        <div className="app" style={{display:'flex', flexDirection:'column'}}>
          <NavigationBar />
          <div className="maincontent_base" style={{width:"100%"}}>
            {maincontent}
          </div>

        </div>
      );
  

  
};

export default BasePage;
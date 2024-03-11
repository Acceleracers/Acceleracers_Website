import React from 'react'
import "./preloader.css"
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Row, Col, Button, Carousel } from 'react-bootstrap';
import BasePage from './base_page';

const Preloader = () => {
    
    const maincontent = (
        <div className="preloader scrollable">
            <img src="assets\Acceleracers_Logo_Light.png" style={{width:'100px'}} alt="" />
            <object type="image/svg+xml" data="assets/f1.svg" width="300" height="300"></object>
        </div>
        
    )
    return <BasePage maincontent={maincontent} />;
}
export default Preloader
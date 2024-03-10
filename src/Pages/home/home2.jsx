import React from 'react'
import "./home.css"
import { useState, useEffect, useRef } from 'react';
import { Row, Col, Button, Carousel } from 'react-bootstrap';
import BasePage from '../../components/base_page';

const Home2 = () => {

    const sponsors = [
        {
            name: 'Tesla',
            icon: 'assets/Sponsors/tesla.png',
            background:'transparent'
        },
        {
            name: 'AutoDesk',
            icon: 'assets/Sponsors/Autodesk2.svg',
            background:'white'
        },
        {
            name: 'Ketki Wiring Technologies',
            icon: 'assets/Sponsors/Ketki.jpg',
            background:'transparent'
        },
        {
            name: 'Flauta Customs',
            icon: 'assets/Sponsors/Flauta.png',
            background:'transparent'
        },
        {
            name: 'Raghasai Technologies',
            icon: 'assets/Sponsors/Raghasai.png',
            background:'white'
        },
        {
            name: 'Rapid Harness',
            icon: 'assets/Sponsors/rapid-harness.png',
            background:'transparent'
        },
        {
            name: 'Bender',
            icon: 'assets/Sponsors/Bender.svg',
            background:'white'
        },
        {
            name: 'Belose',
            icon: 'assets/Sponsors/Belose.png',
            background:'transparent'
        },
        {
            name: 'Infinity Industries',
            icon: 'assets/Sponsors/infinity-machining.png',
            background:'white'
        }
    ]

    const maincontent = (
        <div className="scrollable" style={{padding:'10px'}}>
            <h1>Team Acceleracers Electric</h1>
            <img className='resp_img' src="assets/home/home_page_1.jpg" alt="" />
            <Row className='heading_row'>
                <h1>About Us</h1>
            </Row>
            <Row>
                <Col md={6} xs={12}>
                    <p>
                        Acceleracers is the official Formula Student team of MIT
                        World Peace University, Pune. We were established in
                        2011 and competes at many International and National
                        motor sporting events. 
                        <br/><br/>Our team structure consists Of a 3-tier
                        system spread across 4 engineering disciplines, with our aim
                        being to finish in the top tiers of the global Formula Student
                        community. 
                        <br/><br/>
                        Our continuous Research and Development in
                        the field of automobile and resource management skills
                        enables us to make a race car with the utmost Engineering
                        finesse. Every team member has imbibed in themselves
                        virtues of patience, perseverance and precision, the
                        necessities for an organization to be successful, which is our
                        aim. Apart from the technicalities Of making a car, we also
                        expose ourselves to various non-technical aspects like
                        sponsorship, marketing, finance and media.
                    </p>
                </Col>
                <Col md={6} xs={12}>
                    <img src="assets/home/Team_pic.jpg" style={{width:'100%'}} alt="" />
                </Col>
            </Row>

            <Row className='heading_row'>
                <h1>Team Structure</h1>
            </Row>
            <Row>
                <Col md={6} xs={12}>
                    <img style={{width:'100%'}} src="assets/home/Team Structure.png" alt="" />
                </Col>
                <Col md={6} xs={12}>
                <p>Team Acceleracers boasts a robust management structure, ensuring effective leadership and coordination. 
                    At the helm, we have our Captain and Vice Captain with unwavering dedication. 
                    The technical aspects are overseen by the Mechanical Lead and Electrical Lead, each bringing their expertise to the forefront. 
                    Supported by Department Leads who specialize in various domains, our management team fosters a collaborative environment. 
                    In addition, our Junior Design Engineers contribute fresh perspectives and enthusiasm, collectively driving the team towards success in Formula Student competitions.</p>
                </Col>
            </Row>

            <Row className='heading_row'>
                <h1>Our Sponsors</h1>
            </Row>
                <Row className="scroll-row">
                    {sponsors.map((item, index)=>(
                        <div key={index} className="company-col">
                        <img src={item.icon} alt="" className="company-logo" style={{borderRadius:'10px',backgroundColor: item.background,padding:'10px'}}/>
                        <h3 style={{width:'100%', textAlign:'center'}} className="company-name">{item.name}</h3>
                        </div>
                    ))}                    
                </Row>

                


        </div>
        
    )
    return <BasePage maincontent={maincontent} />;
}
export default Home2
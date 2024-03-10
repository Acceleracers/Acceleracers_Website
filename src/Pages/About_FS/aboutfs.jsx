import React from 'react'
import "./aboutfs.css"
import { useState, useEffect, useRef } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal";
import BasePage from '../../components/base_page';
import Footer from './../../components/footer';


const AboutFs = () => {
    const maincontent = (
        <div className='aboutfs'>
        <h1> About Formula Student</h1>
        <div className='scrollable'>
        <Fade direction='right'>
            <div className='one_topic' style={{padding:'20px'}}>
                <Row>
                    <Col xs={12} md={6}>
                        <img style={{width:'100%'}} src="assets/AboutFS/FB24.jpg" alt="" />
                    </Col>
                    <Col xs={12} md={6}>
                        <h3>The Competition</h3>
                        <p>Teams in the competition undergo evaluation from
                            industry experts, who assess their engineering design,
                            marketing plans, and manufacturing strategy. Following a
                            successful technical inspection of the vehicle, teams must
                            navigate a series of dynamic track events focused on lap
                            times. <br/>Throughout a combination of static and dynamic
                            events, each team has the opportunity to accumulate a
                            total of 1000 points. This evaluation process also entails
                            providing evidence of their vehicle's efficiency.</p>
                    </Col>
                </Row>
            </div>
            
        </Fade>
        <Fade direction='left'>
            <div className='one_topic' style={{padding:'20px'}}>
                <Row style={{width:'100%'}}>
                    <Col>
                    <Row><h3 style={{width:'100%',textAlign:'Center'}}>Competition is Divided Into 2 Segments</h3></Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <h6 style={{width:'100%',textAlign:'Center'}}>Statics (325 points)</h6>
                            <p style={{width:'100%',textAlign:'Justify'}}>The Formula Bharat competition acquaints students
                                with the interdisciplinary nature of the automotive
                                industry. covering technical. economic. and
                                communication skills. The three static events. focusing
                                on design. construction, marketing. and pricing,
                                require collaboration and expertise from various
                                disciplines. Teams can earn up to 325 points out of
                                1,000 in these events.The
                                evaluation is done by experienced experts from the
                                automobile, motorsport, and supply industries.
                            </p>
                        </Col>
                        <Col xs={12} md={6}>
                            <h6 style={{width:'100%',textAlign:'Center'}}>Dynamics (675 Points)</h6>
                            <p style={{width:'100%',textAlign:'Justify'}}>
                            In addition to the static events, the on-track
                            performance of the vehicles will be put to test
                            during the Dynamic events. The dynamic event
                            test assesses the car's capabilities in terms of
                            maximum longitudinal and lateral acceleration. race
                            performance, efficiency. and endurance.<br/>
                            There are 5 Dynamic Events- Acceleration, SkidPad, Autocross, Endurance and Efficiency
                            </p>
                        </Col>
                    </Row>
                        
                    </Col>
                </Row>
            </div>
        </Fade>
            
        
        <div className='one_topic' style={{padding:'20px'}}>
                <Row style={{height:'fit-content'}}>
                    
                    <Col xs={12} md={6}>
                    <Fade direction='left' delay={100} >
                        <h3>Static Events</h3>
                        <h5>1) Engineering Design Event </h5>
                        <p>
                            The design event aims to assess the engineering process and
                            dedication invested by students in creating a vehicle that
                            aligns With the competition's objectives.
                        </p>
                        <h5>2) Cost & Manufacturing</h5>
                        <p>
                            The goal of the cost and manufacturing
                            event is to assess the team's comprehension
                            of manufacturing processes and the costs
                            involved in building a prototype race car.
                            This involves making trade-off decisions
                            between content and cost, as well as
                            understanding the distinctions between
                            prototype andmass production.
                        </p>
                        <h5>3) Buisness Plan Presentation</h5>
                        <p>
                            The purpose of the BPP is to assess the team's capacity to
                            formulate and present a comprehensive business model that
                            illustrates the potential for their product - a prototype race
                            car - to be a lucrative business venture.
                        </p>
                        </Fade>
                    </Col>
                    <Col xs={12} md={6}>
                        <Fade direction='right'> <img src="assets/AboutFS/statics.png" style={{width:'100%'}} alt="" /></Fade>
                    </Col>
                </Row>
            </div>

            <div className='one_topic' style={{padding:'20px'}}>
                <Row style={{height:'fit-content'}}>
                <Col xs={12} md={6}>
                    <Fade direction='left'> <img src="assets/AboutFS/dynamics.jpg" style={{width:'100%'}} alt="" /></Fade>
                </Col>
                    <Col xs={12} md={6}>
                    <Fade direction='right' delay={100} >
                        <h3>Dynamic Events</h3>
                        <h5>1) Acceleration </h5>
                        <p>
                            The acceleration course is a straight line
                            with a length of 75 m from starting line to
                            finish line.
                        </p>
                        <h5>2) SkidPad</h5>
                        <p>
                            The skidpad course consists of two pairs of concentric circles
                            in a figure of eight pattern. 
                        </p>
                        <h5>3) Autocross</h5>
                        <p>
                            The autocross track layout is a handling course built
                            to contain straights, constant turns, hairpins. slaloms.
                            chicanes etc. The length of the autocross track is less
                            than 1.5 km.
                        </p>
                        <h5>4) Endurance</h5>
                        <p>
                            The endurance track is a closed lap circuit built similarly to an autocross
                            track. The length of one tap of the endurance track is approximately 1 km.
                            The length of the complete endurance is approximately 22 km.
                        </p>
                        <h5>5) Efficiency</h5>
                        <p> Endurance energy is calculated as
                            the time integrated value of the measured voltage multiplied by
                            the measured current logged by the energy meter</p>
                        </Fade>
                    </Col>
                    
                </Row>
            </div>
        <Footer/>


        </div>
        </div>
        
    )
    return <BasePage maincontent={maincontent} />;
}
export default AboutFs
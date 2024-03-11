import React from 'react'
import "./aboutfs.css"
import { useState, useEffect, useRef } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Fade } from "react-awesome-reveal";
import BasePage from '../../components/base_page';
import Footer from './../../components/footer';
import Preloader from '../../components/preloader';


const AboutFs = () => {
    const [isloaded, setisloaded] = useState(false)
    const [competition, setCompetition] = useState("")
    const [statics, setstatics] = useState("")
    const [dynamics, setdynamics] = useState("")
    const [cost, setcost] = useState("")
    const [EngineeringDesign, setEngineeringDesign] = useState("")
    const [BuisnessPlan, setBuisnessPlan] = useState("")
    const [Acceleration, setAcceleration] = useState("")
    const [SkidPad, setSkidPad] = useState("")
    const [Autocross, setAutocross] = useState("")
    const [Endurance, setEndurance] = useState("")
    const [Efficiency, setEfficiency] = useState("")

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbyiBEva25ViD46Wpl59-j6DYTla88wv73B57y3S8EFAugvJYVZW-DDbIDkcwiz0yJPE/exec?page=AboutFS');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            setCompetition(responseData[0][1])
            setstatics(responseData[1][1])
            setdynamics(responseData[2][1])
            setcost(responseData[3][1])
            setEngineeringDesign(responseData[4][1])
            setBuisnessPlan(responseData[5][1])
            setAcceleration(responseData[6][1])
            setSkidPad(responseData[7][1])
            setAutocross(responseData[8][1])
            setEndurance(responseData[9][1])
            setEfficiency(responseData[10][1])
            setisloaded(true)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData();
      }, []);
    while (!isloaded){

        return <Preloader />;
    }
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
                        <p>{competition}</p>
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
                            <p style={{width:'100%',textAlign:'Justify'}}>
                                {statics}
                            </p>
                        </Col>
                        <Col xs={12} md={6}>
                            <h6 style={{width:'100%',textAlign:'Center'}}>Dynamics (675 Points)</h6>
                            <p style={{width:'100%',textAlign:'Justify'}}> 
                            {dynamics}
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
                        <p>{EngineeringDesign}
                        </p>
                        <h5>2) Cost & Manufacturing</h5>
                        <p> {cost}
                        </p>
                        <h5>3) Buisness Plan Presentation</h5>
                        <p> {BuisnessPlan}
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
                        <p> {Acceleration}
                        </p>
                        <h5>2) SkidPad</h5>
                        <p> {SkidPad}
                        </p>
                        <h5>3) Autocross</h5>
                        <p>{Autocross}
                        </p>
                        <h5>4) Endurance</h5>
                        <p> {Endurance}
                        </p>
                        <h5>5) Efficiency</h5>
                        <p>{Efficiency}</p>
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
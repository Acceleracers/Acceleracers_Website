import React from 'react'
import "./sponsors.css"
import { useState, useEffect, useRef } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import BasePage from '../../components/base_page';
import { Rotate, Fade, Bounce } from 'react-awesome-reveal'
import Footer from './../../components/footer';


const Sponsors = () => {
    
    const maincontent = (
        <div style={{backgroundColor:'white'}}>
            <h1 style={{color:'black'}}> Our Sponsors</h1>
        <div className='scrollable' style={{overflowX:'hidden',overflowY:'auto', backgroundColor:'white', padding:'20px', textAlign:'left'}}>

            <Row className='sponsors_main'>

                <Col md={6} xs={12} style={{padding:'10px'}}>
                    <a href="https://www.tesla.com/" target='_blank'>
                    <Fade>
                    <img className='tesla' style={{margin:'auto',height:'100%'}} src="assets/Sponsors/tesla.png" alt="" />
                    </Fade>
                    </a>
                </Col>

                <Col md={6} xs={12} style={{ borderRadius:'10px', padding:'30px'}}> {/*style={{backgroundColor:'white'}}*/}
                <a href="https://www.autodesk.in/" target='_blank'>
                    <Fade><img className='autodesk' style={{height:'100%'}} src="assets/Sponsors/Autodesk2.svg" alt="" /></Fade>
                    </a>
                </Col>
            </Row>
<Fade cascade ={true}>
            <Row style={{height:'fit-content'}} className='sponsors_2'>
                <Col md={4} xs={6} className='icon_cust'>
                    <a href="https://ketki-wiretech.com/" target='_blank'><img style={{width:'100%'}} src="assets/Sponsors/Ketki.jpg" alt="" /></a>
                </Col>

                <Col md={4} xs={6} className='icon_cust'>
                    <a href="https://www.flautacustoms.com/" target='_blank'><img style={{width:'100%'}} src="assets/Sponsors/Flauta_dark.png" alt="" /></a>
                </Col>
                <Col md={4} xs={6} className='icon_cust' >{/*style={{backgroundColor:'white'}}*/} 
                    <a href="#" target='_blank'><img style={{width:'100%'}} src="assets/Sponsors/Raghasai.png" alt="" /></a>
                </Col>
                <Col md={4} xs={6} className='icon_cust'>
                    <a href="https://rapidharness.com/" target='_blank'><img style={{width:'100%'}} src="assets/Sponsors/rapid-harness.png" alt="" /></a>
                </Col>
                <Col md={4} xs={6}  className='icon_cust' > {/*style={{backgroundColor:'white'}}*/}
                    <a href="#" target='_blank'><img style={{width:'100%'}} src="assets/Sponsors/Bender.svg" alt="" /></a>
                </Col>
                <Col md={4} xs={6} className='icon_cust' >
                    <a href="#" target='_blank'><img style={{width:'100%'}} src="assets/Sponsors/Belose.png" alt="" /></a>
                </Col>
                <Col md={4} xs={6} className='icon_cust' >{/*style={{backgroundColor:'white'}}*/}
                    <a href="#" target='_blank'><img style={{width:'100%'}} src="assets/Sponsors/infinity-machining.png" alt="" /></a>
                </Col>
            </Row>
            </Fade>
            {/* <Row>
                <h1 style={{width:'100%', textAlign:'center'}}>Want To Sponsor Us?</h1>
            </Row>
            <Row>
                <h3 style={{width:'100%'}}>Contact us at:</h3>
                <p style={{width:'100%'}}>Email: acceleracers@mitwpu.edu.in</p>
                
                <Col md={6} xs={12}>
                    <h5>Team Captain</h5>
                    <p>Kaustubh Borkhade <br/>Contact No: +91 9920366508<br/>Email Id: acceleracers.kaustubh@gmail.com</p>
                </Col>
                <Col md={6} xs={12}>
                    <h5>Electric Powertrain Engineer</h5>
                    <p>Dipesh Sharma <br/>Contact No: +91 9638311113<br/>Email Id: acceleracers.dipesh@gmail.com</p>
                </Col>
                
            </Row> */}
            <Footer/>
        </div>
        </div>
    )
    return <BasePage maincontent={maincontent} />;
} 
export default Sponsors
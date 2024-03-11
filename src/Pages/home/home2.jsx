import React from 'react'
import "./home.css"
import { useState, useEffect, useRef } from 'react';
import { Row, Col, Button, Carousel } from 'react-bootstrap';
import BasePage from '../../components/base_page';
import Footer from './../../components/footer';
import Preloader from '../../components/preloader';

const Home2 = () => {
    const [isloaded, setisloaded] = useState(false)
    const [aboutUs, setAboutus] = useState("")
    const [sponsors, setSponsors] = useState("")
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbyiBEva25ViD46Wpl59-j6DYTla88wv73B57y3S8EFAugvJYVZW-DDbIDkcwiz0yJPE/exec?page=Home');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            setAboutus(responseData[0][1])
            setSponsors(JSON.parse(responseData[1][1]))
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
        <div className="scrollable" style={{padding:'10px'}}>
            <h1>Team Acceleracers Electric</h1>
            {/* <img className='resp_img' src="assets/home/home_page_1.jpg" alt="" /> */}
            <img className='resp_img' src="https://lh3.googleusercontent.com/drive-viewer/AKGpihY0eVjlWPO3m7_tK4UgkZYqIHO85YknWRrhUJ71hmLZU_Sbp5fDr-kYCSF49sNKpOUC_a-x76zQQiX35D-FSOMUpeOrTA=s1600" alt="" />
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

            {/* <Row className='heading_row'>
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
            </Row> */}

            <Row className='heading_row' style={{margin:'20px 0px'}}>
                <h1>Our Sponsors</h1>
            </Row>
                <Row className="scroll-row">
                    {sponsors.map((item, index)=>(
                        <div key={index} className="company-col">
                            <a href={item.link} target="_blank">
                            <img src={item.icon} alt="" className="company-logo" style={{borderRadius:'10px',backgroundColor: item.background,padding:'10px'}}/>
                            </a>
                        {/* <h3 style={{width:'100%', textAlign:'center'}} className="company-name">{item.name}</h3> */}
                        </div>
                    ))}                    
                </Row>

            <Footer/>


        </div>
        
    )
    return <BasePage maincontent={maincontent} />;
}
export default Home2
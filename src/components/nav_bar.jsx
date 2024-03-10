import React from 'react';
import { Navbar, Nav, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed
import "./nav_bar.css"

const NavigationBar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/"><img src="assets\Acceleracers_Logo_Light.png" alt="logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          
<Nav.Link as={Link} to="/">Home</Nav.Link>
          
          
<Nav.Link as={Link} to="/About_FS">About Formula Student</Nav.Link>
          
          
{/* <Nav.Link as={Link} to="/crowdfunding">Crowd Funding</Nav.Link> */}
          
          
<Nav.Link as={Link} to="/Sponsors">Sponsors</Nav.Link>
          
          
<Nav.Link as={Link} to="/Legacy">Our Legacy</Nav.Link>
          
          
{/* <Nav.Link as={Link} to="/Contact_Us">Contact Us</Nav.Link> */}
          

          
<Nav.Link className='mob' as={Link} to="https://www.youtube.com/@acceleracersmit"><img src="assets/youtube.png" alt="" style={{width:'30px'}}/></Nav.Link>
          
          
<Nav.Link className='mob' as={Link} to="https://www.facebook.com/team.acceleracers/"><img src="assets/FB.png" alt="" style={{width:'30px'}}/></Nav.Link>
          
          
<Nav.Link className='mob' as={Link} to="https://www.instagram.com/team.acceleracers/"><img src="assets/Instagram.png" alt="" style={{width:'30px'}}/></Nav.Link>
<Nav.Link className='mob' as={Link} to="https://www.linkedin.com/company/acceleracers/"><img src="assets/linkedin.png" alt="" style={{width:'30px'}}/></Nav.Link>
          
          
          
          
          
          
          
  
          
          
          

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

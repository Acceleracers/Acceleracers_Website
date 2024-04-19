import React, { useState, useContext, useEffect } from "react";
import "./footer.css";
import { Row ,Col, Container, Form, Button } from 'react-bootstrap';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        reason: '',
        message: ''
      });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //https://docs.google.com/forms/d/e/1FAIpQLScAFRwZRuXehuFSArfEU1dMzjfl7FXdbzl7erPgSR2iulBJcQ/viewform?usp=pp_url&entry.352767133=1
        //&entry.1631594129=2&entry.450604350=3&entry.2094298405=Other&entry.186951659=1234
        const formData = new FormData();
        formData.append('entry.2116862853', e.target.name.value); 
        formData.append('entry.1973359602', e.target.email.value); 
        formData.append('entry.1722665005', e.target.reason.value); 
        formData.append('entry.797260817', e.target.message.value); 
        formData.append('entry.214639578', e.target.companyName.value);
        fetch('https://docs.google.com/forms/d/e/1FAIpQLSfn0Ls2XCKMHkjYIqdmOTDtcZbYJ_77yjixJvu15n2AqdoR6w/formResponse?', {
          method: 'POST',
          body: formData
        })
        .then(response => {
          if (response.ok) {
            console.log('Form submitted successfully');
          } else {
            console.error('Form submission failed');
          }
        })
        .catch(error => {
          console.error('Error submitting form:', error);
        });
        // setTimeout(() => {
        //   var currentLocation = window.location.href;
        //   window.location.href = currentLocation;
        // }, 2000);
      };


      return (
        <div style={{display:'flex', margin:'10px', marginTop:'10vh', backgroundColor:'var(--Light-grey)'}}>
          <Row style={{width:'100%'}}>
            <Col md={4} xs ={12} style={{padding:'20px 50px'}}>
            <h1 style={{textAlign:'left', color:'black'}}>Contact</h1>
            <p style={{color:'black'}}>
                acceleracers@mitwpu.edu.in<br/><br/>
                Captain: <br/>Aditya Dandgawhal<br/>
                adityadan.acceleracers@gmail.com
            </p>
            </Col>
            <Col md={8} xs ={12}>
                <Container>
                    
                    <h1 style={{color:'black'}}>Contact Us</h1>
                    <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={6} xs={12}>
                            <Form.Group controlId="formName">
                            <Form.Label style={{color:'black'}}>Your Name <span className='red'>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            </Form.Group>
                        </Col>
                        <Col md={6} xs={12}>
                            <Form.Group controlId="formCompanyName">
                            <Form.Label style={{color:'black'}}>Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your company name"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                            />
                            </Form.Group>
                        </Col>
                    </Row>
                        
                    <Row>
                        <Col md={6} xs={12}>
                            <Form.Group controlId="formEmail">
                            <Form.Label style={{color:'black'}}>Email address<span className='red'>*</span></Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            </Form.Group>
                        </Col>
                        <Col md={6} xs={12}>
                            <Form.Group controlId="formReason">
                            <Form.Label style={{color:'black'}}>Reason for contacting?<span className='red'>*</span></Form.Label>
                            <Form.Control
                                as="select"
                                name="reason"
                                value={formData.reason}
                                onChange={handleChange}
                                required
                            >
                                <option disabled value="">Select a reason</option>
                                <option value="Sponsorship">Sponsorship</option>
                                <option value="General QA">General QA</option>
                                <option value="Recruitment">Recruitment</option>
                                <option value="Other">Other</option>
                            </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                        <Form.Group controlId="formMessage" style={{marginBottom:'20px'}}>
                        <Form.Label style={{color:'black'}}>Message<span className='red'>*</span></Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter your message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        </Form.Group>

                        <Button className='form_submit' type="submit">
                        Submit
                        </Button>
                    </Form>
                    
                        
                </Container>
            </Col>
          </Row>

        </div>
      );
  

  
};

export default Footer;
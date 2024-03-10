import React from 'react'
import "./cf.css"
import { useState, useEffect, useRef } from 'react';
import { Row, Col, Button, Card, CardText, CardTitle, Form} from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import { Rotate, Fade, Bounce } from 'react-awesome-reveal'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import BasePage from '../../components/base_page';
import QRCode from 'qrcode.react';
import ProgressBar from '../../components/progressbar';

ChartJS.register(ArcElement, Tooltip, Legend);
const CrowdFunding = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTier, setSelectedTier] = useState(null);
    const [generate_qr, setgenerateQR] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        amount: ''
      });
      

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
    };

    const generate_qr_update = () =>{
        setgenerateQR(!generate_qr)
    }

      const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('entry.328351653', e.target.name.value); 
        formData.append('entry.1621804301', e.target.email.value); 
        formData.append('entry.2077291871', e.target.amount.value);
        fetch('https://docs.google.com/forms/d/e/1FAIpQLSdQf_OCpQBTFQrqEsvrAGTKJK163ZQ0cK9yL89oSmz03u-NYw/formResponse?', {
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
        setTimeout(() => {
            window.location.reload();
          }, 2000);
      };


    const tiers = [
        {
            'amount':'500',
            'title': 'Contribute ₹500 - ₹1000',
            'description':''
        },
        {
            'amount':'1000',
            'title': 'Contribute ₹1000 - ₹2000',
            'description':''
        },
        {
            'amount':'2000',
            'title': 'Contribute ₹2000 - ₹5000',
            'description':''
        },
        {
            'amount':'5000',
            'title': 'Contribute ₹5000 - ₹10000',
            'description':''
        },
        {
            'amount':'10000',
            'title': 'Contribute more than ₹10000',
            'description':''
        },
    ]

    const achievements = [       
        {
            'Type' : 'EV', 
            'Competition_name' : 'Formula Bharat 2024',
            'Achievements':['Overall 7th Position','8th in Design Presentation','7th in Cost','8th in Business Presentation','First team to clear A-TI']

        },
        {
            'Type' : 'EV', 
            'Competition_name' : 'Formula Bharat 2023',
            'Achievements':['Overall 8th Position','Overall Static 8th Position','6th in Design Presentation','12th in Cost','7th in Business Presentation','400+ kms tested']

        },
        {
            'Type' : 'EV', 
            'Competition_name' : 'Formula Bharat 2022',
            'Achievements':['Overall 6th Position','Overall Static 6th Position','7th in Design Presentation','6th in Cost','4th in Business Presentation']
        },
	{
            'Type' : 'CV', 
            'Competition_name' : 'Formula Bharat 2021',
            'Achievements':['Overall 4th Position','4th in Design Presentation','2nd in Business Presentation']
	},
	{
            'Type' : 'CV', 
            'Competition_name' : 'Formula Bharat 2020',
            'Achievements':['Overall 12th Position','8th in Design Presentation','8th in Cost','6th in Business Presentation']
	},
	
        {
            'Type' : 'CV', 
            'Competition_name' : 'Formula Bharat 2019',
            'Achievements':['Overall 9th Position','Overall Static 5th Position','11th in Overall Dynamic','2nd in Skidpad','10th in Acceleration','5th in Design Presentation','10th in Cost','7th in Business Presentation']

        },
        {
            'Type' : 'CV', 
            'Competition_name' : 'Formula Bharat 2018',
            'Achievements':['Overall 2nd Position','1st in Autocross']
        },

        {
            'Type' : 'CV', 
            'Competition_name' : 'Formula Student UK 2018',
            'Achievements':['Overall 19th Position','10th in Acceleration','First Indian Team to Complete the Competition']
        },

        {
            'Type' : 'CV', 
            'Competition_name' : 'Formula Student Moscow 2016',
            'Achievements':['Overall 7th Position','Podium in Cost and Manufacturing','Best Design Award',"Team's First Aerodynamically Backed Car"]
        },
]

    const data = {
        labels: ['Motor', ' Motor Controller', 'Battery', 'Miscellaneous'],
        datasets: [
          {
            data: [300000, 555000, 300000, 350000],
            backgroundColor: ['#979DA6', '#C1D4D9', '#027373', '#04BFAD'],
            hoverBackgroundColor: ['#979DA6', '#C1D4D9', '#027373', '#04BFAD'],
            borderWidth: 0, // Making the pie chart hollow
          },
        ],
      };
      const options = {
        cutoutPercentage: 80, // Adjust this value to change the thickness of the chart
        legend: {
          labels: {
            fontColor: 'white', // Change label text color here
          },
        },
      };



  const toggleModal = (tier) => {
    setSelectedTier(tier);
    setModalOpen(true);
  };
  const toggleModal_close = () =>{
    setModalOpen(false);
  }

    const maincontent = (
        <div className='scrollable' style={{overflowX:'hidden',overflowY:'auto', backgroundColor:'black', padding:'20px', textAlign:'left'}}>
            <Fade>
                <Row style={{margin:'20px'}}>
                    {/* <Col xs={12} md={6}>
                        <h1>Introduction</h1>
                        <p style={{paddingRight:'20px'}}>
                        Acceleracers is the official Formula Student team of MIT
                        World Peace University, Pune. Our team was established in
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
                        </p><br/>
                    </Col> */}
                    <Col style={{width:'100%', display:'flex'}}>
                        <img className='introimg' src="assets/CF/Intro.JPG" style={{'borderRadius':'10px'}} alt="" />
                    </Col>
                </Row>
            </Fade> 
            <Row>
            <h1>Achievements</h1>
            </Row>
            <Fade direction='right'>
            <Row className='achievements' style={{ display: 'flex', margin: '0px' }}>

                {achievements.map((item, index) => (
                    <Col style={{ margin: '10px 0px', display: 'flex' }} md={4} xs={12} key={index} className={item.Type === 'CV' ? 'cv_cf' : 'ev_cf'} >
                    
                        <Card style={{ width: '100%' }}>
                        <Fade direction='right'>
                            <CardTitle>{item.Competition_name}</CardTitle>
                            <CardText>Car Type: {item.Type == 'CV'? 'Combustion':'Electric'}</CardText>
                            <ul style={{padding: '0' }}>
                            {item.Achievements.map((sub_item, sub_index) => (
                                <li key={sub_index + 100}>{sub_item}</li>
                            ))}
                            </ul>
                        </Fade>
                        </Card>
                    
                    </Col>
                ))}
            </Row>
            </Fade>
            <Row style={{marginTop:"20px"}}>
            <Col xs={12} md={6}>
                <Fade direction='left'>
                    <h1>CrowdFunding Target - 15 lacs</h1>
                    <h6>Why do we need this amount?</h6>
                    <p>
                        We are upgrading our powertrain for the next season.
                        Currently we use the Motenergy 1616 motor along with Kelly 8080I IPS motor controller. 
                        We are planning to upgrade this system to Emrax 228 along with a DriveTrain Innovation Motor Controller.
                        We are also upgrading our battery pack to keep up with requirements of motor and controller.
                        <br/>
                        The motor and controller Setup costs Rs. 8.55 Lacs and Cells for battery costs 3 Lacs. 
                        When including the cost for miscellaneous electronic High Voltage components i.e 3.5 Lacs it sums up to a total of 15 Lacs.<br/>
                        A brief comparison of our current and next system is given below for referance.<br/><br/>
                    </p>
                </Fade>
                </Col>
                <Col xs={12} md={6} style={{padding:'20px'}}>
                    <Rotate>
                    <Doughnut className='doughnut' data={data} options={options} />
                    <p style={{width:'100%', textAlign:'center'}}>Hover/Click to see details</p>
                    </Rotate>
                    
                </Col>   
                           
            </Row>
            {/* <Row>
                <Col className='diff'><h6>Current System (ME1616 + Kelly)</h6></Col>
                <Col className='diff'><h6>Next System (Emrax + DTI)</h6></Col>
            </Row>
            <Row>
                <Col className='diff'>
                    <Row>
                        <ul>
                            <li></li>
                        </ul>
                    </Row>
                </Col>
                <Col className='diff'>
                    <Row>
                        <ul>
                            <li></li>
                        </ul>
                    </Row>
                    
                </Col>
            </Row> */}

            <Row>
                <h1>Why this setup?</h1>
            </Row>
            <Row style={{marginTop:'20px'}}>
                <Col>
                    <Fade direction='left' delay={200}>
                        <Row className='why_this'><img src="assets/CF/speed.png" alt="" /></Row>
                        <Row> <p style={{width:'100%',textAlign:'center'}}>30% Faster Acceleration</p> </Row>
                    </Fade>
                </Col>
                <Col>
                    <Bounce direction='in' delay={200}>
                        <Row className='why_this'><img src="assets/CF/weight.png" alt="" /></Row>
                        <Row> <p style={{width:'100%',textAlign:'center'}}>20% Lighter</p> </Row>   
                    </Bounce>             
                </Col>
                <Col>
                    <Bounce direction='in' delay={200}>
                        <Row className='why_this'><img src="assets/CF/tunable.png" alt="" /></Row>
                        <Row> <p style={{width:'100%',textAlign:'center'}}>More tunable parameters</p> </Row>  
                    </Bounce>
                </Col>
                <Col>
                    <Fade direction='right' delay={200}>
                        <Row className='why_this'><img src="assets/CF/efficiency.png" alt="" /></Row>
                        <Row> <p style={{width:'100%',textAlign:'center'}}>More Efficient</p> </Row>       
                    </Fade>
                </Col>
            </Row>

            <Row>
                <h1>Tiers</h1>
            </Row>
            <Row className='achievements' style={{ display: 'flex', margin: '0px' }}>
                {tiers.map((item, index) => (
                    <Col style={{ margin: '10px 0px', display: 'flex' }} md={4} xs={12} key={item.amount} className={item.Type === 'CV' ? 'cv_cf' : 'ev_cf'} >
                            <Card onClick={() => toggleModal(item)} style={{ width: '100%', cursor:'pointer' }}>
                            <Fade direction='left'>
                                <CardTitle>{item.title}</CardTitle>
                                <CardText>{item.description}</CardText>
                            </Fade>
                            </Card>
                    </Col>
                ))}
                </Row>

                {modalOpen &&(
                    <div className='modal_div_cf scrollable'>
                        <Row>
                            <Button onClick={() => toggleModal_close()} className='btn close' style={{position:'absolute', top:'10px', right:'10px'}}>
                                x
                            </Button>
                            <h1>{selectedTier.title}</h1>
                        </Row>
                        <Row>
                            <Col xs={12} md={6} style={{borderRight:'1px solid Black'}}>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group controlId="formName">
                                            <Form.Label>Name:</Form.Label>
                                            <Form.Control required={true} type="text" name="name" value={formData.name} onChange={handleChange} />
                                            </Form.Group>
                                            <Form.Group controlId="formEmail">
                                            <Form.Label>Email:</Form.Label>
                                            <Form.Control required={true} type="email" name="email" value={formData.email} onChange={handleChange} />
                                            </Form.Group>
                                            <Form.Group style={{}} controlId="formMessage">
                                            <Form.Label>Amount:</Form.Label>
                                            <Form.Control required={true} min={0} type='number' name="amount" value={formData.amount} onChange={handleChange} />
                                            </Form.Group>
                                            <Button className='form_submit' onClick={generate_qr_update}>Generate QR</Button>
                                            <div className='onlymob' style={{flexDirection:'column'}}>
                                                <a href={"tez://upi/pay?pa=kaustubhborkhade1011-1@okhdfcbank&pn=Team Acceleracers&am=" + formData.amount + "&tn=CrowdFunding"}><img style={{width:'150px'}} src="assets/CF/gpay.svg" alt="" /></a>
                                                <a className='form_submit' style={{padding:'10px', borderRadius:'5px'}} href={"upi://pay??pa=kaustubhborkhade1011-1@okhdfcbank&pn=Team Acceleracers&am=" + formData.amount + "&tn=CrowdFunding"}>Any other UPI app</a>
                                            </div>

                                            {formData.amount !=''&& formData.amount>0 && generate_qr && (
                                                <div>
                                                    <Button className='form_submit' type="submit">Payment Done</Button>
                                                </div>
                                            )}
                                        </Form>
                            </Col>
                            <Col>
                                {formData.amount == '' &&(
                                    <h3>Please Enter Amount to generate QR code</h3>
                                )}
                                {formData.amount <0 &&(
                                    <h3>Please Enter Amount greater than 0</h3>
                                )}
                                {formData.amount !='' && formData.amount >0 && generate_qr && (
                                        <div className='QR'>
                                            <QRCode style={{width:'200px', height:'200px'}} value={"upi://pay?pa=kaustubhborkhade1011-1@okhdfcbank&pn=Team Acceleracers&am=" + formData.amount + "&tn=CrowdFunding"} />
                                            <p>QR Code for: {formData.amount}</p>
                                        </div>
                                )}
                            </Col>
                        </Row>
                    </div>

                )}
                <div>
                    <h1>Amount Collected</h1>
                    <ProgressBar/>
                    </div>
        </div>
        
    )
    return <BasePage maincontent={maincontent} />;
}
export default CrowdFunding
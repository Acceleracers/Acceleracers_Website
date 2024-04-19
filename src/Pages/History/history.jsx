import React from 'react'
import "./history.css"
import { useState, useEffect, useRef } from 'react';
import { Row, Col} from 'react-bootstrap';
import BasePage from '../../components/base_page';
import Footer from './../../components/footer';


const History = () => {
    const [selectedCar , setselectedcar] = useState(null)
    const [modalVisible , setmodalVisible] = useState(false)

    const updateselectedcar = (car) =>{
        setselectedcar(car)
        setmodalVisible(true)
    }


    const cards = [
        {
            'Year' : '2024',
            'type' : 'EV',
            'car' : '24E',
            'description':['Formula Bharat 2024'],
            'Achievements' : ['Overall 7th Position','Overall Static 9th Position','8th in Design Presentation','6th in Concept Resource Management event','7th in Cost','8th in Business Presentation'],
            'teampic': true
        },
        {
            'Year' : '2023',
            'type' : 'EV',
            'car' : '23E',
            'description':["Formula Bharat 2023"],
            'Achievements' : ['Overall 8th Position','Overall Static 8th Position','6th in Design Presentation','12th in Cost','7th in Business Presentation','First On-site Event','400+ kms tested'],
            'teampic': true
        },
        {
            'Year' : '2022',
            'type' : 'EV',
            'car' : '22E',
            'description':["Formula Bharat 2022"],
            'Achievements' : ['Overall 6th Position','Overall Static 6th Position','7th in Design Presentation','6th in Cost','4th in Business Presentation',"Team's first electric car succesfully manufactured and tested"],
            'teampic': false
        },
        // {
        //     'Year' : '2021',
        //     'type' : 'CV',
        //     'car' : '21C',
        //     'description':["Formula Bharat 2021"],
        //     'Achievements' : ['Overall 4th Position','2nd in Business Presentation','4th in Design Presentation'],
        //     'teampic': false
        // },
        {
            'Year' : '2020',
            'type' : 'CV',
            'car' : '20C',
            'description':["Formula Bharat 2020"],
            'Achievements' : ['Overall 12th Position','8th in Design Presentation','8th in Cost','6th in Business Presentation'],
            'teampic': false
        },
        {
            'Year' : '2019',
            'type' : 'CV',
            'car' : '19C',
            'description':["Formula Bharat 2019, Supra SAE 2019"],
            'Achievements' : [
                "All India Rank 9(FB 19)",
                "1st in Composites(FB 19)",
                "2nd in Skid-pad(FB 19)",
                "5th in Design Presentation(FB 19)",
                "Best Driver award(FB 19)",
                "All India Rank 2(Supra 19)",
                "1st in Skid-pad(Supra 19)",
                "2nd in Endurance(Supra 19)",
                "2nd in Autocross(Supra 19)",
                "3rd in Business Presentation(Supra 19)",
                "3rd in Acceleration(Supra 19)"
            ],
            'teampic': false
        },
        {
            'Year' : '2018',
            'type' : 'CV',
            'car' : 'Phoenix 18',
            'description':["Formula Student UK 2018"],
            'Achievements' : [
                'Ranked 19th Globally.',
                'Acceleration of 0-80 kmph in 5.2 seconds.',
                '12th in Cost and Manufacturing.',
                '16th in Design Presentation.',
                '20th in Endurance and 10th in Efficiency.',
                '19th in Business Plan Presentation',
            ],
            'teampic': true
        },
        {
            'Year' : '2017',
            'type' : 'CV',
            'car' : 'Phoenix 17',
            'description':["Supra SAE 2017"],
            'Achievements' : [
                "All India Rank 3",
                "1st in Autocross Event",
                "1st in Skid-pad Event",
                "3rdin Acceleration Event",
                "3rd in Business Presentation"
            ],
            'teampic': true
        },
        {
            'Year' : '2016',
            'type' : 'CV',
            'car' : 'Comet 2.0',
            'description':["Formula Moscow 2016"],
            'Achievements' : [
                "Ranked 7th Globally out Of 50 different teams",
                "Only Indian Team to compete in the event",
                "Podium finish in Cost Event",
                "Team's 1st ever Aerodynamically backed car"
            ],
            'teampic': false
        },
        {
            'Year' : '2015',
            'type' : 'CV',
            'car' : 'Comet 1.0',
            'description':["Supra SAE 2015"],
            'Achievements' : ['Lightest car in competition'],
            'teampic': false
        },
        {
            'Year' : '2014',
            'type' : 'CV',
            'car' : 'WOT',
            'description':["Supra SAE 2014"],
            'Achievements' : ['Teams first car to implement KTM 390 Engine', 'Fastest car in competition'],
            'teampic': true
        },
        {
            'Year' : '2012',
            'type' : 'CV',
            'car' : 'Carbon',
            'description':["Supra SAE 2012"],
            'Achievements' : [
                "India's First Carbon Fibre Monocoque",
                "Inaugrated by Kumar Ram Narain Karthikeyan, India's First Fl Race Car Driver"
            ],
            'teampic': false
        },
        {
            'Year' : '2011',
            'type' : 'CV',
            'car' : 'Black Pearl',
            'description':["-"],
            'Achievements' : ['First Car of Team'],
            'teampic': false
        },
    ]
    
        
    const maincontent = (
        <div className="scrollable" style={{padding:'10px'}}>
            <Row style={{display:'flex'}}>
                {cards.map((item, index) =>(
                    <Col className='trans' key={item.car} xl={4} sm={12} style={{margin:'10px 0px'}}>
                        <div onClick={() => updateselectedcar(item)} className={item.type === 'CV' ? 'cv' : 'ev'}>
                            <h1>{item.car}</h1>
                            <img style={{width:'100%'}} src={"assets/History/"+item.car+"_Car.jpg"} alt="" />
                            {/* <img style={{width:'100%'}} src="assets/History/24E_Car.jpg" alt="" /> */}
                        </div>
                    </Col>
                ))}
            </Row>
            
            {modalVisible &&(
                <div className='modal_div'>
                    <p onClick={()=> setmodalVisible(false)} style={{color:'black',fontWeight:'800',position:'absolute', top:'10px', right:'10px', cursor:'pointer'}}>X</p>
                    <Row><h1 style={{width:'100%', textAlign:'center'}}>{selectedCar.car}</h1></Row>
                    <div className='modal_scrollable'>
                        <Row>
                            <Col xs={12} md={6}>
                            <img className='resp_img_1'  src={selectedCar.teampic ?"assets/History/"+selectedCar.car+"_Team.jpg":"assets/History/"+selectedCar.car+"_Car.jpg"} alt="" />
                            {/* <img className='teamImg' src="assets/History/24E_Team.jpg" alt="" /> */}
                            </Col>
                            <Col xs={12} md={6} className='car_modal'>
                                <h6>Car Year: {selectedCar.Year}</h6>
                                <h6>Car Type:  {selectedCar.type == "CV"? "Combustion":"Electric"}</h6>
                                <h6>Car Competitions:</h6>
                                <ul>
                                    {selectedCar.description.map((item, index)=>(
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                                <h6>Car Achievements:</h6>
                                <ul>
                                    {selectedCar.Achievements.map((item, index)=>(
                                        <li>{item}</li>
                                    ))}
                                </ul>
                            </Col>
                            
                        </Row>
                    </div>
                </div>
            )}
            <Footer/>
        </div>
    )
    return <BasePage maincontent={maincontent} />;
}
export default History
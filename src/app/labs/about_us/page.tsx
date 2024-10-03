'use client'

import { useRouter } from "next/navigation";
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import './support.css'
import { ImagePath } from "@/Constant";
import BasicCard from "./BasicCard";
import Head from "next/head";

const AboutUs = () => {

    const router = useRouter(); // Initialize the router

  const goBack = () => {
    router.back(); // Go back to the previous route
  };
    return (
      <>
      {/* Add the SEO meta tags */}
      <Head>
        <meta name="description" content="Labon.ai is a startup service provider in the healthcare industry, who enables patients to book for collection of blood samples from home and act as a technology provider for labs. Our software for labs help connect with patients instantly to manage home blood test bookings and payments." />
        <meta name="keywords" content="know about labon, collect blood samples of patients from home, software for labs, blood test service provider, technology provider for labs, home blood test booking software, service provider to book blood test at home." />
        <title>About - Labon</title>
      </Head>
        <Col md="">
    
    <div style={{padding : '0', height:'12rem', width:'100%',backgroundImage: 'linear-gradient(180deg, #522F62 0%, #9462B5 100%)',}}>
    <div style={{display : 'flex'}}>
      <i onClick={goBack} className='fa fa-angle-left' style={{padding:'24px 0 24px 24px', fontSize : '24px' , color : 'white'}}></i>
          {/* <h1 className="text-black ml-4" style={{margin:'0' , paddingBottom : '24px'}}>My Booking Information</h1> */}
          <h1 className="text-white" style={{padding:'24px', margin: '0'}}>About Us</h1>
            </div>
          
          <p style={{fontSize : '20px'  , color : 'white' , padding : '16px 24px 24px 24px' , margin : 0}}>The <strong>block chain</strong> that connects between labs and patients</p>
          {/* <p style={{fontSize : '20px' , color : 'white' , padding : '0 24px 0 24px' , fontWeight : ''}}>through our FAQs or Chat</p> */}
    <div style={{padding : '0', height:'2rem', width:'100%',backgroundColor:'#F5F5F5' , borderTopLeftRadius : '16px' , borderTopRightRadius : '16px'}}>
    </div>
    
    
    </div>

    <div style={{padding : '0 24px 24px 24px'}}>
    <p style={{fontSize : '24px', fontWeight : 'bold' }}>Labon.ai</p>
    <BasicCard />

    <p style={{fontSize : '18px', fontWeight : 'bold' , marginTop : '24px'}}>The Company</p>

  <p>
  We are a startup who are currently in the process of registering our company and completing all formalities, which we expect to complete in the next few months.
  </p>
  <br />
  <p>
  As part of our pilot, we are supporting customers providing services to book a home test and collect blood samples, ensuring the samples are collected at the right time and results published to you within the specified hours.
    </p>
  <br />


    {/* <p style={{fontSize : '24px', fontWeight : 'bold' , textAlign : 'center'}}>Our Leadership</p>
    <img 
  style={{
    height: '7rem',
    paddingBottom:'8px', 
    margin: '0 auto', // Center-aligns the image horizontally
    borderRadius: '5px', 
    display: 'block' // Makes the margin auto effective for centering
  }} 
  className="img-fluid table-avtar" 
  src={`${ImagePath}/Profile Picture.png`} 
  alt="user image" 
/>

    <p style={{margin : 0, fontWeight : '' , textAlign : 'center'}}>Babu Sivadasan</p>
    <p style={{fontSize : '', fontWeight : 'bold' , textAlign : 'center'}}>Founder</p>

    <p>
    A passionate serial entrepreneur with public company experience and an engineer at heart. He has spent over 20 years building Envestnet (NYSE:ENV), as the Co-founder and Group President. Prior, he was the co-founding CTO of Stamps.com (Nasdaq: STMP). Sivadasan also serves as the Chairman of venture-funded startup Carestack.
    </p>
    <br />
    <p>
    As an active angel investor, he is a mentor to various startup companies in both Silicon Valley and India. He also serves as a venture mentor to IvyCap Venture capital Partners. Jiffy.AI is lead by Sivadasan, an intelligent automation company that recently raised Series B-Series funding of $53m.
    </p>
    <img className="img-40" style={{marginRight : '8px' , padding : '4px 6px'}} src={`${ImagePath}/Icon - WhatsApp.png`} alt="" />
        
  <div style={{borderBottomStyle : 'groove' , marginTop : '12px'}}></div>

  <p style={{fontSize : '18px', fontWeight : 'bold' , marginTop : '24px'}}>Patients</p>

  <p>
  With AI enabled services, Labon let’s customers book blood tests for themselves and their loved ones at the convenience of your home, anywhere in Kerala. We collect blood samples from your home or wherever you are, get them tested and publish results within 24 hours.
  </p>
  <br />
  <p>
  Our blood test algorithm helps you predict the results upto 6 months and provides you insight on how and what ways it can be brought down or maintained.
  </p>
  <br />
  <p>
  It’s a consolidated platform where you can manage home visits, blood test results of yours and your loved ones in one place.
  </p>

  <Button
  className="btnStyless"
  // onClick={handleBookingClick}
  style={{
    width: '90%',
    marginTop: '20px',
    marginLeft: '20px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Center content vertically
    position: 'relative',
  }}
  color=""
>
  Book A Blood Test At Home
  <span style={{ position: 'absolute', right: '20px' }}>
    <i style={{ marginLeft: '2rem' }} className="fa fa-angle-right"></i>
  </span>
</Button>



<p style={{fontSize : '18px', fontWeight : 'bold' , marginTop : '24px'}}>Labs</p>

  <p>
  We help labs not to spend huge and recurring expenses on Technology, but subscribe with us so we become your Technology Partner and provide you everything to manage your home visit bookings. Just by signing up with us, get your lab instantly online and start accepting home visit bookings and payments.
    </p>
  <br />
  <p>
  Let your customers know you are online and take in home visit bookings by give your customer their convenience.
  </p>
  <br />
  <p>
  Get to enjoy all the upgrades we do on the platform from time to time so you meet the cutting edge needs of the industry.
  </p>
  <br />
  <p>
  Labon helps you always stay ahead which in turn helps you keep your customers with you.
  </p>

  <Button
  className="btnStyles"
  // onClick={handleBookingClick}
  style={{
    width: '90%',
    marginTop: '20px',
    marginLeft: '20px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // Center content vertically
    position: 'relative',
  }}
  color=""
>
  Integrate Our Solution
  <span style={{ position: 'absolute', right: '20px' }}>
    <i style={{ marginLeft: '2rem' }} className="fa fa-angle-right"></i>
  </span>
</Button> */}

    

    </div>
    </Col>
    </>
    )

}

export default AboutUs;

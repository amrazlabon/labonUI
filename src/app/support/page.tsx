'use client'

import { useRouter } from "next/navigation";
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import './support.css'
import { ImagePath } from "@/Constant";
import Head from "next/head";
import { Header } from "@/LayoutLabon/Header/Header";
import { useAppSelector, useAppDispatch } from "@/Redux/Hooks";
import { setToggleSidebar } from "@/Redux/Reducers/LayoutSlice";
import { setLayout } from "@/Redux/Reducers/ThemeCustomizerSlice";
import { useEffect } from "react";
import "../../../src/index.scss";

const Support = () => {

  const { layout } = useAppSelector((state) => state.themeCustomizer);
  const dispatch = useAppDispatch();

  const compactSidebar = () => {
    let windowWidth = window.innerWidth;
    if (layout === "compact-wrapper") {
      if (windowWidth < 1200) {
        dispatch(setToggleSidebar(true));
      } else {
        dispatch(setToggleSidebar(false));
      }
    } else if (layout === "horizontal-wrapper") {
      if (windowWidth < 992) {
        dispatch(setToggleSidebar(true));
        dispatch(setLayout("compact-wrapper"));
      } else {
        dispatch(setToggleSidebar(false));
        dispatch(setLayout(localStorage.getItem("layout")));
      }
    }
  };

  useEffect(() => {
    compactSidebar();
    window.addEventListener("resize", () => {
      compactSidebar();
    });
  }, [layout]);
  

    const router = useRouter(); // Initialize the router

  const goBack = () => {
    router.back(); // Go back to the previous route
  };
    return (
      <>
      {/* Add the SEO meta tags */}
      <Head>
        <meta name="description" content="Labon.ai support helps you to find FAQ, how-to guides and step-by-step tutorials on how to use the platform as a patient to book home blood tests and as a lab to receive and manage bookings and payments." />
        <meta name="keywords" content="Labon support, get support from labon, get help from labon, why book a blood test at home, how to use http://labon.ai , accept home blood tests and payments." />
        <title>Labon Support | Frequently Asked Questions | Kerala, India</title>
      </Head>
      <div className={`page-wrapper ${layout}`} id="pageWrapper" >
        <Header />
        <div className="page-body-wrapper" >
          {/* <SideBar /> */}
          <div className="page-body" style={{marginTop : '80px', marginLeft : 0}}>
          <div className="mobile-restricted-content">
      <Col md="">
    
    <div style={{padding : '0', height:'12rem', width:'100%',backgroundImage: 'linear-gradient(180deg, #522F62 0%, #9462B5 100%)',}}>
    <div style={{display : 'flex'}}>
      <i onClick={goBack} className='fa fa-angle-left' style={{padding:'24px 0 24px 24px', fontSize : '24px' , color : 'white'}}></i>
          {/* <h1 className="text-black ml-4" style={{margin:'0' , paddingBottom : '24px'}}>My Booking Information</h1> */}
          <h1 className="text-white" style={{padding:'24px', margin: '0'}}>Support</h1>
            </div>
          
          <p style={{fontSize : '20px'  , color : 'white' , padding : '16px 24px 0 24px' , margin : 0}}>Get your questions <strong>clarified</strong></p>
          <p style={{fontSize : '20px' , color : 'white' , padding : '0 24px 0 24px' , fontWeight : ''}}>through our FAQs or Chat</p>
    <div style={{padding : '0', height:'2rem', width:'100%',backgroundColor:'#F5F5F5' , borderTopLeftRadius : '16px' , borderTopRightRadius : '16px'}}>
    </div>
    
    
    </div>
    <div style={{padding : '0 24px 24px 24px'}}>
        
    <p style={{fontSize : '24px', fontWeight : 'bold' ,}}>FAQs</p>

    {/* <h2>FAQs</h2> */}
    <p style={{fontSize : '16px', fontWeight : 'bold' ,}}>Why should you use Labon.ai?</p>

    {/* <h3>Why should you use Labon.ai?</h3> */}
    <p>
    With Labon, you can book a blood test at home for yourself or your loved ones. The platform helps you maintain test results and also get insights into risk predictions and eventually guide customers on what can be done to bring down test results to optimum measure.    </p>
    <br />
    <p>
    Labon helps small to medium sized labs get online instantly and start accepting home blood tests and payments. Instead of labs spending huge amounts on technology upfront, signing up with Labon helps you to use our technology and all upgrades on a minimal subscription cost, instead of spending huge costs upfront.
    </p>

    <p style={{fontSize : '16px', fontWeight : 'bold' ,paddingTop : '16px'}}>Do I need to make any payment to use the platform?</p>

    {/* <h3>Why should you use Labon.ai?</h3> */}
    <p>
    As a customer or patient who wants to book a home test, you just need to pay for the tests you are booking. We charge a nominal convenience fee for the usage. Technology is offered at no cost to you. </p>    <br />
    <p>
    As a Lab who signs up to our platform, we charge a nominal subscription fee when we become their technology partner. There is no upfront cost involved and plus they get all the technology upgrades at no extra cost, based on the plan they have selected.
     </p>

     <p style={{fontSize : '16px', fontWeight : 'bold' ,paddingTop : '16px'}}>Can I book a home test for someone else if I sign up?</p>

    {/* <h3>Why should you use Labon.ai?</h3> */}
    <p>
    Yes, you can book a home test for anyone else too other than you. </p>    <br />
    <p>
    Example: If you are living away from your hometown and you would like to do monthly repeated tests for your father, you can book a home test for your father. Not only that, you can also save the details for future use so your steps for booking a test for your father is easy from next time onwards.
     </p>

     <p style={{fontSize : '16px', fontWeight : 'bold' , paddingTop : '16px'}}>How can I make a home test booking?</p>
 
     <ul style={{listStyleType: 'disc' ,  paddingLeft: '20px'}}>
  <li>Visit <a href="https://labon.ai" target="_blank" style={{textDecoration: 'none'}}>https://labon.ai</a></li>
  <li>Select Tests and Location</li>
  <li>Pick a Date</li>
  <li>Select Time Slot</li>
  <li>Enter Patient Details</li>
  <li>Add to Cart</li>
  <li>Checkout</li>
</ul>


    <div className="chat-with-us">
    <p style={{fontSize : '24px', fontWeight : 'bold' ,}}>Chat with us</p>
        <p>Not finding what you are looking for?</p>
        <div style={{display : 'flex' , gap : 8 , alignItems : 'center'}}>
        <img className="img-40" style={{marginRight : '8px' , padding : '4px 6px'}} src={`${ImagePath}/Icon - WhatsApp.png`} alt="" />
        {/* <p style={{ margin: 0 }}> */}
  <a href="https://wa.me/919847814527" target="_blank" rel="noopener noreferrer">
    Chat with us
  </a>
{/* </p> */}

        {/* <p style={{margin : 0}}><a href="#">Chat with us</a></p> */}
        </div>
    </div>

    </div>
    </Col>
    </div>
    </div>
    </div>
    </div>
    </>
    )

}

export default Support;

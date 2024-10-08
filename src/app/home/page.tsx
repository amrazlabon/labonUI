'use client'
import { CheckedCheckbox, CheckMeOut, ClickOut, Close, DefaultCheck, Defaultcheckboxes, Email, ExtraLargeModals, Height, ImagePath, MarginLeft, MofiLogin, Password, SaveChanges, SignIn, WebDesign, Width } from "@/Constant";
import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";
// import { Col } from "reactstrap";
import { Card, CardBody, Col, Row, Button , FormGroup, Table , Form , Input , Label , Modal, ModalBody, ModalFooter, Toast, ToastBody} from 'reactstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './homestyle.css'
import { FaCheckCircle } from "react-icons/fa";
import { CommonModalType, StaticModalToggleProp } from "@/Types/UikitsType";
import { ChevronsRight } from "react-feather";
import { FullScreenData } from "@/Data/Uikits/modal";
import Link from "next/link";
// import { StaticForm } from "@/Components/UiKits/Modal/StaticBackdropModal/StaticForm";
import {  Formik } from "formik";
import { BorderRadius } from "@/Components/UiKits/HelperClasses/StyleBorderCart/BorderRadius";
import { CommonTableProp } from "@/Types/TableType";
import { TableHeadOptionHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTable";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { BasicCenter, BasicContainerStyle } from "@/Data/Miscellaneous/Maps";
import axios from "axios";
import LoginModal from "@/Redux/loginDo";
import Head from "next/head";
import { useAppSelector, useAppDispatch } from "@/Redux/Hooks";
import { setToggleSidebar } from "@/Redux/Reducers/LayoutSlice";
import { setLayout } from "@/Redux/Reducers/ThemeCustomizerSlice";
import { Header } from "@/LayoutLabon/Header/Header";


type Test = {
    id: number;
    test_name: string;
    is_active: boolean;
    questions: any;
    price: string | null;
  };

  type Location = {
    // id: number;
    location: string;
    address: string;
    pincode: any;
    nick_name: string | null;
    co_ordinates : {}
  };

//   const [selectedTests, setSelectedTests] = useState<Test[]>([]);
//     const [selectedAddress, setSelectedAddress] = useState<Location[]>([]);
const home = () => {

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
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
};
    const [open,setOpen] = useState(false)
    const [toasterContent,setToasterContent] = useState('')
    const [toasterColorContent,setToasterColorContent] = useState('')

    const [extraLargeScreen, setExtraLargeScreen] = useState(false);
    const extraLargeScreenToggle = () => setExtraLargeScreen(!extraLargeScreen);

    const [extraLargeScreenLocation, setExtraLargeScreenLocation] = useState(false);
    const extraLargeScreenToggleLocation = () => setExtraLargeScreenLocation(!extraLargeScreenLocation);

      
    const [selectedTests, setSelectedTests] = useState<any>([]);
    const [selectedAddress, setSelectedAddress] = useState<Location[]>([]);
    // console.log("the selected test in the home page",selectedAddress);
    
    const handleBookingClick = (evt : any) => {
      const userId = sessionStorage.getItem("user_id");

      if(selectedTests.length === 0 && selectedAddress.length === 0){
        evt.preventDefault();
        setOpen(true)
        setToasterContent('Select Test to Continue')
        setToasterColorContent('danger')
        setTimeout(()=>{
            setOpen(false);
        },5000)

    }
    else if(selectedAddress.length === 0){
      evt.preventDefault();
      setOpen(true)
      setToasterContent('Select Address to Continue')
      setToasterColorContent('danger')
      setTimeout(()=>{
          setOpen(false);
      },5000)

  }
  else if(!userId){
    evt.preventDefault();
    setOpen(true)
    setToasterContent('Please Login to Continue')
    setToasterColorContent('danger')
    setTimeout(()=>{
        setOpen(false);
    },5000)

}
    else{
        sessionStorage.setItem('tests', JSON.stringify(selectedTests));
        sessionStorage.setItem('address', JSON.stringify(selectedAddress));
    }
      };

      const selectTest = () => {
        extraLargeScreenToggle()
        // sessionStorage.setItem('tests', JSON.stringify(selectedTests));
        // sessionStorage.setItem('address', JSON.stringify(selectedAddress));
      };

      const selectLocation = () => {
        if(selectedTests.length === 0){
            setOpen(true)
            setToasterContent('Select Test to Continue')
            setToasterColorContent('danger')
            setTimeout(()=>{
                setOpen(false);
            },5000)

        }
        else{

            extraLargeScreenToggleLocation()
        }
        // sessionStorage.setItem('tests', JSON.stringify(selectedTests));
        // sessionStorage.setItem('address', JSON.stringify(selectedAddress));
      };


    

    // const [startDate, setStartDate] = useState<Date | null>(new Date());
    // const [endDate, setEndDate] = useState<Date | null>(null);

    // const onChange = (date: [Date | null, Date | null]) => {
    //     const [start, end] = date;
    //     setStartDate(start);
    //     setEndDate(end);
    //   };

    const toasterNotification = () => {
      setOpen(true)
            setToasterContent('Men at work! Visit again later')
            setToasterColorContent('danger')
            setTimeout(()=>{
                setOpen(false);
            },5000)
    }
    return (
        // <Container fluid className="p-3">
        <>
        {/* Add the SEO meta tags */}
        <Head>
          <meta name="description" content="Get a home blood test done at the comfort of your home. Book for yourself or for your family or elderly parents. If you are living outside Kerala or India, use https://labon.ai  to book home blood test for your parents or relatives living in Kerala. We will collect blood samples from home at your convenient time." />
          <meta name="keywords" content="home blood test, home blood sample collection, online blood test, lab test at home, book home blood test, home blood test kerala, online blood test kerala, book lab test at home, collect blood sample from home." />
          <title>Home Blood Test Booking | Labon.ai | Kerala, India</title>
        </Head>

        <div className={`page-wrapper ${layout}`} id="pageWrapper" >
        <Header />
        <div className="page-body-wrapper" >
          {/* <SideBar /> */}
          <div className="page-body" style={{marginTop : '80px', marginLeft : 0}}>
          <div className="mobile-restricted-content">

          {/* </div> */}
        <Col md="" style={{ padding: '0' }}>
            <ColorsSchemes open={open} setOpen={setOpen} toasterContent={toasterContent} toasterColorContent={toasterColorContent}/>

            <div style={{ background: 'linear-gradient(180deg, #522F62 0%, #9462B5 100%)', height: '21rem', alignContent: 'end' }}>
                <img className="w-100" style={{verticalAlign : 'bottom'}} src={`${ImagePath}/home.png`} alt="user" />

            </div>

            <Card style={{ maxWidth: 'auto', margin: '0' , padding : '0', boxShadow : 'none' , borderRadius: '0' , backgroundColor : '#F5F5F5'}}>
      <CardBody style={{padding : '0'}}>
      <div className="btn-group">
  <button className={"test-btn"}>Book a Home Visit</button>
  <button onClick={toasterNotification} className={"package-btn"}>Integrate Solution</button>
</div> 
        {/* <h5 style={{ textAlign: 'center' }}>Book a Home Visit</h5>
        <p style={{ textAlign: 'center' }}>Integrate Solution</p> */}
        <Row style={{ marginTop: '20px' }}>
          <Col xs="2" style={{ textAlign: 'center', paddingLeft: '2rem' }}>
          {selectedTests.length === 0 ? 
            <FaCheckCircle style={{ color: 'red' }} /> : 
            <FaCheckCircle style={{ color: 'green' }} />
          }
          </Col>
          <Col xs="10">
            <p style={{ margin: '0' , cursor : 'pointer'}} onClick={selectTest}>
            {selectedTests.length === 0
        ? 'Select Test'
        : selectedTests.length === 1
        ? selectedTests[0].test_name
        : `${selectedTests[0].test_name} + ${selectedTests.length - 1}`}

            </p>
          </Col>
        </Row>
      
        < hr style={{    margin: '20px 30px 20px 65px',borderBlockStyle:'double'}} />
        <Row>
          <Col xs="2" style={{ textAlign: 'center', paddingLeft: '2rem' }}>
          {selectedAddress.length != 0 ? 

          <FaCheckCircle style={{ color: 'green' }} /> : 
          <FaCheckCircle style={{ color: 'red' }} /> 

          }
          </Col>
          <Col xs="10">
          <p
  style={{
    margin: '0',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingRight : '24px'
  }}
  onClick={selectLocation}
>
  {
    selectedAddress.length != 0 
    ? selectedAddress[0].address + ', ' + selectedAddress[0].location + ', ' + selectedAddress[0].pincode 
    : "Select Address"
  }
</p>

          </Col>
        </Row>
        <Link href={'/labs/booking'}>

        <Button
  className="btnStyless"
  onClick={handleBookingClick}
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

        
        </Link>
      </CardBody>
    </Card>
    <ExtraLargeModal isOpen={extraLargeScreen} toggle={extraLargeScreenToggle} selectedTests={selectedTests}  setSelectedTests={setSelectedTests}/>
    <ExtraLargeModalLocation isOpen={extraLargeScreenLocation} toggle={extraLargeScreenToggleLocation} selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress}/>

            <div style={{ background: 'linear-gradient(180deg, #CCBBDB 0%, #F4ECFE 100%)', display: 'grid', gridTemplateColumns: '2fr 3fr',     margin: '2rem 0 0 0' , height : '15.4rem'}}>
                <div>

                    <img style={{ position: 'absolute', zIndex: 2, height: '13rem' , marginTop : '3rem' }} className="img-fluid rounded-circle" src={`${ImagePath}/mobilehand.png`} alt="user" />
                    <img style={{ position: 'absolute', zIndex: 1 }} className="img-fluid rounded-circle" src={`${ImagePath}/Circles.png`} alt="user" />


                </div>
                <div style={{ zIndex: 1  , padding :'18px'}}>

                    <p style={{fontSize : '18px' , fontWeight : '600' , color : '#543063'}}>
                        Conveniently book through our WhatsApp
                    </p>
                    <p style={{color : '#543063'}}>
                        Get a smooth and guided booking experience through our WhatsApp
                    </p>
                    <p style={{display: "block" , background: '#AE99C0', color : 'white' , borderRadius : '5px' , padding : '5px' , width: 'fit-content'  , float : 'right' ,marginRight : '0rem' , marginTop : '24px', textAlign : 'center' , fontWeight : 'bold' }}>Book on WhatsApp</p>



                </div>
            </div>
            <div style={{ marginTop: '2rem' , padding : '24px'}}>
                <p style={{ fontSize: '24px', fontWeight: '700' }}>Labon for everyone</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', columnGap: '1rem' }}>
                    <div style={{marginTop : '6px'}}>
                        <img className="img-fluid thumbnail" src={`${ImagePath}/Thumbnail.jpg`} alt="user" />

                    </div>
                    <div>
                    <p style={{margin : 0 , fontSize : '18px' , fontWeight : '600'}}>For elderly parents</p>
                        <p style={{marginTop : '8px'}}>
                            Schedule a home sample collection and stop worrying about your parents periodical tests.
                        </p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', columnGap: '1rem' }}>
                    <div style={{marginTop : '6px'}}>
                        <img className="img-fluid thumbnail" src={`${ImagePath}/Thumbnail.jpg`} alt="user" />

                    </div>
                    <div>
                    <p style={{margin : 0 , fontSize : '18px' , fontWeight : '600'}}>For You</p>
                        <p style={{marginTop : '8px'}}>
                            It’s important you do not miss a test. We help you repeat your schedule and visit where you are.
                        </p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', columnGap: '1rem' }}>
                    <div style={{marginTop : '6px'}}>
                        <img className="img-fluid thumbnail" src={`${ImagePath}/Thumbnail.jpg`} alt="user" />

                    </div>
                    <div>
                        <p style={{margin : 0 , fontSize : '18px' , fontWeight : '600'}}>Anywhere in Kerala</p>
                        <p style={{marginTop : '8px'}}>
                            No matter where in Kerala, we will visit you and collect the samples. All you need to do is just schedule it.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ background: '#533063', clipPath: 'polygon(0px 60px, 100% 0px, 100% 100%, 0px 100%)', paddingTop: '4rem' }}>

                <p style={{ fontSize: '22px', fontWeight: '700', color: '#FFFFFF', lineHeight: '29.05px', padding: '24px' }}>
                    The smarter way to manage your home sample collections
                </p>
                <img className="img-fluid family" src={`${ImagePath}/family.jpg`} alt="user" />


<div style={{padding: '24px'}}>

                <p style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: 'bold', lineHeight: '24px', }}>
                    We live abroad and our parents keep visiting us once a while. While they are in Kerala, it was a big worry for us about their periodical tests. With Purple Labs, we were able to schedule tests and they come on time and collect samples, wherever the patient is.
                    {/* <br /><br /><br /> */}
                    </p>
                    <p style={{ color: '#FFFFFF', fontSize: '16px' ,  fontWeight: 'bold', lineHeight: '24px' }}>
                      
                    Not just that, we are able to live track the phlebotomists coming for sample collection and the current location of the samples been collected. This is really a great information for us. Thanks to Purple Labs.
                </p>

                <p style={{ color: '#FFFFFF', fontSize: '16px' ,  fontWeight: 'bold', lineHeight: '24px' }}>We are able to live track the phlebotomists coming for blood sample collection and the status of the samples collected. This is really a great information for us. Thanks to Labon.</p>
</div>
            </div>

            <div style={{ padding: '24px', display: 'grid', gap: '8px' }}>
    <p style={{ fontWeight: 'bold', fontSize: '24px'  , margin : 0}}>
        Making the difference
    </p>
    <p style={{ fontWeight: 'bold', fontSize: '48px', margin : 0 }}>
        100k+
    </p>
    <p style={{margin : 0}}>
        Individuals and families have been using Purple Labs, either for themselves or for their parents and relatives.
    </p>
</div>

            <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)', background: '#D6E8ED', padding: '2rem 2rem 4rem 2rem', }}>
                <p style={{ fontSize: '24px', fontWeight: '700' }}>From our blogs</p>
                <Slider {...settings}>
                <div>
                    <img className="img-fluid" src={`${ImagePath}/deliverbike.jpg`} alt="user" />
                    <p style={{ fontSize: '16px', fontWeight: '600', color: '#3E616B', marginTop: '12px' }}>
                        Why tracking of samples collected from homes is important?
                    </p>
                    <p style={{ fontSize: '16px', marginTop: '12px' }}>
                        Description
                    </p>
                    <div style={{ color: '#369C3E', display: 'flex', alignItems: 'baseline' }}>
                        <p>Know more</p>
                        <i className="fa fa-angle-right" style={{ marginLeft: '1rem', color: '#369C3E' }}></i>
                    </div>
                </div>
                <div>
                    <img className="img-fluid" src={`${ImagePath}/deliverbike.jpg`} alt="user" />
                    <p style={{ fontSize: '16px', fontWeight: '600', color: '#3E616B', marginTop: '12px' }}>
                        Why tracking of samples collected from homes is important?
                    </p>
                    <p style={{ fontSize: '16px', marginTop: '12px' }}>
                        Description
                    </p>
                    <div style={{ color: '#369C3E', display: 'flex', alignItems: 'baseline' }}>
                        <p>Know more</p>
                        <i className="fa fa-angle-right" style={{ marginLeft: '1rem', color: '#369C3E' }}></i>
                    </div>
                </div>
                
                {/* Repeat the above div block for the other blog sections */}
            </Slider>

            </div>
            
            {/* this is the download option which is commented now
            <div style={{ padding: '1rem' }}>
                <p style={{ fontSize: '24px', fontWeight: '700' }}>Download our apps</p>
                <div style={{ display: 'flex', gap: '1rem' }}>

                    <img style={{ width: '50%' }} className="img-fluid" src={`${ImagePath}/Play Store.png`} alt="user" />


                    <img style={{ width: '50%' }} className="img-fluid" src={`${ImagePath}/App-Store.png`} alt="user" />



                </div>
                <p style={{marginTop:'1rem'}}>Not only through the web, you can also manage everything from our app.</p>
            </div> */}
            <div style={{padding : '24px'}}>
            <ul className="menu">
    <li onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
        Book a Home Visit
    </li>
    <li onClick={toasterNotification}>Integrate Our Solution (Labs)</li>
    <li>Find Tests</li>
    <Link href={'/about'}>
    <li style={{ marginTop: '2rem' }}>About Us</li>
    </Link>
    <Link href={'/contact-us'}>
    <li>Contact Us</li>
    </Link>
    <Link href={'/support'}>
    <li>Support</li>
    </Link>
</ul>

            </div>
            <div style={{padding:'24px'}}>

            <div style={{display:'flex',gap:'2rem'}}>
                <p style={{color:'#999999',textDecorationLine:'underline'}}>Privacy Policy</p>
                <p style={{color:'#999999',textDecorationLine:'underline'}}>Terms of Service</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , paddingTop : '24px'}}>
    <img style={{ margin: '0' }} className="img-fluid" src={`${ImagePath}/Logo.png`} alt="user" />

    <div style={{ display: 'flex', gap: '10px' }}>
        <img className="img-fluid" src={`${ImagePath}/Icon - Instagram.png`} alt="Instagram" />
        <img className="img-fluid" src={`${ImagePath}/Icon - YouTube.png`} alt="YouTube" />
        <img className="img-fluid" src={`${ImagePath}/Icon - Twitter.png`} alt="Twitter" />
        <img className="img-fluid" src={`${ImagePath}/meta.png`} alt="Meta" />
    </div>
</div>




            <p style={{fontSize:'12px',color:'#999999', paddingTop : '32px'}}>Copyright 2023, Labon. All Rights Reserved.</p>
            </div>


        </Col>
        </div>
        </div>
        </div>
        </div>
        </>
    );
};

export default home;

// import React, { useState } from 'react';
// import { Col, Input, Label, Button } from 'reactstrap';

const DefaultChecks = ({ fulldata , data, selectedTests, setSelectedTests, toggle , searchTerm} : any) => {
  const [selectedTestData, setSelectedTestData] = useState(selectedTests.map((test : any) => test.id));
  
  const handleCheckboxChange = (index : any) => {
    const testId = data[index].id;

    setSelectedTestData((prevSelected : any) => {
      if (prevSelected.includes(testId)) {
        return prevSelected.filter((id : any) => id !== testId);
      } else {
        return [...prevSelected, testId];
      }
    });
  };

  const handleSelectTestsClick = () => {
    const selectedData = selectedTestData.map((id : any) => fulldata.find((test : any) => test.id === id));
    setSelectedTests(selectedData);
    sessionStorage.setItem('tests', JSON.stringify(selectedData));
    toggle();
  };

  const isDisabled = selectedTestData.length === 0;

  const highlightSearchTerm = (text: string, searchTerm: string) => {
    const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  
    if (!searchTerm) {
      // Capitalize the text when no search term is provided
      return capitalize(text);
    }
  
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
  
    return parts.map((part, index) => 
      part.toLowerCase() === searchTerm.toLowerCase() 
        ? <strong key={index}>{capitalize(part)}</strong>  // Highlight and capitalize matching part
        : part.toLowerCase()  // Capitalize non-matching parts
    );
  };
  

  return (
    <Col sm="" xl="" style={{ padding: '0' }}>
      {data &&
      <div className="card-wrapper checkbox-checked" style={{ padding: '0' }}>
        {data.map((test : any, index : any) => (
          <div key={index} className="form-check">
            <Input
              id={`flexCheckDefault-${index}`}
              type="checkbox"
              onChange={() => handleCheckboxChange(index)}
              checked={selectedTestData.includes(test.id)}
              />
            <Label htmlFor={`flexCheckDefault-${index}`} check>
              <div style={{ display: 'grid', gap : 2 }}>
                <div className="gap-3" style={{ display: 'flex', padding: '0' }}>
                  <img style={{ height: '1.3rem', margin: '0' }} className="img-fluid table-avatar" src={`${ImagePath}/Thumbnail-2.png`} alt="test image" />
                  <p title={test.alias}  style={{ margin: '0', paddingTop: '0', paddingBottom: '0', fontSize: '18px' , fontWeight: 400 ,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',  // Enable multiline ellipsis
                    WebkitLineClamp: 2,  // Restrict to 2 lines
                    WebkitBoxOrient: 'vertical',
                  }}>
                    {/* Highlight the search term in the test name */}
                    {highlightSearchTerm(test.test_name, searchTerm)}
                  </p>
                </div>
                <div className="gap-3" style={{ display: 'flex' }}>
                  <p style={{ paddingTop: '0', margin: '0' }}>
                    {test.short_description}
                  </p>
                </div>
                <div className="gap-3" style={{ display: 'flex' }}>
                  <p style={{ display: "block", width: 125, textAlign: "left", color: "", opacity: "0.9", fontWeight: 600, fontSize: '18px', paddingRight: '0' }}>
                    <span style={{ marginRight: '4px' }}><i className='fa fa-rupee'></i></span>
                    {test.price ? test.price : 'N/A'}.00
                  </p>
                </div>
              </div>
            </Label>
          </div>
        ))}
      </div>
      }
      <Col sm="12" style={{ padding: '0' }}>
        <Button
          onClick={handleSelectTestsClick}
          className={`btn-lg ${isDisabled ? 'btn-disabled' : ''}`}
          style={{
            height: '3rem',
            width: '100%',
            backgroundColor: isDisabled ? '#D3D3D3' : '#AE7FD1',
            color: isDisabled ? '#A9A9A9' : 'white',
            cursor: isDisabled ? 'not-allowed' : 'pointer'
          }}
          color=""
          disabled={isDisabled}
        >
          Select Tests
        </Button>
      </Col>
    </Col>
  );
};


const DefaultRadio = ({ savedAddresses , selectedAddress , setSelectedAddress , toggle}: any) => {
    const [selectedTest, setSelectedTest] = useState<number | null>(null);
  
    const [open,setOpen] = useState(false)
    const [toasterContent,setToasterContent] = useState('')
    const [toasterColorContent,setToasterColorContent] = useState('')
    const handleRadioChange = (index: number) => {
      setSelectedTest(index);
    };
  
    const handleSelectTestsClick = () => {
      if (selectedTest !== null) {
        const selectedTestData = savedAddresses[selectedTest];
        console.log("the selected address data",selectedTestData);
        
        // console.log('Selected test data:', selectedTestData);
        sessionStorage.setItem('address', JSON.stringify([selectedTestData]));
        setSelectedAddress([selectedTestData])
        // setToasterContent('All Good, Continue Booking')
        // setToasterColorContent('success')
        // setOpen(true)
        // setTimeout(()=>{
        //     setOpen(false);
        //   },10000)
          toggle();
    window.location.href = '/labs/booking';
        
        //   setSelectedAddress([])
        // Add logic to handle the selected test data
      }
    };
    const isDisabled = selectedTest === null;
  
    return (
      <Col sm="" xl="">
            <ColorsSchemes open={open} setOpen={setOpen} toasterContent={toasterContent} toasterColorContent={toasterColorContent}/>
            {savedAddresses.length > 0 ? (
              <div>
            <div className="card-wrapper checkbox-checked" style={{padding : '0'}}>
          {savedAddresses.map((test: any, index: any) => (
            <div key={index} className="form-check">
              <Input
                id={`flexRadioDefault-${index}`}
                type="radio"
                name="testRadio"
                onChange={() => handleRadioChange(index)}
                checked={selectedTest === index}
              />
              <Label htmlFor={`flexRadioDefault-${index}`} check>
                <div style={{ display: 'grid' }}>
                  <div className="gap-2" style={{ display: 'flex', padding: '0' }}>
                    <p style={{ margin: '0', paddingTop: '0', paddingBottom: '12px' , fontSize : '18px'}}>
                      {test.nick_name}
                    </p>
                  </div>
                  <div className="gap-2" style={{ display: 'flex' }}>
                    <img style={{ height: '3rem', margin: '0' }} className="img-fluid table-avtar" src={`${ImagePath}/Package.png`} alt="test image" />
                    <div style={{display : 'grid'}}>

                    <p style={{ paddingTop: '0', margin: '0' }}>
                      {test.address} , {test.location} , {test.pincode}
                    </p>
                    {/* <p style={{ paddingTop: '0', margin: '0' }}>
                      {test.pincode ? test.pincode : 'N/A'}
                    </p> */}
                    </div>
                  </div>
                  {/* <div className="gap-2" style={{ display: 'flex' }}>
                  </div> */}
                </div>
              </Label>
            </div>
          ))}
              </div>
              <Col sm="12" style={{paddingTop : '24px'}}>
        {/* <Link href={'/labs/booking'}> */}
        <Button
          onClick={handleSelectTestsClick}
          className={`btn-lg ${isDisabled ? 'btn-disabled' : ''}`}
          style={{
            height: '3rem',
            width: '100%',
            backgroundColor: isDisabled ? '#D3D3D3' : '#AE7FD1',
            color: isDisabled ? '#A9A9A9' : 'white',
            cursor: isDisabled ? 'not-allowed' : 'pointer'
          }}
          color=""
          disabled={isDisabled}
          >
          Select Address
        </Button>
          {/* </Link> */}
        </Col>
        </div>
        ) : (
              <p>There are no saved address</p>

        )
}
      </Col>
    );
  };
  



  const ExtraLargeModal = ({ isOpen, toggle , selectedTests,  setSelectedTests} : any) => {
  
    const [data, setData] = useState<any>(null);
    const [fulldata, setFullData] = useState<any>(null);
  const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('/api/tests');
            setData(response.data);
            setFullData(response.data);
            // console.log("the test data",response.data);
            
          } catch (error) {
            
            setData([])
            setError(error.message);
          }
        };
    
        fetchData();
      }, []);


      const fetchData = async () => {
        try {
          const response = await axios.get('/api/tests');
          setData(response.data);
          // console.log("the test data",response.data);
          
        } catch (error) {
          
          setData([])
          setError(error.message);
        }
      };
    
      const [searchTerm, setSearchTerm] = useState('');

const handleSearchInputChange = async (event : any) => {
    const term = event.target.value;
    setSearchTerm(term);

    try {
        const response = await axios.post('/api/tests', { term });
        setData(response.data);
    } catch (error) {
        fetchData();
        setError(error.message);
    }
};

    return (
      <>
      <Col md=''>
        {/* <Button color="info"  onClick={toggle}>{ExtraLargeModals}</Button> */}
        <CommonModal size="xl" isOpen={isOpen} toggle={toggle} sizeTitle="Select Test" >
{/* <Input style={{padding:'10px',width:'100%',borderRadius:'15px',marginTop:'1rem' , marginBottom : '2rem'}} name="twitterUrl" value={''} type="url" placeholder={'Search'} /> */}
<div style={{ position: 'relative', width: '100%' }}>
  <Input
    style={{ 
      padding: '10px', 
      width: '100%', 
      borderRadius: '15px', 
      marginTop: '0', 
      marginBottom: '24px', 
      paddingRight: '30px' // Make space for the "X" icon
    }}
    name="search"
    type="text"
    placeholder="Search"
    onChange={handleSearchInputChange}
    value={searchTerm}
     // Bind value to clear input when "X" is clicked
  />
  {searchTerm && (
    <span 
      style={{
        fontSize : '24px',
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        color: '#999'
      }}
      onClick={() => handleSearchInputChange({ target: { value: '' } })}
    >
      &times;
    </span>
  )}
</div>

<p style={{paddingTop : '0' , margin : '0',textAlign:'center'}}>
                    
                    Example : If you want to search for <span style={{fontWeight:'600'}}>Cholesterol</span>, type Cholesterol and enter.
                    </p>
        <h2 style={{marginTop:'24px', paddingTop : '0' , paddingBottom : '16px',fontWeight:'800',marginLeft:'0'}}>
        {searchTerm ? `Results for "${searchTerm}"` : 'All Tests'}
</h2>

            <DefaultChecks fulldata={fulldata} data={data} selectedTests={selectedTests} setSelectedTests={setSelectedTests} toggle={toggle} searchTerm={searchTerm}/>
          {/* <div className="large-modal-header"><ChevronsRight /><h5 className="f-w-600">{WebDesign}</h5></div>
          <p className="modal-padding-space">We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI.</p>
          {FullScreenData.map(({ title, text }, index) => (
            <Fragment key={index}>
            <div className="large-modal-header"><ChevronsRight /><h5 className="f-w-600">{title}</h5></div>
            <p className="modal-padding-space">{text}</p>
            </Fragment>
            ))} */}
        </CommonModal>
            </Col>
      </>
    );
  };

  const ExtraLargeModalLocation = ({ isOpen, toggle , selectedAddress , setSelectedAddress } : any) => {

    const [selectedOption, setSelectedOption] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace this with actual authentication logic
  const [savedAddresses, setSavedAddresses] = useState<any>([]);
  const modalTitle = selectedOption === "add" ? "Add New Address" : "Select Address";

  const [formData, setFormData] = useState({
    nick_name: '',
  pincode: '',
  location: '',
  address: '', 
  co_ordinates : {}
});

  useEffect(() => {
    const fetchData = async () => {
      
      try {
      const userId = JSON.parse(sessionStorage.getItem('user_id') || 'null');
      if(userId){
        console.log("is inside the data",userId);
        
        setIsLoggedIn(true)
        const response = await axios.get(`/api/patient_info?endpoint=user&id=${userId}`);
        const sortedData = response.data.sort((a : any, b : any) => b.id - a.id); // Sorts in ascending order
        setSavedAddresses(sortedData);
      }
      else {
        setIsLoggedIn(false)
        setSavedAddresses([])
      }
      } catch (error) {
        
        setSavedAddresses([])
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();

    const checkLoginStatus = () => {
      
    fetchData();
    };

    checkLoginStatus();

    window.addEventListener("storage", checkLoginStatus);
    window.addEventListener("sessionUpdate", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
      window.removeEventListener("sessionUpdate", checkLoginStatus);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowForm(false);
  };

  const handleContinueClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (formData: any) => {
    sessionStorage.setItem('address', JSON.stringify([formData]));
    setSelectedAddress([formData])
    setSelectedOption('')
    setShowForm(false);

    // setShowForm(false)
    // setIsLoggedIn(false)
    toggle();
    window.location.href = '/labs/booking';
  };
  const [showModal, setShowModal] = useState(false);

  
  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  const signInButton = () => {
    toggleModal()
  }

  const handleBackClick = () => {
    if (showForm) {
      setShowForm(false);
    } else {
      setSelectedOption('');
    }
  };


  const renderContent = () => {
    if (selectedOption === "add") {
      if (showForm) {
        return (
          <div>

<FloatingForm onSubmit={handleFormSubmit} formData={formData} setFormData={setFormData} />
          </div>
        );
      } else {
        console.log("the form data",formData);
        
        return (
          <div>
            <h2 className="text-black ml-4" style={{paddingBottom:'24px'}}>Current Location</h2>
            <BasicMap formData={formData} setFormData={setFormData}/>
            <p style={{ paddingTop: '16px', margin: '0' }} >
            Map by default shows your current location. If needed, you may drag the pointer to the exact location and continue.
          </p>
          {/* {formData.co_ordinates &&  */}
          <Button
  className="btn-lg"
  disabled={!formData.co_ordinates || Object.keys(formData.co_ordinates).length === 0}
  onClick={handleContinueClick}
  style={{ height: '3rem', width: '100%', backgroundColor: '#AE7FD1', color: 'white', marginTop: '24px' }}
  color=""
>
  Continue
</Button>

          {/* } */}
          </div>
        );
      }
    } 
    else {
      return (
        <div>
      <LoginModal showModal={showModal} toggleModal={toggleModal} routePage={'home'}/>

          <p style={{ paddingTop: '0', margin: '0'  ,cursor : 'pointer',color:'#1D0F8F'}} onClick={() => handleOptionClick("add")}>
            Add new Address.
          </p>
          <div style={{width : '1px' , height : '25px' , backgroundColor : 'black' , margin : '5px 10px'}}></div>
          {/* <br />
          <br />
          <br /> */}
          Or
          {/* <br /><br /><br /> */}
          <div style={{width : '1px' , height : '25px' , backgroundColor : 'black' , margin : '5px 10px'}}></div>

          <p style={{ paddingTop: '0', margin: '0', fontWeight:'600'}} >
            Select from saved Addresses.
          </p>
          <br />
          {!isLoggedIn && (
            <>
              <p style={{ paddingTop: '0', margin: '0' , color : '#C46B65'}}>You must sign in to display saved addresses.</p>
              <br />
              <p style={{ margin: '0', paddingTop: '0', paddingBottom: '10px' , cursor : 'pointer',fontSize:"16px"}} onClick={signInButton}>Click here to <span style={{color : 'blue',fontWeight:'600'}}>Sign in</span></p>
            </>
          )}
          {isLoggedIn && (
            <>
            <DefaultRadio savedAddresses={savedAddresses} selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress} toggle={toggle} />
            {/* <TableHeadOptions savedAddresses={savedAddresses} /> */}
                   </>
          )}
        </div>
      );
    }
  };
  
    return (
      <>
        {/* <Button color="info"  onClick={toggle}>{ExtraLargeModals}</Button> */}
        <CommonModal size="xl" isOpen={isOpen} toggle={toggle} sizeTitle={modalTitle}
        handleBackClick={handleBackClick}>
        {renderContent()}
          <Col sm="12">
                </Col>
        </CommonModal>
      </>
    );
  };

  const CommonModal:React.FC<CommonModalType> = ({backdrop, centered, size, isOpen, toggle, title, onClosed, sizeTitle, fullTitle, modalBodyClassName, children, handleBackClick } ) => {
    return (
      <Modal backdrop={backdrop} centered={centered} size={size} isOpen={isOpen} toggle={toggle} onClosed={onClosed} className='custom-header' style={{maxWidth : '400px' , textAlign : 'left'}}>
        {(title || sizeTitle || fullTitle) && (
          <div className="modal-header">
            {sizeTitle === "Add New Address" && (
            <i
              className="fa fa-angle-left"
              style={{ paddingRight: '24px', fontSize: '24px', color: 'black', cursor: 'pointer' }}
              onClick={handleBackClick} // Handle click event
            ></i>
          )}

            {title && <h5 className="f-w-600">{title}</h5>}
            {sizeTitle && <p className="" style={{fontSize : '24px' , fontWeight : 'bold' , margin : 0}}>{sizeTitle}</p>}
            {fullTitle && <h1 className="fs-5">{fullTitle}</h1>}
            <Button close onClick={toggle}></Button> 
          </div>
        )}
        <ModalBody className={modalBodyClassName ? modalBodyClassName : ""}>{children}</ModalBody>
        {(title || fullTitle) && (
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>{Close}</Button>
            <Button color="primary">{SaveChanges}</Button>
          </ModalFooter>
        )}
      </Modal>
    );
  };
  


  const CommonTable :React.FC<CommonTableProp>= ({ tableClass, strip, caption, size, hover, headClass, headRowClass, headData, children }) => {
    return (
      <div className={`table-responsive theme-scrollbar ${tableClass ? tableClass : ""}`}>
        <Table striped={strip} hover={hover} size={size}>
          {caption && <caption>{caption}</caption>}
          {/* <thead className={headClass}>
            <tr className={headRowClass}>
              {headData.map((head) => (
                <th key={head.id} scope="col">
                  {head.head}
                </th>
              ))}
            </tr>
          </thead> */}
          <tbody>{children}</tbody>
        </Table>
       </div>
    );
  };
  
  const TableHeadOptions=({savedAddresses} : any)=> {
    // TableHeadOptions=()=> {
  
      const TableHeadOptionBody = [
        {
          id: 1,
          firstName: "Vasudevan Ramachandran",
          lastName: "Father",
          userName: "5 tests done so far",
          time: "No upcoming tests"
        },
        {
          id: 2,
          firstName: "Swathi Ramachandran",
          lastName: "Mother",
          userName: "5 tests done so far",
          time: "No upcoming tests"
        },
        {
          id: 3,
          firstName: "Sowmya Ramachandran",
          lastName: "Sister",
          userName: "5 tests done so far",
          time: "No upcoming tests"
        },
      ];
  
    return (
      <Col sm="" style={{paddingRight : '0' , paddingLeft : '0'}}>
        <Card style={{boxShadow : 'none', margin : '0'}}>
          {/* <CommonCardHeader title={TableHeadOption} span={TableHeadOptionData}/> */}
          <Row className="card-block">
            <Col sm="12" lg="12" xl="12">
              <CommonTable headClass="table-dark" headData={TableHeadOptionHead}>
                {TableHeadOptionBody.map((data) => (
                  <tr key={data.id}>
                    {/* <th scope="row">{data.id}</th> */}
                    <td>
          <img style={{height:'4rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/ProfileIcon.png`} alt="user image" />
          {/* {data.lastName} */}
                      </td>
                    <td>
                    <div style={{display : 'grid'}}>
                      <h4 style={{paddingTop : '16px', margin : '0'}}>
                        {data.firstName}
                      </h4>
                      <div className="gap-2" style={{display : 'flex'}}>
                      <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/Icon-Relation.png`} alt="user image" />
  
                      <p style={{paddingTop : '0' , margin : '0'}}>
                      
                      {data.lastName}
                      </p>
                      </div>
                      <div className="gap-2" style={{display : 'flex'}}>
                      <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Syringe.png`} alt="user image" />
                      <p style={{paddingTop : '0', margin : '0'}}> 
  
                      {data.userName}
                      </p>
                      </div>
                      <div className="gap-2" style={{display : 'flex'}}>
                      <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Clock.png`} alt="user image" />
                      <p style={{paddingTop : '0', margin : '0'}}>
  
                      {data.time}
                      </p>
                      </div>
                    </div>
                    </td>
                    <td>
                      <i className='fa fa-angle-right'></i>
                      {/* {data.userName} */}
                      </td>
                  </tr>
                ))}
              </CommonTable>
            </Col>
          </Row>
        </Card>
      </Col>
    );
  }

  const BasicMap = ({formData , setFormData} : any) => {
    const loaderOptions = useMemo(() => ({
      id: "google-map-script",
      // googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your actual API key
      googleMapsApiKey: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAlc4qVGHgErq3Hngdi-XTpOPYlg9wox-I", // Replace with your actual API key
    }), []);
    const { isLoaded } = useJsApiLoader(loaderOptions);
  
    const [clickedLocation, setClickedLocation] = useState<any>();
    // const [currentLocation, setCurrentLocation] = useState(null);
    const [mapCenter, setMapCenter] = useState({ lat: 37.7749, lng: -122.4194 });
    // Handle the click event and set the coordinates
    const handleMapClick = (event: google.maps.MapMouseEvent) => {
      if (event.latLng) {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setClickedLocation({ lat, lng });
        setFormData((prevData: any) => ({
          ...prevData,
          co_ordinates: {
            latitude: lat,
            longitude: lng,
          },
        }));
  
        console.log("Clicked location: ", lat, lng); // You can use this for debugging or further actions
      }
    };

    const useCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
      if (latitude && longitude) {

            setClickedLocation({ lat: latitude, lng: longitude });
      }
            setMapCenter({ lat: latitude, lng: longitude }); // Center map on the current location
            setFormData((prevData: any) => ({
              ...prevData,
              co_ordinates: {
                latitude,
                longitude,
              },
            }));
  
            console.log("Current location: ", latitude, longitude);
          },
          (error) => {
            console.error("Error fetching current location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    console.log("the lcoation marked data",clickedLocation);
    
  
  
    return (
      <Col lg="" md="">
        <Card style={{ marginBottom: '0', borderBottomLeftRadius: '0', borderBottomRightRadius: '0', boxShadow: 'none' }}>
          <CardBody style={{ padding: '0' }}>
          <button 
  onClick={useCurrentLocation} 
  style={{
    marginBottom: '10px',
    padding: '8px 16px',        // Adjust padding for smaller size
    borderRadius: '8px',        // Adds border radius
    border: '1px solid #ccc',   // Adds a border
    backgroundColor: '#f5f5f5', // Background color
    cursor: 'pointer',          // Cursor changes to pointer on hover
    fontSize: '14px',           // Adjusts font size
    color: '#333',              // Text color
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Adds a subtle shadow
  }}
>
  Use Current Location
</button>

            <div className="map-js-height overflow-hidden" style={{ borderTopRightRadius: '1rem', borderTopLeftRadius: '1rem' }}>
              <div id="gmap-simple" className="map-block">
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={{ height: "400px", width: "100%" }}
                    center={mapCenter} // Center map on the current location or default
                    zoom={10}
                    onClick={handleMapClick}
                  >
                    {clickedLocation && (
                      <Marker position={clickedLocation} />
                    )}
                    {/* {clickedLocation && (
                      <Marker position={clickedLocation} icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png" />
                    )} */}
                  </GoogleMap>
                ) : (
                  "Loading"
                )}
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  };
  
  
  // export default BasicMap;
  

  const FloatingForm = ({ onSubmit , formData , setFormData }: any) => {
    // const [formData, setFormData] = useState({
    //     nick_name: '',
    //   pincode: '',
    //   location: '',
    //   address: ''
    // });
  
    const [showPincode, setShowPincode] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showNickName, setShowNickName] = useState(false);

  const handleChange = async (e : any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'address' && value.length >= 3) {
      setShowPincode(true);
    }

    if (name === 'pincode' && value.length === 6) {
      // Call the third-party API when pincode length is 6
      try {
        const response = await axios.get(`https://api.postalpincode.in/pincode/${value}`);
        const locationData = response.data[0];

        if (locationData.Status === 'Success' && locationData.PostOffice.length > 0) {
          const subPostOffice = locationData.PostOffice.find(
            (postOffice : any) => postOffice.BranchType === 'Sub Post Office'
          );

          if (subPostOffice) {
            setFormData({
              ...formData,
              location: `${subPostOffice.Name}, ${subPostOffice.District}, ${subPostOffice.State}`,
              pincode: value
            });
            setShowLocation(true);  // Show location field after fetching the location
      setShowNickName(true);
    } else {
            console.log('No Sub Post Office found for this pincode.');
          }
        } else {
          console.log('Invalid Pincode');
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    }

    if (name === 'location' && value) {
      setShowNickName(true);
    }
  };

  
  
  
    const handleSubmit = (e: React.FormEvent) => {
    // sessionStorage.setItem('address', JSON.stringify([formData]));
    e.preventDefault();
      onSubmit(formData);
    };
    
    const {nick_name , pincode , location , address} = formData;

    const canShowButton = nick_name && pincode && location && address;
  
    return (
      <Col md="">
        {/* <Card style={{ backgroundColor: '#F5F5F5' , boxShadow : 'none', margin : '0' }}> */}
          {/* <CardBody style={{ padding: '24px' }}> */}
            <Form className="floating-wrapper" onSubmit={handleSubmit}>
              <Row className="g-3">
                <Col sm="12">
                  <FormGroup floating className="mb-6">
                    <Input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
                    <Label>Address</Label>
                    <p style={{margin : '0' , paddingTop : '8px' , color : 'GrayText'}}>Example: Flat No. 123, Building No. 123</p>
                  </FormGroup>
                </Col>
                {showPincode && (
            <Col sm="12">
              <FormGroup floating className="mb-6">
                <Input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Pincode"
                />
                <Label>Pincode</Label>
              </FormGroup>
            </Col>
          )}

          {showLocation && (
            <Col sm="12" className="mt-6">
              <FormGroup floating>
                <Input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Location"
                />
                <Label>Location</Label>
              </FormGroup>
            </Col>
          )}

          {showNickName && (
            <Col sm="12" className="mb-6">
              <FormGroup floating>
                <Input
                  type="text"
                  name="nick_name"
                  value={formData.nick_name}
                  onChange={handleChange}
                  placeholder="Name"
                />
                <Label>Nick Name for the address</Label>
                <p style={{ margin: '0', paddingTop: '8px', color: 'GrayText' }}>
                  Example: Home
                </p>
              </FormGroup>
            </Col>
          )}
                {canShowButton &&
                <Col sm="12">
                  {/* <Link href={'/labs/booking'}> */}
                  <Button className="btn-lg" type="submit" style={{ height: '3rem', width: '100%', backgroundColor: '#AE7FD1', color: 'white' }} color="">
                    Select this Address
                  </Button>
                  {/* </Link> */}
                </Col>
                }
              </Row>
            </Form>
          {/* </CardBody>
        </Card> */}
      </Col>
    );
  };


  const ColorsSchemes = ( {open , setOpen , toasterContent , toasterColorContent} : any ) => {
  
    // console.log("toaster content",toasterColorContent,toasterContent)
    return (
      <Col md="">
        <Card style={{boxShadow : 'none', margin : '0'}}>
            {/* {toasterColorContent} */}
          
          {/* <CommonCardHeader title={ColorsScheme} span={ColorSchema} /> */}
          {/* <CardBody className="toast-rtl colors-schemes"> */}
            <Toast fade className={`default-show-toast align-items-center text-light bg-${toasterColorContent} border-0`}
             isOpen={open}
             style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1050,
              margin: "0 auto",
              width: "100%",
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              paddingLeft : '24px',
              // background : 'orangered',
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}>
             <div className="d-flex align-items-center">
    <i className="fa fa-thumbs-up"></i>
    {/* <img style={{height:'15px', marginLeft : '1rem'}} className="img-fluid table-avtar" src={`${ImagePath}/Thumbs-up.png`} alt="user image" /> */}
    <ToastBody className="">{toasterContent}</ToastBody>
    {/* <Button close className="btn-close-white me-2 m-auto" onClick={() => setOpen(false)}></Button> */}
</div>

            </Toast>
          {/* </CardBody> */}
        </Card>
      </Col>
    );
  };
  

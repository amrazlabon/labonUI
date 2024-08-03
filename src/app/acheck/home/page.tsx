'use client'
import { CheckedCheckbox, CheckMeOut, ClickOut, Close, DefaultCheck, Defaultcheckboxes, Email, ExtraLargeModals, Height, ImagePath, MofiLogin, Password, SaveChanges, SignIn, WebDesign, Width } from "@/Constant";
import { Fragment, useEffect, useState } from "react";
// import { Col } from "reactstrap";
import { Card, CardBody, Col, Row, Button , FormGroup, Table , Form , Input , Label , Modal, ModalBody, ModalFooter, Toast, ToastBody} from 'reactstrap';

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
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { BasicCenter, BasicContainerStyle } from "@/Data/Miscellaneous/Maps";
import axios from "axios";


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
  };

//   const [selectedTests, setSelectedTests] = useState<Test[]>([]);
//     const [selectedAddress, setSelectedAddress] = useState<Location[]>([]);
const home = () => {
    const [open,setOpen] = useState(false)
    const [toasterContent,setToasterContent] = useState('')
    const [toasterColorContent,setToasterColorContent] = useState('')

    const [extraLargeScreen, setExtraLargeScreen] = useState(false);
    const extraLargeScreenToggle = () => setExtraLargeScreen(!extraLargeScreen);

    const [extraLargeScreenLocation, setExtraLargeScreenLocation] = useState(false);
    const extraLargeScreenToggleLocation = () => setExtraLargeScreenLocation(!extraLargeScreenLocation);

      
    const [selectedTests, setSelectedTests] = useState<any>([]);
    const [selectedAddress, setSelectedAddress] = useState<Location[]>([]);
    console.log("the selected test in the home page",selectedAddress);
    
    const handleBookingClick = () => {
        sessionStorage.setItem('tests', JSON.stringify(selectedTests));
        sessionStorage.setItem('address', JSON.stringify(selectedAddress));
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
            setToasterColorContent('warning')
            setTimeout(()=>{
                setOpen(false);
            },10000)

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
    return (
        // <Container fluid className="p-3">
        
        <Col md="6" style={{ padding: '0' }}>
            {/* <ModalTwo/> */}
            <ColorsSchemes open={open} setOpen={setOpen} toasterContent={toasterContent} toasterColorContent={toasterColorContent}/>

            <div style={{ background: 'linear-gradient(180deg, #522F62 0%, #9462B5 100%)', height: '16rem', alignContent: 'end' }}>
                <img className="w-100" src={`${ImagePath}/home.png`} alt="user" />

            </div>

            <Card style={{ maxWidth: 'auto', margin: '0' , padding : '0' }}>
      <CardBody style={{padding : '0'}}>
      <div className="btn-group">
  <button className={"test-btn"}>Book a Home Visit</button>
  <button className={"package-btn"}>Integrate Solutions</button>
</div> 
        {/* <h5 style={{ textAlign: 'center' }}>Book a Home Visit</h5>
        <p style={{ textAlign: 'center' }}>Integrate Solution</p> */}
        <Row style={{ marginTop: '20px' }}>
          <Col xs="2" style={{ textAlign: 'center', padding: '0' }}>
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
        <hr />
        <Row>
          <Col xs="2" style={{ textAlign: 'center', padding: '0' }}>
          {selectedAddress.length != 0 ? 

          <FaCheckCircle style={{ color: 'green' }} /> : 
          <FaCheckCircle style={{ color: 'red' }} /> 

          }
          </Col>
          <Col xs="10">
            <p style={{ margin: '0' , cursor : 'pointer'}} onClick={selectLocation}>
                {
                    selectedAddress.length != 0 ? selectedAddress[0].address + selectedAddress[0].location + selectedAddress[0].pincode
 : "Select Location"                }
                {/* Flat No.1A, Skyline Bell Whether, Kurishupalli.. */}
                </p>
          </Col>
        </Row>
        <Link href={'/acheck/booking'}>

        <Button className="btnStyless" onClick={handleBookingClick} style={{ width: '90%', marginTop: '20px', marginLeft : '20px' }} color="primary">
          Book A Blood Test At Home
          <span className="">
          <i style={{marginLeft : '2rem'}} className="fa fa-angle-right"></i>

          </span>
        </Button>
        
        </Link>
      </CardBody>
    </Card>
    <ExtraLargeModal isOpen={extraLargeScreen} toggle={extraLargeScreenToggle} selectedTests={selectedTests}  setSelectedTests={setSelectedTests}/>
    <ExtraLargeModalLocation isOpen={extraLargeScreenLocation} toggle={extraLargeScreenToggleLocation} setSelectedAddress={setSelectedAddress}/>

            <div style={{ background: 'linear-gradient(180deg, #CCBBDB 0%, #F4ECFE 100%)', display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: '1rem' }}>
                <div>

                    <img style={{ position: 'absolute', zIndex: 2, height: '13rem' }} className="img-fluid rounded-circle" src={`${ImagePath}/Phone.png`} alt="user" />
                    <img style={{ position: 'absolute', zIndex: 1 }} className="img-fluid rounded-circle" src={`${ImagePath}/Circles.png`} alt="user" />


                </div>
                <div style={{ zIndex: 1 }}>

                    <h1>
                        Conveniently book through our WhatsApp
                    </h1>
                    <p>
                        Get a smooth and guided booking experience through our WhatsApp
                    </p>

                </div>
            </div>
            <div style={{ marginTop: '2rem' , padding : '24px'}}>
                <p style={{ fontSize: '24px', fontWeight: '700' }}>Purple Labs for everyone</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', columnGap: '1rem' }}>
                    <div>
                        <img className="img-fluid thumbnail" src={`${ImagePath}/Thumbnail.jpg`} alt="user" />

                    </div>
                    <div>
                        <h1>For elderly parents</h1>
                        <p>
                            Schedule a home sample collection and stop worrying about your parents periodical tests.
                        </p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', columnGap: '1rem' }}>
                    <div>
                        <img className="img-fluid thumbnail" src={`${ImagePath}/Thumbnail.jpg`} alt="user" />

                    </div>
                    <div>
                        <h1>For you</h1>
                        <p>
                            It’s important you do not miss a test. We help you repeat your schedule and visit where you are.
                        </p>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', columnGap: '1rem' }}>
                    <div>
                        <img className="img-fluid thumbnail" src={`${ImagePath}/Thumbnail.jpg`} alt="user" />

                    </div>
                    <div>
                        <h1>Anywhere in Kerala</h1>
                        <p>
                            No matter where in Kerala, we will visit you and collect the samples. All you need to do is just schedule it.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ background: '#533063', clipPath: 'polygon(0px 40px, 100% 0px, 100% 100%, 0px 100%)', paddingTop: '2rem' }}>

                <p style={{ fontSize: '24px', fontWeight: '700', color: '#FFFFFF', lineHeight: '29.05px', padding: '24px' }}>
                    The smarter way to manage your home sample collections
                </p>
                <img className="img-fluid family" src={`${ImagePath}/Family.jpg`} alt="user" />


                <p style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: '400', lineHeight: '24px', padding: '24px' }}>
                    We live abroad and our parents keep visiting us once a while. While they are in Kerala, it was a big worry for us about their periodical tests. With Purple Labs, we were able to schedule tests and they come on time and collect samples, wherever the patient is.
                    <br /><br /><br />
                    Not just that, we are able to live track the phlebotomists coming for sample collection and the current location of the samples been collected. This is really a great information for us. Thanks to Purple Labs.
                </p>
            </div>

            <div style={{padding : '24px'}}>
                <p style={{ fontWeight: '700', fontSize: '24px' }}>
                    Making the difference
                </p>
                <p style={{ fontWeight: '800', fontSize: '48px' }}>
                    100k+
                </p>
                <p>
                    Individuals and families have been using Purple Labs, either for themselves or for their parents and relatives.
                </p>
            </div>
            <div style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 0 100%)', background: '#D6E8ED', padding: '2rem', }}>
                <p style={{ fontSize: '24px', fontWeight: '700' }}>From our blogs</p>
                <div>
                    <img className="img-fluid" src={`${ImagePath}/deliverbike.jpg`} alt="user" />

                </div>
                <p style={{ fontSize: '16px', fontWeight: '600', color: '#3E616B' }}>
                    Why tracking of samples collected from homes is important?
                </p>
                <div style={{ color: '#369C3E', display: 'flex' }}>
                    <p>Know more </p>
                    <img style={{ height: '20px' }} className="img-fluid" src={`${ImagePath}/Vector.png`} alt="user" />
                </div>

            </div>
            <div style={{ padding: '1rem' }}>
                <p style={{ fontSize: '24px', fontWeight: '700' }}>Download our apps</p>
                <div style={{ display: 'flex', gap: '1rem' }}>

                    <img style={{ width: '50%' }} className="img-fluid" src={`${ImagePath}/Play Store.png`} alt="user" />


                    <img style={{ width: '50%' }} className="img-fluid" src={`${ImagePath}/App-Store.png`} alt="user" />



                </div>
                <p style={{marginTop:'1rem'}}>Not only through the web, you can also manage everything from our app.</p>
            </div>
            <div style={{padding : '24px'}}>
                <ul className="menu">
                    <li>Book a Home Visit</li>
                    <li>Integrate Our Solution (Labs)</li>
                    <li>Find Tests</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Support</li>
                </ul>
            </div>
            <div style={{padding:'24px'}}>

            <div style={{display:'flex',gap:'1rem'}}>
                <p style={{color:'#999999',textDecorationLine:'underline'}}>Privacy Policy</p>
                <p style={{color:'#999999',textDecorationLine:'underline'}}>Terms of Service</p>
            </div>
            <div>
            <img style={{marginRight:'6rem'}} className="img-fluid" src={`${ImagePath}/Logo.png`} alt="user" />
            <img  className="img-fluid" src={`${ImagePath}/Icon - Instagram.png`} alt="user" />
            <img  className="img-fluid" src={`${ImagePath}/Icon - YouTube.png`} alt="user" />
            <img  className="img-fluid" src={`${ImagePath}/Icon - Twitter.png`} alt="user" />
            <img  className="img-fluid" src={`${ImagePath}/meta.png`} alt="user" />

            </div>



            <p style={{fontSize:'12px',color:'#999999'}}>Copyright 2023, Purple Labs. All Rights Reserved.</p>
            </div>


        </Col>
    );
};

export default home;

// import React, { useState } from 'react';
// import { Col, Input, Label, Button } from 'reactstrap';

const DefaultChecks = ({ data  , selectedTests ,  setSelectedTests , toggle} : any) => {
  const [selectedTestData, setSelectedTestData] = useState([]);

  const handleCheckboxChange = (index : any) => {
    const selectedData = selectedTestData.map((index : any) => data[index]);

    setSelectedTestData((prevSelected : any) => {
      if (prevSelected.includes(index)) {
        return prevSelected.filter((i : any) => i !== index);
      } else {
        return [...prevSelected, index];
      }
    });
  };

  const handleSelectTestsClick = () => {
    const selectedData = selectedTestData.map((index : any) => data[index]);
    console.log('Selected tests data:', selectedData);
    setSelectedTests(selectedData)
    toggle();
    // Perform further actions with selectedData
  };

  return (
    <Col sm="6" xl="4">
      <div className="card-wrapper checkbox-checked">
        {data.map((test : any, index : any) => (
          <div key={index} className="form-check">
            <Input
              id={`flexCheckDefault-${index}`}
              type="checkbox"
              onChange={() => handleCheckboxChange(index)}
            //   checked={selectedTestData.includes(index)}
            />
            <Label htmlFor={`flexCheckDefault-${index}`} check>
              <div style={{ display: 'grid' }}>
                <div className="gap-2" style={{ display: 'flex', padding: '0' }}>
                  <img style={{ height: '1rem', margin: '0' }} className="img-fluid table-avtar" src={`${ImagePath}/icon - Syringe.png`} alt="test image" />
                  <h2 style={{ margin: '0', paddingTop: '0', paddingBottom: '10px' }}>
                    {test.test_name}
                  </h2>
                </div>
                <div className="gap-2" style={{ display: 'flex' }}>
                  <p style={{ paddingTop: '0', margin: '0' }}>
                    {test.label}
                  </p>
                </div>
                <div className="gap-2" style={{ display: 'flex' }}>
                  <h3 style={{ paddingTop: '0', margin: '0' }}>
                    {test.price ? test.price : 'N/A'}
                  </h3>
                </div>
              </div>
            </Label>
          </div>
        ))}
      </div>
      {selectedTestData.length != 0 && 
      <Col sm="12">
        <Button
          onClick={handleSelectTestsClick}
          className="btn-lg"
          style={{ height: '3rem', width: '100%', backgroundColor: '#AE7FD1', color: 'white' }}
          color=""
          >
          Select Tests
        </Button>
      </Col>
        }
    </Col>
  );
};

const DefaultRadio = ({ savedAddresses , setSelectedAddress , toggle}: any) => {
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
        console.log('Selected test data:', selectedTestData);
        setSelectedAddress([selectedTestData])
        // setToasterContent('All Good, Continue Booking')
        // setToasterColorContent('success')
        // setOpen(true)
        // setTimeout(()=>{
        //     setOpen(false);
        //   },10000)
          toggle();
        //   setSelectedAddress([])
        // Add logic to handle the selected test data
      }
    };
  
    return (
      <Col sm="6" xl="4">
            <ColorsSchemes open={open} setOpen={setOpen} toasterContent={toasterContent} toasterColorContent={toasterColorContent}/>
            <div className="card-wrapper checkbox-checked">
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
                    <h2 style={{ margin: '0', paddingTop: '0', paddingBottom: '10px' }}>
                      {test.address}
                    </h2>
                  </div>
                  <div className="gap-2" style={{ display: 'flex' }}>
                    <img style={{ height: '3rem', margin: '0' }} className="img-fluid table-avtar" src={`${ImagePath}/Package.png`} alt="test image" />
                    <div style={{display : 'grid'}}>

                    <p style={{ paddingTop: '0', margin: '0' }}>
                      {test.location}
                    </p>
                    <p style={{ paddingTop: '0', margin: '0' }}>
                      {test.pincode ? test.pincode : 'N/A'}
                    </p>
                    </div>
                  </div>
                  {/* <div className="gap-2" style={{ display: 'flex' }}>
                  </div> */}
                </div>
              </Label>
            </div>
          ))}
        </div>
        <Col sm="12">
          <Button
            onClick={handleSelectTestsClick}
            className="btn-lg"
            style={{ height: '3rem', width: '100%', backgroundColor: '#AE7FD1', color: 'white' }}
            color=""
          >
            Select Test
          </Button>
        </Col>
      </Col>
    );
  };
  



  const ExtraLargeModal = ({ isOpen, toggle , selectedTests,  setSelectedTests} : any) => {
  
    const [data, setData] = useState<any>(null);
  const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('/api/tests');
            setData(response.data);
            console.log("the test data",response.data);
            
          } catch (error) {
            const data = [{
                id : 1,
                test_name : 'Glucose',
                label : 'Glucose Test',
                price : '250'
                
            },
            {
                id : 2,
                test_name : 'Cholesterol',
                label : 'Glucose Test',
                price : '250'
                
            },
            {
                id : 3,
                test_name : 'HDL',
                label : 'Glucose Test',
                price : '250'
                
            }]
            setData(data)
            setError(error.message);
          }
        };
    
        fetchData();
      }, []);


    
      const handleSearchInputChange = async (event : any) => {
        const term = event.target.value;
        try {
            // const response = await axios.get(term ? `http://0.0.0.0:37000/tests/letter/${term}` : '/api/tests');
            const response = await axios.post('/api/tests', {term});
            console.log("the searchrespose data",response.data)
            setData(response.data);
          } catch (error) {
            const data = [{
                id : 1,
                test_name : 'Glucose',
                label : 'Glucose Test',
                price : '250'
                
            },
            {
                id : 2,
                test_name : 'Cholesterol',
                label : 'Glucose Test',
                price : '250'
                
            },
            {
                id : 3,
                test_name : 'HDL',
                label : 'Glucose Test',
                price : '250'
                
            }]
            setData(data)
            setError(error.message);
          }
        // setSearchTerm(term);
        // fetchData(term);
      };
    return (
      <>
        {/* <Button color="info"  onClick={toggle}>{ExtraLargeModals}</Button> */}
        <CommonModal size="xl" isOpen={isOpen} toggle={toggle} sizeTitle="Select Test">
{/* <Input style={{padding:'10px',width:'100%',borderRadius:'15px',marginTop:'1rem' , marginBottom : '2rem'}} name="twitterUrl" value={''} type="url" placeholder={'Search'} /> */}
<Input
          style={{ padding: '10px', width: '100%', borderRadius: '15px', marginTop: '1rem', marginBottom: '2rem' }}
          name="search"
        //   value={searchTerm}
          type="text"
          placeholder="Search"
          onChange={handleSearchInputChange}
        />
<p style={{paddingTop : '0' , margin : '0'}}>
                    
                    Example : If you want to search for Cholesterol, type Cholesterol and enter.
                    </p>
        <h2 style={{margin:'0', paddingTop : '0' , paddingBottom : '10px'}}>
All Tests
</h2>

            <DefaultChecks data={data} selectedTests={selectedTests} setSelectedTests={setSelectedTests} toggle={toggle}/>
          {/* <div className="large-modal-header"><ChevronsRight /><h5 className="f-w-600">{WebDesign}</h5></div>
          <p className="modal-padding-space">We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI.</p>
          {FullScreenData.map(({ title, text }, index) => (
            <Fragment key={index}>
              <div className="large-modal-header"><ChevronsRight /><h5 className="f-w-600">{title}</h5></div>
              <p className="modal-padding-space">{text}</p>
            </Fragment>
          ))} */}
        </CommonModal>
      </>
    );
  };

  const ExtraLargeModalLocation = ({ isOpen, toggle , setSelectedAddress } : any) => {

    const [selectedOption, setSelectedOption] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace this with actual authentication logic
  const [savedAddresses, setSavedAddresses] = useState<any>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
      const userId = sessionStorage.getItem('user_id');
      if(userId){
        setIsLoggedIn(true)
      }
      const response = await axios.get('/api/booking');
        setSavedAddresses(response.data);
        console.log("Saved addresses: where dont know", response.data);
      } catch (error) {
        const data = [{
            id : 1,
            pincode : '678907',
            location : 'Test Location',
            address : 'Test Address',
            nick_name : 'Home'
            
        },
        {
            id : 2,
            pincode : '678907',
            location : 'Test Location',
            address : 'Test Address',
            nick_name : 'Home'
            
        },
        {
            id : 3,
            pincode : '678907',
            location : 'Test Location',
            address : 'Test Address',
            nick_name : 'Home'
            
        },]
        setSavedAddresses(data)
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowForm(false);
  };

  const handleContinueClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (formData: any) => {
    console.log("Form Data:", formData);
    setSelectedAddress([formData])
    setSelectedOption('')
    // setShowForm(false)
    // setIsLoggedIn(false)
    toggle();
    // Handle form submission logic here, e.g., send form data to the server
  };
  const signInButton = () => {
    sessionStorage.setItem('user_id', JSON.stringify(1));
    setIsLoggedIn(true)

  }

  const renderContent = () => {
    if (selectedOption === "add") {
      if (showForm) {
        return (
          <div>
            <h2 className="text-black ml-4 mt-4" style={{paddingBottom:'24px'}}>Current Location</h2>

<FloatingForm onSubmit={handleFormSubmit} />
          </div>
        );
      } else {
        return (
          <div>
            <h2 className="text-black ml-4 mt-4" style={{paddingBottom:'24px'}}>Current Location</h2>
            <BasicMap/>
            <p style={{ paddingTop: '0', margin: '0' }} >
            Map by default shows your current location       . If needed, you may drag the pointer      to the exact location and continue.
          </p>
          <Button onClick={handleContinueClick} style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white' , marginTop : '4rem'}} color="">Continue
            {/* <span><i className="fa fa-angle-right" style={{marginLeft:'1rem'}}></i></span> */}
            </Button>
          </div>
        );
      }
    } 
    // else if (selectedOption === "saved") {
    //   return (
    //     <div>
    //       <h5>Select from Saved Addresses</h5>
    //       <p>There are no saved addresses.</p>
    //     </div>
    //   );
    // } 
    else {
      return (
        <div>
          <p style={{ paddingTop: '0', margin: '0'  ,cursor : 'pointer'}} onClick={() => handleOptionClick("add")}>
            Add new Address.
          </p>
          <div className="vertical-line"></div>
          {/* <br />
          <br />
          <br /> */}
          Or
          {/* <br /><br /><br /> */}
          <div className="vertical-line"></div>

          <p style={{ paddingTop: '0', margin: '0' }} >
            Select from saved Addresses.
          </p>
          <br />
          {!isLoggedIn && (
            <>
              <p style={{ paddingTop: '0', margin: '0' , color : 'red'}}>You must sign in to display saved addresses.</p>
              <br />
              <h2 style={{ margin: '0', paddingTop: '0', paddingBottom: '10px' , cursor : 'pointer'}} onClick={signInButton}>Click here to <span style={{color : 'blue'}}>Sign in</span></h2>
            </>
          )}
          {isLoggedIn && (
            <>
            <DefaultRadio savedAddresses={savedAddresses} setSelectedAddress={setSelectedAddress} toggle={toggle} />
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
        <CommonModal size="xl" isOpen={isOpen} toggle={toggle} sizeTitle="Select Location">
        {renderContent()}
          <Col sm="12">
                </Col>
        </CommonModal>
      </>
    );
  };

  const CommonModal:React.FC<CommonModalType> = ({backdrop, centered, size, isOpen, toggle, title, onClosed, sizeTitle, fullTitle, modalBodyClassName, children } ) => {
    return (
      <Modal backdrop={backdrop} centered={centered} size={size} isOpen={isOpen} toggle={toggle} onClosed={onClosed}>
        {(title || sizeTitle || fullTitle) && (
          <div className="modal-header" onClick={toggle}>
            {title && <h5 className="f-w-600">{title}</h5>}
            {sizeTitle && <h4>{sizeTitle}</h4>}
            {fullTitle && <h1 className="fs-5">{fullTitle}</h1>}
            <Button close></Button>
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


  const ModalTwo = () => {
    const [modalTwo, setModalTwo] = useState(false);
    const modalTwoTogggle = () => setModalTwo(!modalTwo);
  
    return (
      <Col xl="4" md="6" className="custom-alert text-center">
        <div className="card-wrapper border rounded-3 h-100">
          <div className="Mofi-demo-img">
            {/* <CommonMofiModalTitle heading="Modal 2 -" subHeading="Result Modal" text="Example of Mofi login form." /> */}
            <div className="overflow-hidden">
              {/* <img className="image-fluid" src={`${ImagePath}/alert/learning.png`} alt="learning" /> */}
              <Button color="primary" className="mx-auto mt-3" onClick={modalTwoTogggle}>{ClickOut}</Button>
            </div>
            <CommonModal centered modalBodyClassName="social-profile text-start" isOpen={modalTwo} toggle={modalTwoTogggle}>
              <div className="modal-toggle-wrapper">
                {/* <h3>Sign In / Sign Up with Mobile</h3>
                <p>Fill in your information below to continue.</p> */}
                <StaticForm staticModalToggle={modalTwoTogggle} />
              </div>
            </CommonModal>
          </div>
        </div>
      </Col>
    );
  };
  

  const StaticForm:React.FC<StaticModalToggleProp> = ({staticModalToggle}) => {

    const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [showOtp, setShowOtp] = useState(false);
  const [showVerifyButton, setShowVerifyButton] = useState(false);

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Ensure only numbers are entered
    setMobile(value);

    if (value.length === 10) {
      setShowOtp(true);
    } else {
      setShowOtp(false);
      setShowVerifyButton(false);
    }
  };

  const handleOtpChange = (element: HTMLInputElement, index: number) => {
    const value = element.value.replace(/[^0-9]/g, ""); // Ensure only numbers are entered
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if value is entered
      if (value && index < 5) {
        (element.nextSibling as HTMLElement)?.focus();
      }

      // Check if all OTP fields are filled
      if (newOtp.every((digit) => digit.length === 1)) {
        setShowVerifyButton(true);
      } else {
        setShowVerifyButton(false);
      }
    }
  };
    return (
        <Col>
       {/* {()=>( */}
        <Form>
          <Row className="g-3">
          <Col sm="12">
                  <FormGroup  floating className="mb-6">
                    <Input disabled type="text" placeholder='esd' />
                    <Label check>Mobile</Label>
                  </FormGroup>
                </Col>
            {/* <Col md="12">
            <Label check>Sign In / Sign Up with Mobile</Label>
              <Field
                className="form-control"
                name="mobile"
                type="text"
                placeholder="Enter Mobile"
                value={mobile}
                onChange={handleMobileChange}
              />
              <p className="mt-2">Example: 9847098470 (10 digit only)</p>
            </Col> */}
            {/* {showOtp && ( */}
              <Col md="12">
                <Label check htmlFor="otp">Enter OTP sent to your Mobile</Label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {otp.map((data, index) => (
                    <input
                      key={index}
                      type="text"
                      name={`otp${index}`}
                      maxLength={1}
                      className="form-control"
                      value={otp[index]}
                      onChange={(e) => handleOtpChange(e.target, index)}
                      onFocus={(e) => e.target.select()} // Select input value on focus
                      style={{ width: '2rem', textAlign: 'center' }}
                    />
                  ))}
                </div>
              </Col>
            {/* )} */}
            {/* <Col xs="12">
              <div className="form-check">
                <Input type="checkbox" />
                <Label check htmlFor="gridCheck">{CheckMeOut}</Label>
              </div>
            </Col> */}
            {/* {showVerifyButton && ( */}
              <Col xs="12">
                <Button className=' btnStyles' color="primary" type="submit" onClick={staticModalToggle}>Verify<span><i className="fa fa-angle-right" style={{marginLeft:'1rem'}}></i></span></Button>
              </Col>
            {/* )} */}
        </Row>
      </Form>
       {/* )} */}
        </Col>

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
        <Card>
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
                      <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon-Relation.png`} alt="user image" />
  
                      <p style={{paddingTop : '0' , margin : '0'}}>
                      
                      {data.lastName}
                      </p>
                      </div>
                      <div className="gap-2" style={{display : 'flex'}}>
                      <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Syringe.png`} alt="user image" />
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

  const BasicMap = () => {
    const { isLoaded } = useJsApiLoader({
      id: "google-map-script",
      googleMapsApiKey: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places",
    });
    
    return (
      <Col lg="" md="">
        <Card style={{marginBottom : '0' , borderBottomLeftRadius : '0' , borderBottomRightRadius : '0'}}>
          {/* <CommonCardHeader title={BasicDemoMap} /> */}
          <CardBody style={{padding : '0'}}>
            <div className="map-js-height overflow-hidden" style={{borderTopRightRadius : '1rem' , borderTopLeftRadius : '1rem'}}>
              <div id="gmap-simple" className="map-block">
                {isLoaded ? <GoogleMap mapContainerStyle={BasicContainerStyle} center={BasicCenter} zoom={10} /> : "Loading"}
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  };

  const FloatingForm = ({ onSubmit }: any) => {
    const [formData, setFormData] = useState({
        nick_name: '',
      pincode: '',
      location: '',
      address: ''
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(formData);
    };
  
    return (
      <Col md="6">
        <Card style={{ backgroundColor: '#F5F5F5' }}>
          <CardBody style={{ padding: '24px' }}>
            <Form className="floating-wrapper" onSubmit={handleSubmit}>
              <Row className="g-3">
                <Col sm="6">
                  <FormGroup floating className="mb-6">
                    <Input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" />
                    <Label>Pincode</Label>
                  </FormGroup>
                </Col>
                <Col sm="12" className="mt-6">
                  <FormGroup floating>
                    <Input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
                    <Label>Location</Label>
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup floating className="mb-6">
                    <Input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
                    <Label>Address</Label>
                  </FormGroup>
                </Col>
                <Col sm="12" className="mb-6">
                  <FormGroup floating>
                    <Input type="text" name="nick_name" value={formData.nick_name} onChange={handleChange} placeholder="Name" />
                    <Label>Name</Label>
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <Button type="submit" style={{ height: '3rem', width: '100%', backgroundColor: '#AE7FD1', color: 'white' }} color="">
                    Save Address
                  </Button>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
    );
  };


  const ColorsSchemes = ( {open , setOpen , toasterContent , toasterColorContent} : any ) => {
  
    console.log("toaster content",toasterColorContent,toasterContent)
    return (
      <Col md="6">
        <Card>
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
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}>
              <div className="d-flex justify-content-between align-items-center">
        <img style={{height:'15px', marginLeft : '1rem'}} className="img-fluid table-avtar" src={`${ImagePath}/Thumbs-up.png`} alt="user image" />
        <ToastBody>{toasterContent}</ToastBody>
                {/* <Button close className="btn-close-white me-2 m-auto" onClick={() => setOpen(false)}></Button> */}
              </div>
            </Toast>
          {/* </CardBody> */}
        </Card>
      </Col>
    );
  };
  

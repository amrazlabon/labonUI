'use client'
import { CheckedCheckbox, CheckMeOut, ClickOut, Close, DefaultCheck, Defaultcheckboxes, Email, ExtraLargeModals, Height, ImagePath, MofiLogin, Password, SaveChanges, SignIn, WebDesign, Width } from "@/Constant";
import { Fragment, useEffect, useState } from "react";
// import { Col } from "reactstrap";
import { Card, CardBody, Col, Row, Button , FormGroup, Table , Field, Form , Input , Label , Modal, ModalBody, ModalFooter} from 'reactstrap';

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

const home = () => {

    const [extraLargeScreen, setExtraLargeScreen] = useState(false);
    const extraLargeScreenToggle = () => setExtraLargeScreen(!extraLargeScreen);

    const [extraLargeScreenLocation, setExtraLargeScreenLocation] = useState(false);
    const extraLargeScreenToggleLocation = () => setExtraLargeScreenLocation(!extraLargeScreenLocation);


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
            <ModalTwo/>

            <div style={{ background: 'linear-gradient(180deg, #522F62 0%, #9462B5 100%)', height: '16rem', alignContent: 'end' }}>
                <img className="w-100" src={`${ImagePath}/home.png`} alt="user" />

            </div>

            <Card style={{ maxWidth: '390px', margin: '20px auto' }}>
      <CardBody>
      <div className="btn-group">
  <button className={"test-btn"}>Book a Home Visit</button>
  <button className={"package-btn"}>Integrate Solutions</button>
</div> 
        {/* <h5 style={{ textAlign: 'center' }}>Book a Home Visit</h5>
        <p style={{ textAlign: 'center' }}>Integrate Solution</p> */}
        <Row style={{ marginTop: '20px' }}>
          <Col xs="2" style={{ textAlign: 'center', padding: '0' }}>
            <FaCheckCircle style={{ color: 'green' }} />
          </Col>
          <Col xs="10">
            <p style={{ margin: '0' }} onClick={extraLargeScreenToggle}>LDL Cholesterol +2</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs="2" style={{ textAlign: 'center', padding: '0' }}>
            <FaCheckCircle style={{ color: 'green' }} />
          </Col>
          <Col xs="10">
            <p style={{ margin: '0' }} onClick={extraLargeScreenToggleLocation}>Flat No.1A, Skyline Bell Whether, Kurishupalli...</p>
          </Col>
        </Row>
        <Link href={'/acheck/booking'}>

        <Button style={{ width: '100%', marginTop: '20px' }} color="primary">
          Book A Blood Test At Home
        </Button>
        </Link>
      </CardBody>
    </Card>
    <ExtraLargeModal isOpen={extraLargeScreen} toggle={extraLargeScreenToggle} />
    <ExtraLargeModalLocation isOpen={extraLargeScreenLocation} toggle={extraLargeScreenToggleLocation} />

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

export const DefaultChecks = () => {
    return (
      <Col sm="6" xl="4">
        <div className="card-wrapper checkbox-checked">
          {/* <h6 className="sub-title">{DefaultCheck}</h6> */}
          <div className="form-check">
            <Input id="flexCheckDefault" type="checkbox" />
            <Label htmlFor="flexCheckDefault" check>
            <div style={{display : 'grid'}}>


<div className="gap-2" style={{display : 'flex' , padding : '0'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Syringe.png`} alt="user image" />

                    <h2 style={{margin:'0', paddingTop : '0' , paddingBottom : '10px'}}>
Test Name
</h2>
                    </div>
<div className="gap-2" style={{display : 'flex'}}>
                    {/* <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon-Relation.png`} alt="user image" /> */}

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    Test Label
                    </p>
                    </div>
                    <div className="gap-2" style={{display : 'flex'}}>
                    {/* <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Syringe.png`} alt="user image" /> */}

                    <h3 style={{paddingTop : '0' , margin : '0'}}>
                    
                    2200.00
                    </h3>
                    </div>
</div>
                {/* {Defaultcheckboxes} */}
                </Label>
          </div>
          <div className="form-check">
            <Input id="flexCheckChecked" type="checkbox" defaultChecked />
            <Label htmlFor="flexCheckChecked" check>
        {/* {CheckedCheckbox} */}
        <div style={{display : 'grid'}}>


<div className="gap-2" style={{display : 'flex' , padding : '0'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Syringe.png`} alt="user image" />

                    <h2 style={{margin:'0', paddingTop : '0' , paddingBottom : '10px'}}>
Test Name
</h2>
                    </div>
<div className="gap-2" style={{display : 'flex'}}>
                    {/* <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon-Relation.png`} alt="user image" /> */}

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    Test Label
                    </p>
                    </div>
                    <div className="gap-2" style={{display : 'flex'}}>
                    {/* <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Syringe.png`} alt="user image" /> */}

                    <h3 style={{paddingTop : '0' , margin : '0'}}>
                    
                    2200.00
                    </h3>
                    </div>
</div>
            </Label>
          </div>
        </div>
      </Col>
    );
  };

  const ExtraLargeModal = ({ isOpen, toggle } : any) => {
  
    return (
      <>
        {/* <Button color="info"  onClick={toggle}>{ExtraLargeModals}</Button> */}
        <CommonModal size="xl" isOpen={isOpen} toggle={toggle} sizeTitle="Select Test">
<Input style={{padding:'10px',width:'100%',borderRadius:'15px',marginTop:'1rem' , marginBottom : '2rem'}} name="twitterUrl" value={''} type="url" placeholder={'Search'} />
<p style={{paddingTop : '0' , margin : '0'}}>
                    
                    Example : If you want to search for Cholesterol, type Cholesterol and enter.
                    </p>
        <h2 style={{margin:'0', paddingTop : '0' , paddingBottom : '10px'}}>
All Tests
</h2>

            <DefaultChecks/>
          {/* <div className="large-modal-header"><ChevronsRight /><h5 className="f-w-600">{WebDesign}</h5></div>
          <p className="modal-padding-space">We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI.</p>
          {FullScreenData.map(({ title, text }, index) => (
            <Fragment key={index}>
              <div className="large-modal-header"><ChevronsRight /><h5 className="f-w-600">{title}</h5></div>
              <p className="modal-padding-space">{text}</p>
            </Fragment>
          ))} */}
          <Col sm="12">
                  {/* <Link href={'/acheck/booking'}> */}
                    <Button
                    //  onClick={handleBookTimingsClick} 
                     className="btn-lg" style={{ height: '3rem', width: '100%', backgroundColor: '#AE7FD1', color: 'white' }} color="">
                      Select Tests
                       {/* <span><i className="fa fa-angle-right" style={{ marginLeft: '24px' }}></i></span> */}
                    </Button>
                  {/* </Link> */}
                </Col>
        </CommonModal>
      </>
    );
  };

  const ExtraLargeModalLocation = ({ isOpen, toggle } : any) => {

    const [selectedOption, setSelectedOption] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace this with actual authentication logic

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowForm(false);
  };

  const handleContinueClick = () => {
    setShowForm(true);
  };

  const renderContent = () => {
    if (selectedOption === "add") {
      if (showForm) {
        return (
          <div>
            <h2 className="text-black ml-4 mt-4" style={{paddingBottom:'24px'}}>Current Location</h2>

<FloatingForm/>
            {/* <h5>Add New Address</h5>
            <Row className="g-3">
              <Col md="12">
                <Label htmlFor="address">Address</Label>
                <Input type="text" id="address" placeholder="Enter your address" />
              </Col>
              <Col md="12">
                <Button color="primary" className="mt-3">Save Address</Button>
              </Col>
            </Row> */}
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

            {/* <h5>Add New Address</h5>
            <img style={{height:'35px'}} className="img-fluid table-avtar" src={`${ImagePath}/Thumbs-up.png`} alt="user image" /> */}
            {/* <img src="path/to/your/image.jpg" alt="Add Address" style={{ width: '100%', marginBottom: '1rem' }} /> */}
            {/* <Button color="primary" onClick={handleContinueClick}>Continue</Button> */}
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
          <p style={{ paddingTop: '0', margin: '0' }} onClick={() => handleOptionClick("add")}>
            Add new Address.
          </p>
          <p style={{ paddingTop: '0', margin: '0' }} >
            Select from saved Addresses.
          </p>
          {!isLoggedIn && (
            <>
              <p style={{ paddingTop: '0', margin: '0' }}>You must sign in to display saved addresses.</p>
              <h2 style={{ margin: '0', paddingTop: '0', paddingBottom: '10px' }} onClick={() => setIsLoggedIn(true)}>Click here to sign in</h2>
            </>
          )}
          {isLoggedIn && (
            <>
            <TableHeadOptions/>
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
        {/* <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    Add new Address.
                    </p>

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    or.
                    </p>

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    Select from saved Addresses.
                    </p>

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    You must sign in to display saved addresses.
                    </p>
        <h2 style={{margin:'0', paddingTop : '0' , paddingBottom : '10px'}}>
Click here to sign in
</h2> */}

            {/* <DefaultChecks/> */}
          {/* <div className="large-modal-header"><ChevronsRight /><h5 className="f-w-600">{WebDesign}</h5></div>
          <p className="modal-padding-space">We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI.</p>
          {FullScreenData.map(({ title, text }, index) => (
            <Fragment key={index}>
              <div className="large-modal-header"><ChevronsRight /><h5 className="f-w-600">{title}</h5></div>
              <p className="modal-padding-space">{text}</p>
            </Fragment>
          ))} */}
          <Col sm="12">
                  {/* <Link href={'/acheck/booking'}> */}
                    {/* <Button
                     onClick={handleBookTimingsClick} 
                     className="btn-lg" style={{ height: '3rem', width: '100%', backgroundColor: '#AE7FD1', color: 'white' }} color="">
                      Select Tests
                       <span><i className="fa fa-angle-right" style={{ marginLeft: '24px' }}></i></span>
                    </Button> */}
                  {/* </Link> */}
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
  
  const TableHeadOptions=()=> {
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

  const FloatingForm = () => {
    return (
      <Col md="6">
  
  
        
        <Card style={{backgroundColor:'#F5F5F5'}}>
          {/* <CommonCardHeader title={FormFloating} span={FloatingFormData} /> */}
          <CardBody style={{padding : '24px'}}>
            <div className="">
              <Form className="floating-wrapper" onSubmit={(e : any)=>e.preventDefault()}>
                <Row className="g-3">
                  <Col sm="12" className="mb-6">
                    <FormGroup floating>
                      <Input type="text" placeholder='{PasswordFloatingPlaceholder}' />
                      <Label check>Name</Label>
                    </FormGroup>
                  </Col>
                  <Col sm="6">
                    <FormGroup  floating className="mb-6">
                      <Input type="text" placeholder='{EmailFloatingPlaceholder}' />
                      <Label check>Pincode</Label>
                    </FormGroup>
                  </Col>
                  <Col sm="12" className="mt-6">
                    <FormGroup floating>
                      <Input type="text" placeholder='{PasswordFloatingPlaceholder}' />
                      <Label check>Location</Label>
                    </FormGroup>
                  </Col><Col sm="12">
                    <FormGroup  floating className="mb-6">
                      <Input type="text" placeholder='{EmailFloatingPlaceholder}' />
                      <Label check>Address</Label>
                    </FormGroup>
                  </Col>
                  {/* <Col sm="12" className="mt-0">
                    <div className="form-check checkbox-checked">
                      <Input id="gridCheck" type="checkbox" />
                      <Label htmlFor="gridCheck" check>{CheckMeOut}</Label>
                    </div>
                  </Col> */}
                  <Col sm="12">
                  {/* <Link href={'/acheck/testss'}> */}
                    <Button style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white'}} color="">Save Address 
                        {/* <span><i className="fa fa-save" style={{marginLeft: '24px'}}></i></span> */}
                        </Button>
                  {/* </Link> */}
                  </Col>
                </Row>
              </Form>
            </div>
          </CardBody>
        </Card>
      </Col>
    );
  };

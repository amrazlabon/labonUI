'use client'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, InputGroup, Label, Row, Table , Modal , ModalHeader , ModalBody } from "reactstrap";
// import BasicCard from "./BasicCard";
// import CustomHorizontalWizardFormTabContent from "./CustomHorizontalWizardFormTabContent";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { setActiveTab } from "@/Redux/Reducers/ProjectSlice";
// import BasicCard from "./BasicCard";
import Calendar from "react-calendar";
import { BasicDemoMap, Discount, ExtraLargeModal, ExtraLargeModals, FullScreenModals, ImagePath, MarginLeft, PaddingLeft, Subtotal, Tax, WebDesign, WebDesigns } from "@/Constant";
import BasicCard from "./BasicCard";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { BasicCenter, BasicContainerStyle } from "@/Data/Miscellaneous/Maps";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CommonTableProp } from "@/Types/TableType";
import { TableHeadOptionBody, TableHeadOptionHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTable";
import Link from "next/link";
import { SimpleAccordion } from "./SimpleAccordion";
// import CommonModal from "@/Components/UiKits/Modal/Common/CommonModal";
import { ChevronsRight } from "react-feather";
import { FullScreenData } from "@/Data/Uikits/modal";
import './basicStyles.css'
import axios from "axios";
// import NavComponent from "./NavComponent";
// import CustomHorizontalWizard from ".";

// import OpenModalMofi from ".";

const Summary = ({profile , setProfile , setStepActive , selectedTests, selectedAddress , setSelectedTests , fullScreen , setFullScreen} : any) => {

  // const [fullScreen, setFullScreen] = useState(false);
  const fullScreenToggle = () => setFullScreen(!fullScreen);

  
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
        setActiveTab(tab);
      }, []);
      const handleBookTimingsClick =() => {
        setStepActive(4)
      }
      console.log("the profile value",profile);
      
      const handleAddToCartClick = () => {
        setFullScreen(true); // or false, depending on what you want to do
      };

      const editClick = () => {

      // console.log("comin ghere");
      
        setStepActive(2)
      }
      
    return (
    <Col md='' >

      <FullScreenModal isOpen={fullScreen} toggle={fullScreenToggle} selectedTests={selectedTests} profile={profile} setSelectedTests={setSelectedTests} setProfile={setProfile}/>
      {/* <div style={{padding : '0', height:'12rem', width:'100%',backgroundImage: 'linear-gradient(180deg, #522F62 0%, #9462B5 100%)',}}>
<h1 className="text-white" style={{padding:'24px', margin: '0'}}>Home Visit Booking</h1>

<div style={{ display: 'flex', alignItems: 'center' , paddingBottom : '24px'}}>
  <div style={{ flex: 1, display: 'flex', justifyContent: '' }}>
    
      <div>
  <p className="text-white" style={{paddingBottom:'8px',paddingLeft : '24px', margin: '0'}}>Glucose</p>
  <h2 className="text-white" style={{padding:'0', paddingLeft : '24px', margin: '0'}}>1100.00</h2>
</div>
  </div>
  <div style={{ flex: 1, display: 'flex', justifyContent: 'center' ,paddingRight : '24px'}}>
                  <Button style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white'}} color="">Add To Cart</Button>

  </div>
</div>

<div style={{marginTop : '24px', height:'2rem', width:'100%',backgroundColor:'#F5F5F5' , borderTopLeftRadius : '16px' , borderTopRightRadius : '16px'}}>
</div>
</div> */}
      {/* <h1 className="text-black ml-4 mt-4 " style={{margin:'2rem' }}>Tests</h1> */}

      <Card style={{backgroundColor:'#F5F5F5' , padding : '0' , boxShadow : 'none' , margin : '0'}}>
{/* <div> */}
<h1 className="text-black " style={{paddingBottom:'16px' , margin : '0'}}>Summary</h1>

<BasicCard/>

<div style={{paddingBottom :'12px'}}>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h2 className="text-black ml-4" style={{ paddingBottom: '16px' }}>Patient Details</h2>
  <i onClick={editClick} style={{fontSize : '20px'}} className="fa fa-edit"></i>
</div>
<BasicCardProfile profile={profile}/>
  
</div>

<div style={{paddingBottom :'24px'}}>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <h2 className="text-black ml-4 mt-3" style={{ paddingBottom: '16px' }}>Home Test Location</h2>
  <i onClick={editClick} style={{fontSize : '20px'}} className="fa fa-edit"></i>
</div>


<BasicMap profile={profile}/>
<BasicCardProfileMap profile={profile}/>
</div>
<BasicCardSchedule setStepActive={setStepActive} profile={profile}/>
                                    
{/* </div> */}
<div>
<h2 className="text-black ml-4 mt-4" style={{paddingBottom:'16px'}}>Selected Tests</h2>
{/* <TableHeadOptions/> */}
<div>
<SimpleAccordion selectedTests={selectedTests}/>

{/* <CardBody> */}
            <Table className="table-wrapper table-responsive theme-scrollbar" borderless>
              <tbody>
                {/* <tr>
                  <InvoiceFourHeader />
                </tr> */}
                {/* <tr>
                  <InvoiceFourDetail />
                </tr> */}
                {/* <tr>
                  <InvoiceFourTable />
                </tr>
                <tr style={{ height: 3, width: "100%", background: "linear-gradient(90deg, #7A70BA 20.61%, #0DA759 103.6%)", display: "block", marginTop: 6 }} /> */}
                <tr>
                  <InvoiceTotal selectedTests={selectedTests} width={'100'}/>
                </tr>
              </tbody>
            </Table>
          {/* </CardBody> */}
</div>
</div>
{/* <CustomHorizontalWizard differentId heading="Custom vertical wizard" horizontalWizardClass="vertical-options vertical-variations" firstXl={3} secondXl={9} /> */}

{/* <CardBody>
          <div className={`horizontal-wizard-wrapper vertical-options`}>
            <Row className="g-3">
              <Col xl={firstXl} xs={xs} className="main-horizontal-header">
                <NavComponent callbackActive={callback} activeTab={activeTab} />
              </Col>
              <Col xl={secondXl} xs={xs}>
                <CustomHorizontalWizardFormTabContent activeTab={activeTab} callbackActive={callback} differentId={differentId}/>
              </Col>
            </Row>
          </div>
        </CardBody> */}
{/* <CustomHorizontalWizardFormTabContent activeTab={1} callbackActive={callback} differentId={false}/> */}

<Col sm="12">
{/* <Link href={'/labs/send_details'}> */}
                  <Button onClick={handleAddToCartClick} style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white' , marginTop : '24px'}} color="primary" className="btn-lg" >Add To Cart<span><i className="fa fa-angle-right" style={{marginLeft:'1rem'}}></i></span></Button>
{/* </Link> */}
                </Col>
        <div>
            {/* <OpenModalMofi/> */}
        </div>
        </Card>
        </Col>
    )
}

export default Summary;

const BasicCardSchedule = ({setStepActive ,  profile} : any) => {
  const BasicCardText1: string = "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as";
  const BasicCardText2: string = " , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.";

  const editClick = () => {

    // console.log("comin ghere");
    
      setStepActive(0)
    }

  return (
    <Col sm="12" xl="12">
      <Card style={{backgroundColor : '#E5E5E5' , boxShadow : 'none' , margin : '0' ,border: '1px solid rgba(0, 0, 0, 0.1)'}}>
        {/* <CommonCardHeader title={BasicCards} span={BasicCardData} /> */}
        <CardBody>
          {/* <div style={{display : 'flex'}}> */}

        {/* <img style={{height:'15px'}} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" /> */}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="mb-0" style={{paddingBottom: '8px'}}>
Home Test Schedule
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </h2>
            <i onClick={editClick} style={{fontSize : '20px'}} className="fa fa-edit"></i>
</div>
        
          <p style={{background: 'rgba(101, 196, 102, 1)', color : 'white' , borderRadius : '5px' , padding : '2px' , width: '5rem' , textAlign : 'center'}}>Upcoming</p>
          <div className="gap-4" style={{display : 'flex' , marginTop:'8px'}}>
            <div style={{display : 'flex'}}>
            <img style={{height:'2rem'}} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Calendar.png`} alt="user image" />

            <p className="mb-0 mt-2">
{profile.date}
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>
            </div>

            <div style={{display : 'flex'}}>
            <img style={{height:'2rem'}} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Clock.png`} alt="user image" />

            <p className="mb-0 mt-2" >
{profile.timeslot}
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>
            </div>

          
          
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

const BasicCardProfileMap = ({profile} : any) => {
  const BasicCardText1: string = "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as";
  const BasicCardText2: string = " , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.";

  console.log("the profile data inside the home address is right",profile);
  
  return (
    <Col sm="12" xl="12">
      <Card style={{backgroundColor : '' , borderTopLeftRadius : '0' , borderTopRightRadius : '0', boxShadow : 'none' , margin : '0'}}>
        {/* <CommonCardHeader title={BasicCards} span={BasicCardData} /> */}
        <CardBody>
          {/* <div className="gap-4" style={{display : 'flex'}}> */}

        {/* <img style={{height:'5rem'}} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" /> */}
        {/* <img style={{height:'7rem', margin:'2rem'}} className="img-fluid table-avtar" src={`${ImagePath}/ProfileIcon.png`} alt="user image" /> */}

<div style={{display : 'grid'}}>

          <p className="mb-0" style={{paddingBottom : '8px' , fontSize : '16px', fontWeight : '600'}}>
{profile.nick_name ? profile.nick_name : 'Home'} Address
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>
          {/* <h1 className="mb-0"> */}
{/* Ramakrishnan */}
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          {/* </h1> */}
          <p className="mb-0">
            {profile.address} , {profile.location} , {profile.pincode}
          
          {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>
</div>
          {/* </div> */}
        </CardBody>
      </Card>
    </Col>
  );
};

const BasicCardProfile = ({profile} : any) => {
  const BasicCardText1: string = "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as";
  const BasicCardText2: string = " , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.";

  return (
    <Col sm="12" xl="12">
      <Card style={{backgroundColor : '' , boxShadow : 'none' , margin : '0'}}>
        <CardBody>

        <div className="gap-2" style={{ display: 'flex', alignItems: 'center' , paddingBottom : '0'}}>
  <div style={{ flex: 1, display: 'flex', justifyContent: '' }}>
<img style={{height:'7rem', margin:'0 ' , borderRadius : '5px'}} className="img-fluid table-avtar" src={`${ImagePath}/Father.png`} alt="user image" />

  </div>
  <div style={{ flex: 2, display: 'flex', justifyContent: 'center' ,paddingRight : '0'}}>
                  <div style={{display : 'grid'}}>


<h1 style={{margin:'0', paddingTop : '0' , paddingBottom : '10px' , fontWeight : '600'}}>
{profile.name ? profile.name : 'Vasudevan Ramachandran  '}
</h1>
<div className="gap-2" style={{display : 'flex' , padding : '0' , paddingBottom : '4px'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Gender.png`} alt="user image" />

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    {profile.gender ? profile.gender : 'Male'} ({profile.age ? profile.age : '63'} Years)
                    </p>
                    </div>
<div className="gap-2" style={{display : 'flex' , paddingBottom : '4px'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/Icon-Relation.png`} alt="user image" />

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    {profile.relation ? profile.relation : 'NA'}
                    </p>
                    </div>
                    <div className="gap-2" style={{display : 'flex' , paddingBottom : '0'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Syringe.png`} alt="user image" />

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    {profile.tests ? profile.tests : '0' } Tests done so far
                    </p>
                    </div>
</div>
  </div>
</div>
        </CardBody>
      </Card>
    </Col>
  );
};

const BasicMap = ({ profile }: any) => {
  const loaderOptions = useMemo(() => ({
    id: "google-map-script",
    // googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY", // Replace with your actual API key
    googleMapsApiKey: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAlc4qVGHgErq3Hngdi-XTpOPYlg9wox-I", // Replace with your actual API key
  }), []);
  const { isLoaded } = useJsApiLoader(loaderOptions);

  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAlc4qVGHgErq3Hngdi-XTpOPYlg9wox-I", // Replace with your actual API key
  // });
  console.log("the value of the selected tests",profile);
  

  const coordinates = {
    lat: profile?.co_ordinates?.latitude || 0,
    lng: profile?.co_ordinates?.longitude || 0,
  };

  return (
    <Col lg="" md="">
      <Card style={{ marginBottom: "0", borderBottomLeftRadius: "0", borderBottomRightRadius: "0" }}>
        <CardBody style={{ padding: "0" }}>
          <div className="map-js-height overflow-hidden" style={{ borderTopRightRadius: "1rem", borderTopLeftRadius: "1rem" }}>
            <div id="gmap-simple" className="map-block">
              {isLoaded ? (
                <GoogleMap mapContainerStyle={BasicContainerStyle} center={coordinates} zoom={10}>
                  <Marker position={coordinates} />
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

const InvoiceTotal = ({selectedTests , width} : any) => {
  
  console.log("width data",width)
  return (
    <td >
      <Table style={{ width: `${width}%` , marginLeft : '0' }}>
        <tbody>
          <tr 
          //  style={{ display: "flex", justifyContent: "space-between", margin: "16px 0 24px 0", alignItems: "end" }}
           >
            {/* <td style={{ display: "flex", gap: 10 }}>
              <span style={{ color: "#7A70BA", fontSize: 16, fontWeight: 600 }}>{PaymentTeams} :</span>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, fontWeight: 400, width: "55%" }}>{"This denotes a payment credit for a full month's supply."}</span>
            </td> */}
            <td style={{padding : '0'}}>
              <InvoiceSubTotal selectedTests={selectedTests}/>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

const InvoiceSubTotal = ({selectedTests} : any) => {

  const totalPrice = selectedTests.reduce((total : any, test : any) => {
    return total + (test.price ? parseFloat(test.price) : 0);
  }, 0);
  return (
    <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
      <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: 0 }}>
        <span style={{ display: "block", width: 95, textAlign: "left" , marginLeft : '12px' , color : 'grey'}}>{Subtotal}</span>
        {/* <span style={{ display: "block", textAlign: "right" }}>:</span> */}
        <span style={{ display: "block", width: 125, textAlign: "right", color: "", opacity: "0.9", fontWeight: 600 ,paddingRight : '2rem'  }}><span style={{marginRight : '3px'}}><i className='fa fa-rupee'></i></span>{formatPrice(totalPrice)}</span>
      </li>
      <hr style={{border: 'none',  borderTop: '1px solid #000',  margin: '8px 0' }}/>
      {/* <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: 0 }}>
        <span style={{ display: "block", width: 95, textAlign: "left", marginLeft : '12px' , color : 'grey'}}>GST (18%)</span>
        <span style={{ display: "block", width: 125, textAlign: "right", color: "", opacity: "0.9", fontWeight: 600 ,paddingRight : '2rem' }}><span style={{marginRight : '4px'}}><i className='fa fa-rupee'></i></span>{formatPrice(totalPrice *0.18)}</span>
      </li>
      <hr style={{border: 'none',  borderTop: '1px solid #000',  margin: '8px 0' }}/>
      <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: 0 }}>
        <span style={{ display: "block", width: 95, textAlign: "left" , marginLeft : '12px', color : 'grey' }}>Convinience Fee</span>
        <span style={{ display: "block", width: 125, textAlign: "right", color: "", opacity: "0.9", fontWeight: 600 ,paddingRight : '2rem' }}><span style={{marginRight : '4px'}}><i className='fa fa-rupee'></i></span>{formatPrice(totalPrice * 0.07)}</span>
      </li>
      <hr style={{border: 'none',  borderTop: '1px solid #000',  margin: '8px 0' }}/> */}
      {/* <li style={{ display: "flex", alignItems: "center" }}>
        <span style={{ display: "block", width: 95 }}>{TotalDue}</span>
        <span style={{ display: "block",color: "#7A70BA", opacity: "0.9", fontWeight: 600, padding: "12px 25px", borderRadius: 5, background: "rgba(122, 112, 186 , 0.1)", fontSize: 16}} >$6120.00</span>
      </li> */}
      <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: 0 }}>
        <span style={{ display: "block", width: 95, textAlign: "left", marginLeft : '12px' , fontWeight : '600' }}>Total</span>
        {/* <span style={{ display: "block", textAlign: "right" }}>:</span> */}
        
        <div style={{display : 'grid'}}>
        <span style={{ display: "block", width: 125, textAlign: "right", color: "", opacity: "0.9", fontWeight: 600 , fontSize : '18px' ,paddingRight : '2rem'  }}> <span style={{marginRight : '4px'}}><i className='fa fa-rupee'></i></span>{formatPrice(totalPrice)}
        {/* <p style={{background: 'rgba(196, 107, 101, 1)', color : 'white' , borderRadius : '5px' , padding : '2px' , width: '4rem' , margin : '0', marginRight : '0'}}>UnPaid</p> */}

        </span>
          {/* <p>hbsf</p>
          <p>hbsf</p> */}
        <p style={{display: "block" , background: 'rgba(196, 107, 101, 1)', color : 'white' , borderRadius : '5px' , padding : '2px' , width: '4rem'  , justifySelf: 'end' ,marginRight : '2rem' , textAlign : 'center' }}>Unpaid</p>
        </div>
      </li>

      <hr style={{border: 'none',  borderTop: '1px solid #000',  margin: '8px 0' }}/>
    </ul>
  );
};

function formatPrice(value : any) {
  return value.toFixed(2);
}


const FullScreenModal = ({isOpen , toggle , selectedTests , profile , setSelectedTests , setProfile} : any) => {
  // const [fullScreen, setFullScreen] = useState(false);
  // const fullScreenToggle = () => setFullScreen(!fullScreen);

  console.log("profile values",profile);

  const formatDateToISO = (dateString: string): string => {
    const [day, month, year] = dateString.split('/');
  
    // Create the date object with UTC values to prevent timezone shift
    const dateObject = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
  
    return dateObject.toISOString().split('T')[0]; // Keep only the date part (yyyy-MM-dd)
  };
  
  const handleBookingClick = async () => {
    try {
      const userId = JSON.parse(sessionStorage.getItem('user_id') || 'null');

    if (userId) {
      

      // setSelectedTests(JSON.parse(tests));
    //   setProfile((prevProfile : any) => ({
    //     ...prevProfile,
    //     user_id: userId
    // }));
    
      const reqBody = {
        user_id: userId,
    // labsub_id: profile.labsub_id,
    test_id: profile.test_data.map((item : any) => item.id).join(','),    
    timeslot_id: profile.timeslot_id,
    ...(profile.patient_id && { patient_id: profile.patient_id }),
    // patient_id : profile.patient_id ,
    name : profile.name,
    pincode : profile.pincode,
    location: profile.location,
    address : profile.address,
    gender : profile.gender,
    email : profile.email,
    mobile : '+91' + profile.mobile,
    nick_name :profile.nick_name,
    time_slot :profile.timeslot,
    test_date : formatDateToISO(profile.date),
    co_ordinates : profile.co_ordinates,

    // dob : formatDateToISO(profile.dob),
    age : profile.age,
    // relation : profile.relation
    // sub_total :'profile.sub_total',
    // total :'profile.total',
    // gst : 'profile.gst',
    // convenience_fee :'profile.convenience_fee',
      }      
      sessionStorage.setItem('booking_order', JSON.stringify(profile));
      const response = await axios.post('/api/orders',reqBody);
      
      if(response) {
        console.log("the reposne from the abovd",profile.test_date);
        const reqBody ={
          mobile : '+91' + profile.mobile,
          var1 : profile.date,
          var2 : profile.timeslot,
          var3 : 'LBNUSR'+ response.data[0].id,
          endpoint : 'booking_confirmed'

        }
      const smsResponse = await axios.post('/api/send_sms',reqBody);

      window.location.href = '/labs/send_details'
      }
      // setSavedAddresses(response.data);
      // console.log("Saved addresses: where dont know", response.data);
    } 
  }
  catch (error) {
      console.error("Error fetching data:", error.message);
    }
    // sessionStorage.setItem('address', JSON.stringify(selectedAddress));
  };

  const handleRowClick = (data: any) => {
    if (selectedTests.length > 1) {
      // Filter out the item from selectedTests
      const updatedSelectedTests = selectedTests.filter((test: any) => test.id !== data.id);
      setSelectedTests(updatedSelectedTests);

      // Filter out the item from profile.test_data
      const updatedTestData = profile.test_data.filter((test: any) => test.id !== data.id);
      setProfile({
        ...profile,
        test_data: updatedTestData,
      });

      console.log("Updated selectedTests:", updatedSelectedTests);
      console.log("Updated profile:", profile);
    } else {
      // Optionally, you can show a message or perform another action if deletion is not allowed
      console.log("Cannot delete the last item");
      // For example, you could show an alert:
      // alert("You cannot delete the last item in the cart.");
    }
  };


  return (
    <Modal
      fullscreen
      isOpen={isOpen}
      toggle={toggle}
      className={`modal-slide-in`} // Apply your custom class here
      style={{ transition: 'transform 0.5s ease-out' }} // Optional transition style
    >
      <ModalHeader toggle={toggle}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', textAlign: 'center' }}>
          <img
            style={{ height: '4rem', margin: '0 auto' }}
            className="img-fluid table-avatar"
            src={`${ImagePath}/Icon.png`}
            alt="user image"
          />
          <p style={{ fontSize: '24px', fontWeight: '600', margin: '0' }}>
            My Shopping Cart
          </p>
          <p style={{ margin: '0' }}>{selectedTests.length} Item{selectedTests.length !== 1 ? 's' : ''}</p>
        </div>
      </ModalHeader>
      <ModalBody className="dark-modal" style={{ padding: '24px' }}>
        <TableHeadOptions selectedTests={selectedTests} handleRowClick={handleRowClick}/>
        <InvoiceTotal selectedTests={selectedTests} width={'110'} />
        <p style={{ paddingTop: '24px', paddingBottom: '24px', margin: '0' }}>
          Transportation is charged extra. Minimum charge for Transportation is <span style={{ fontWeight: 'bold' }}><i className='fa fa-rupee'></i>100.00</span>. You can pay the Transportation fee at the time of sample collection.
        </p>
        <Col sm="12">
          {/* <Link href={'/labs/send_details'}> */}
            <Button onClick={handleBookingClick} style={{ height: '3rem', width: '100%', backgroundColor: '#AE7FD1', color: 'white', marginTop: '0' }} color="">
              Confirm Booking
            </Button>
          {/* </Link> */}
        </Col>
      </ModalBody>
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

const TableHeadOptions=({selectedTests , handleRowClick} : any)=> {

  // const { setBookingData } = useBooking();
  console.log("the data informations ",selectedTests);
  
  // TableHeadOptions=()=> {

    const TableHeadOptionBody = [
      {
        id: 1,
        test_date: "25/07/2024",
        lastName: "2 Tests",
        userName: "LBNHVB100420241",
        time: "07:00 AM"
      },
      {
        id: 2,
        test_date: "28/07/2024",
        lastName: "2 Tests",
        userName: "LBNHVB100420241",
        time: "07:00 AM"
      },
      {
        id: 3,
        test_date: "29/07/2024",
        lastName: "2 Tests",
        userName: "LBNHVB100420241",
        time: "07:00 AM"
      },
    ];

  return (
    <Col sm="" style={{paddingRight : '0' , paddingLeft : '0' , paddingBottom : '24px'}}>
      <Card style={{boxShadow : 'none' , margin : '0'}}> 
        {/* <CommonCardHeader title={TableHeadOption} span={TableHeadOptionData}/> */}
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12" style={{paddingLeft : '0' , paddingRight : '0'}}>
            <CommonTable headClass="table-dark" headData={TableHeadOptionHead}>
              {selectedTests.map((data : any) => (
                <tr style={{ cursor: 'pointer' }} key={data.id} >
                  {/* <th scope="row">{data.id}</th> */}
                  <td style={{paddingTop : '0'}}>
        <img style={{height:'3rem', margin:'0' , borderRadius : '5px'}} className="img-fluid table-avtar" src={`${ImagePath}/ThumbnailTest.png`} alt="user image" />
        {/* {data.lastName} */}
                    </td>
                  <td style={{paddingLeft : '0' , paddingTop : '8px'}}>
                  <div style={{display : 'grid'}}>
                  <p style={{ paddingTop: '0', margin: '0' , fontSize : '16px' , fontWeight : '600' }}>
                          {data.test_name}
                        </p>
                    {/* <div className="gap-1" style={{display : 'flex', marginTop : '0'}}>

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    {data.lastName}1 Test
                    </p>
                    </div> */}
                    <div className="gap-1" style={{display : 'flex', marginTop : '4px'}}>
                    {/* <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Clock.png`} alt="user image" /> */}
                    <p style={{paddingTop : '0', margin : '0'}}> 

                    {/* {data.timeslot_id} */}
                    Code : {data.id}
                    </p>
                    </div>
                    <div className="gap-1" style={{display : 'flex', marginTop : '4px'}}>
                    {/* <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/VectorProfile.png`} alt="user image" /> */}
                    <p style={{paddingTop : '0', margin : '0'}}>

                    {/* {data.name} */}
                    <span style={{marginRight : '4px' , marginTop : '4px'}}><i className='fa fa-rupee'></i></span>{data.price}.00
                    </p>
                    </div>
                    {/* <div className="gap-1" style={{display : 'flex', marginTop : '4px'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Order No..png`} alt="user image" />
                    <p style={{paddingTop : '0', margin : '0'}}>

                    LBNHVB10042024{data.id}
                    </p>
                    </div> */}
                    {/* <div className="gap-2" style={{display : 'flex', marginTop : '4px'}}>
                    <p style={{background: 'rgba(101, 196, 102, 1)', color : 'white' , borderRadius : '5px' , padding : '2px' , width: '5rem' , margin : '0'}}>Upcoming</p>

                    </div> */}
                  </div>
                  </td>
                  <td>
                    <i onClick={() => handleRowClick(data)} style={{fontSize : '14px'}} className='icon-trash'></i>
                    {/* {data.userName} */}
                    </td>
                </tr>
              ))}

            </CommonTable>
        <div style={{borderBottomStyle : 'groove'}}></div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}




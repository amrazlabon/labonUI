'use client'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, InputGroup, Label, Row, Table } from "reactstrap";
// import BasicCard from "./BasicCard";
// import CustomHorizontalWizardFormTabContent from "./CustomHorizontalWizardFormTabContent";
import { useCallback, useEffect, useState } from "react";
import { setActiveTab } from "@/Redux/Reducers/ProjectSlice";
// import BasicCard from "./BasicCard";
import Calendar from "react-calendar";
import { BasicDemoMap, Description, Discount, ImagePath, PaymentTeams, Subtotal, Tax, TotalDue } from "@/Constant";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { BasicCenter, BasicContainerStyle } from "@/Data/Miscellaneous/Maps";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CommonTableProp } from "@/Types/TableType";
import { TableHeadOptionBody, TableHeadOptionHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTable";
import Link from "next/link";
// import NavComponent from "./NavComponent";
// import CustomHorizontalWizard from ".";
import './buttonStyle.css'
import { InvoiceTableHeader, InvoiceFourData, InvoiceFourDataLabon, InvoiceTableHeaderLabon } from "@/Data/Application/Ecommerce";
import { SimpleAccordion } from "./SimpleAccordion";
import axios from "axios";
import { useRouter } from "next/navigation";
// import { SimpleAccordion } from "./SimpleAccordion";

// import OpenModalMofi from ".";

const PatientDetails = () => {
  const [selectedTests , setSelectedTests] = useState<any>([
    // {
    //   test_name : 'Cholesterol',
    //   price:'460',
    //   id:1
    // },
    // {
    //   test_name : 'Cholesterol',
    //   price:'460',
    //   id:2
    // }
  ])

  useEffect(() => {
    const fetchData = async () => {
      try {
    // const booking_id = sessionStorage.getItem('booking_id');
    const order_id = sessionStorage.getItem('order_id');
    console.log("the patient information");
    
    if(order_id){

      console.log("the patient information inside");

      // const response = await axios.get(`/api/patient_info?endpoint=per&id=${patient_id}`);
      const TestResponse = await axios.get(`/api/orders?endpoint=per&id=${order_id}`);
      console.log("the test iformation from the order_id",TestResponse.data);
      // setData(response.data);
      // setPatientInformation(response.data)
      setSelectedTests(TestResponse.data)
    }
    } catch (error) {
      setSelectedTests([])
      // setBookingInformation(TableHeadOptionBody)
      // setError(error.message);
    }
    // setBookingInformation(TableHeadOptionBody)
  };

    fetchData();
  }, []);
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
        setActiveTab(tab);
      }, []);

      const router = useRouter(); // Initialize the router

  const goBack = () => {
    router.back(); // Go back to the previous route
  };
      
    return (
      <Col md='6' >
{selectedTests.length !== 0 &&
  <>
      <Card style={{backgroundColor:'#F5F5F5' , padding : '24px' , boxShadow : 'none' , margin : '0'}}>
      {/* <div className="mb-2" style={{height:'8rem', width:'100%',backgroundImage: 'linear-gradient(180deg, #522F62 0%, #9462B5 100%)',}}> */}
      <div style={{display : 'flex'}}>
  <i onClick={goBack} className='fa fa-angle-left' style={{paddingRight:'24px', fontSize : '24px' , color : 'black'}}></i>
      {/* <h1 className="text-black ml-4" style={{margin:'0' , paddingBottom : '24px'}}>My Booking Information</h1> */}
      <h1 className="text-black " style={{paddingBottom:'24px' , margin : '0'}}>LBNHVB080320243{selectedTests.id}</h1>
        </div>
{/* <p className="text-white ml-4 mt-4" style={{marginLeft:'2rem'}}>Glucose</p> */}
{/* <div style={{display : 'flex'}}>
<h1 className="text-white ml-4 " style={{marginLeft:'2rem', }}>1,100.00</h1> */}

            {/* <div > */}
                    {/* <button style={?{ color: 'white', width: '50%', height: '3rem', padding: '12px 0px 12px 0px', backgroundColor: '#AE7FD1', border: 'none', borderRadius: '5px' , marginLeft :'4rem' }}>Add to Cart <span><i style={{marginLeft : '2rem'}} className={`icon-arrow-right`}></i></span></button> */}
            {/* </div> */}
                {/* </div>
</div> */}
      {/* <h1 className="text-black ml-4 mt-4 " style={{margin:'2rem' }}>Tests</h1> */}

{/* <div> */}
{/* <h1 className="text-black ml-4 mt-4" style={{margin:'2rem'}}>Summary</h1>

<BasicCard/> */}
<div>
{/* <h2 className="text-black ml-4 mt-4" style={{margin:'2rem'}}>Contact Details</h2> */}
<BasicCardSchedule selectedTests={selectedTests}/>

{/* <BasicCardProfile/> */}
  
</div>

<div>
<h2 className="text-black" style={{paddingBottom:'24px', marginTop : '24px'}}>Location</h2>
<BasicMap/>
<BasicCardProfileMap selectedTests={selectedTests}/>
</div>
                                    
{/* </div> */}
{/* <div>
<h2 className="text-black ml-4 mt-4" style={{paddingBottom:'24px'}}>Booking History</h2> */}
{/* <TableHeadOptions/> */}

{/* <h1>Test Booking and Invoice</h1> */}
<h2 className="text-black ml-4 mt-4" style={{paddingBottom:'16px'}}>Tests Included</h2>
<div>
<SimpleAccordion selectedTests={selectedTests.tests}/>

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
                  <InvoiceTotal selectedTests={selectedTests}/>
                </tr>
              </tbody>
            </Table>
          {/* </CardBody> */}
{/* </div> */}
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

{/* <Col sm="12">
<Link href={'/acheck/booking'}>

                  <Button className="btn-lg bg-gray-400 " style={{height: '3rem', width :'100%' , backgroundColor: 'black !important'
 , color :'white' , marginTop : '16px' , borderRadius : '50px'}}>Reschedule Booking 
                    </Button>
</Link>
                </Col>

                <Col sm="12">
<Link href={'/acheck/booking_cancellation'}>
                    <p className="text-center mt-3">
                      Cancel Booking 
                      </p>
</Link>
                </Col> */}
                {/* <p className=" mt-4">Dashboard</p> */}

        {/* <div> */}
            {/* <OpenModalMofi/> */}
        {/* </div> */}
        </Card>
  </>
}
        </Col>
                  
    )
}

export default PatientDetails;

const BasicCardSchedule = ({selectedTests} : any) => {
  const BasicCardText1: string = "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as";
  const BasicCardText2: string = " , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.";
  console.log("the selected tests data in the schedule", selectedTests);
  
  const formatDate = (isoString : any) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const getStatus = (testDate: string) => {
    const today = new Date().setHours(0, 0, 0, 0);
    const date = new Date(testDate).setHours(0, 0, 0, 0);

    if (date < today) {
      return "completed";
    } else {
      return "upcoming";
    }
  };
  
  return (
    <Col sm="12" xl="12">
      <Card style={{backgroundColor : '#E5E5E5' , boxShadow : 'none' , margin : '0' ,border: '1px solid rgba(0, 0, 0, 0.1)'}}>
        {/* <CommonCardHeader title={BasicCards} span={BasicCardData} /> */}
        <CardBody>
          {/* <div style={{display : 'flex'}}> */}

        {/* <img style={{height:'15px'}} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" /> */}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="mb-0" style={{paddingBottom: '8px'}}>
{selectedTests.nick_name ? selectedTests.nick_name : 'Home'} Test Schedule
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </h2>
            {/* <i className="fa fa-edit"></i> */}
</div>
        
<p style={{background: getStatus(selectedTests.test_date) === 'upcoming' ? 'rgba(101, 196, 102, 1)' : '#929292', color : 'white' , borderRadius : '5px' , padding : '5px' , width: 'fit-content' , textAlign : 'center'}}>
            {getStatus(selectedTests.test_date)}
          </p>
          {/* <p style={{background: 'rgba(101, 196, 102, 1)', color : 'white' , borderRadius : '5px' , padding : '2px' , width: '5rem'}}>Upcoming</p> */}
          <div className="gap-4" style={{display : 'flex' , marginTop:'8px'}}>
            <div style={{display : 'flex'}}>
            <img style={{height:'2rem'}} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Calendar.png`} alt="user image" />

            <p className="mb-0 mt-2">
{formatDate(selectedTests.test_date)}
{/* 27/04/2024 */}
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>
            </div>

            <div style={{display : 'flex'}}>
            <img style={{height:'2rem'}} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Clock.png`} alt="user image" />

            <p className="mb-0 mt-2" >
{selectedTests.time_slot}
{/* 08:30 AM */}
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>
            </div>

          
          
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

const BasicCardProfileMap = ({selectedTests} : any) => {
  const BasicCardText1: string = "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as";
  const BasicCardText2: string = " , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.";

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
{selectedTests.nick_name ? selectedTests.nick_name : 'Home'} Address
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>
          {/* <h1 className="mb-0"> */}
{/* Ramakrishnan */}
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          {/* </h1> */}
          <p className="mb-0">
            {selectedTests.address ? (selectedTests.address + ', ' + selectedTests.location + ', ' + selectedTests.pincode) : ''}
          {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>
</div>
          {/* </div> */}
        </CardBody>
      </Card>
    </Col>
  );
};

const BasicCardProfile = () => {
  const BasicCardText1: string = "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as";
  const BasicCardText2: string = " , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.";

  return (
    <Col sm="12" xl="12">
      <Card style={{backgroundColor : '', boxShadow : 'none' , margin : '0'}}>
        {/* <CommonCardHeader title={BasicCards} span={BasicCardData} /> */}
        <CardBody>
          <div className="gap-4" style={{display : 'flex'}}>

        {/* <img style={{height:'5rem'}} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" /> */}
        <img style={{height:'7rem', margin:'2rem'}} className="img-fluid table-avtar" src={`${ImagePath}/ProfileIcon.png`} alt="user image" />

<div style={{display : 'grid'}}>

          <h1 className="mb-0">
Sudha
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </h1>
          {/* <h1 className="mb-0">
Ramakrishnan */}
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          {/* </h1> */}
          <p className="mb-0">
Your Mother
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>
          <p className="mb-0">
2 tests done so far
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>
</div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

const BasicMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places",
  });
  
  return (
    <Col lg="" md="">
      <Card style={{marginBottom : '0' , borderBottomLeftRadius : '0' , borderBottomRightRadius : '0', boxShadow : 'none' , margin : '0'}}>
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
        firstName: "HDL Cholesterol",
        lastName: "Mother",
        userName: "5 tests done so far",
        time: "No upcoming tests"
      },
      {
        id: 3,
        firstName: "LDL Cholesterol",
        lastName: "Sister",
        userName: "5 tests done so far",
        time: "No upcoming tests"
      },
    ];

  return (
    <Col sm="">
      <Card style={{ boxShadow : 'none' , margin : '0'}}>
        {/* <CommonCardHeader title={TableHeadOption} span={TableHeadOptionData}/> */}
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable headClass="table-dark" headData={TableHeadOptionHead}>
              {TableHeadOptionBody.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>
        <img style={{height:'4rem', margin:'2rem'}} className="img-fluid table-avtar" src={`${ImagePath}/ProfileIcon.png`} alt="user image" />
        {/* {data.lastName} */}
                    </td>
                  <td>
                  <div style={{display : 'grid'}}>
                    <h3>
                      {data.firstName}
                    </h3>
                    <p style={{marginTop:'1rem'}}>

                    {data.lastName}
                    </p>
                    <p>

                    {data.userName}
                    </p>
                    <p>

                    {data.time}
                    </p>
                  </div>
                  </td>
                  <td>
                    <i className={`icon-arrow-right`}></i>
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


const InvoiceTotal = ({selectedTests} : any) => {
  console.log("the selected tests in the total",selectedTests)
  
  return (
    <td >
      <Table style={{ width: "100%" , marginLeft : '0' }}>
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



const InvoiceSubTotal = ({ selectedTests }: { selectedTests: { tests: { price: string }[] } }) => {
  // Ensure `selectedTests.tests` is an array and calculate total price
  const totalPrice = (selectedTests.tests || []).reduce((total, test) => {
    return total + (test.price ? parseFloat(test.price) : 0);
  }, 0);

  const gst = totalPrice * 0.18;
  const convenienceFee = totalPrice * 0.07;
  const grandTotal = totalPrice + gst + convenienceFee;

  return (
    <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
      <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: 0 }}>
        <span style={{ display: "block", width: 95, textAlign: "left", marginLeft: '12px', color: 'grey' }}>Subtotal</span>
        <span style={{ display: "block", width: 125, textAlign: "right", opacity: "0.9", fontWeight: 600, paddingRight: '2rem' }}>
          <span style={{ marginRight: '3px' }}><i className='fa fa-rupee'></i></span>{totalPrice.toFixed(2)}
        </span>
      </li>
      <hr style={{ border: 'none', borderTop: '1px solid #000', margin: '8px 0' }} />
      {/* <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: 0 }}>
        <span style={{ display: "block", width: 95, textAlign: "left", marginLeft: '12px', color: 'grey' }}>GST (18%)</span>
        <span style={{ display: "block", width: 125, textAlign: "right", opacity: "0.9", fontWeight: 600, paddingRight: '2rem' }}>
          <span style={{ marginRight: '4px' }}><i className='fa fa-rupee'></i></span>{gst.toFixed(2)}
        </span>
      </li>
      <hr style={{ border: 'none', borderTop: '1px solid #000', margin: '8px 0' }} />
      <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: 0 }}>
        <span style={{ display: "block", width: 95, textAlign: "left", marginLeft: '12px', color: 'grey' }}>Convenience Fee</span>
        <span style={{ display: "block", width: 125, textAlign: "right", opacity: "0.9", fontWeight: 600, paddingRight: '2rem' }}>
          <span style={{ marginRight: '4px' }}><i className='fa fa-rupee'></i></span>{convenienceFee.toFixed(2)}
        </span>
      </li>
      <hr style={{ border: 'none', borderTop: '1px solid #000', margin: '8px 0' }} /> */}
      <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: 0 }}>
        <span style={{ display: "block", width: 95, textAlign: "left", marginLeft: '12px', fontWeight: '600' }}>Total</span>
        <div style={{ display: 'grid' }}>
          <span style={{ display: "block", width: 125, textAlign: "right", opacity: "0.9", fontWeight: 600, fontSize: '18px', paddingRight: '2rem' }}>
            <span style={{ marginRight: '4px' }}><i className='fa fa-rupee'></i></span>{totalPrice.toFixed(2)}
          </span>
        <p style={{display: "block" , background: 'rgba(196, 107, 101, 1)', color : 'white' , borderRadius : '5px' , padding : '5px' , width: 'fit-content'  , textAlign: 'center' ,marginLeft : '2rem' }}>Unpaid</p>

          {/* <p style={{ display: "block", background: 'rgba(101, 196, 102, 1)', color: 'white', borderRadius: '5px', padding: '2px', width: '3rem', justifySelf: 'end', marginRight: '2rem' }}>Paid</p> */}
        </div>
      </li>
      <hr style={{ border: 'none', borderTop: '1px solid #000', margin: '8px 0' }} />
    </ul>
  );
};






'use client'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, InputGroup, Label, Row, Table } from "reactstrap";
// import BasicCard from "./BasicCard";
// import CustomHorizontalWizardFormTabContent from "./CustomHorizontalWizardFormTabContent";
import { useCallback, useState } from "react";
import { setActiveTab } from "@/Redux/Reducers/ProjectSlice";
// import BasicCard from "./BasicCard";
import Calendar from "react-calendar";
import { BasicDemoMap, Description, Discount, ImagePath, PaymentTeams, Subtotal, Tax, TotalDue } from "@/Constant";
import BasicCard from "./BasicCard";
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

// import OpenModalMofi from ".";

const PatientDetails = () => {
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
        setActiveTab(tab);
      }, []);
      
    return (
    <Col md='6' >
      <Card style={{backgroundColor:'#F5F5F5' , padding : '24px'}}>
      {/* <div className="mb-2" style={{height:'8rem', width:'100%',backgroundImage: 'linear-gradient(180deg, #522F62 0%, #9462B5 100%)',}}> */}
      <h1 className="text-black " style={{paddingBottom:'24px'}}>Test ID</h1>
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
<BasicCardSchedule/>

{/* <BasicCardProfile/> */}
  
</div>

<div>
<h2 className="text-black ml-4 mt-4" style={{paddingBottom:'24px'}}>Location</h2>
<BasicMap/>
<BasicCardProfileMap/>
</div>
                                    
{/* </div> */}
<div>
<h2 className="text-black ml-4 mt-4" style={{paddingBottom:'24px'}}>Booking History</h2>
{/* <TableHeadOptions/> */}

{/* <h1>Test Booking and Invoice</h1> */}
<h4 className="text-black ml-4 mt-4" style={{paddingBottom:'24px'}}>Tests in this Booking</h4>
<div>
{/* <CardBody> */}
            <Table className="table-wrapper table-responsive theme-scrollbar" borderless>
              <tbody>
                {/* <tr>
                  <InvoiceFourHeader />
                </tr> */}
                {/* <tr>
                  <InvoiceFourDetail />
                </tr> */}
                <tr>
                  <InvoiceFourTable />
                </tr>
                <tr style={{ height: 3, width: "100%", background: "linear-gradient(90deg, #7A70BA 20.61%, #0DA759 103.6%)", display: "block", marginTop: 6 }} />
                <tr>
                  <InvoiceTotal />
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
<Link href={'/acheck/booking2'}>
                  <Button style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white' , marginTop : '4rem'}} color="">Reschedule Booking <span><i className="fa fa-angle-right" style={{marginLeft:'1rem'}}></i></span></Button>
</Link>
                </Col>

                <Col sm="12">
<Link href={'/acheck/booking_cancellation'}>
                  <Button style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white' , marginTop : '24px'}} color="">Cancel Booking <span><i className="fa fa-angle-right" style={{marginLeft:'1rem'}}></i></span></Button>
</Link>
                </Col>
                {/* <p className=" mt-4">Dashboard</p> */}

        {/* <div> */}
            {/* <OpenModalMofi/> */}
        {/* </div> */}
        </Card>
        </Col>
    )
}

export default PatientDetails;

const BasicCardSchedule = () => {
  const BasicCardText1: string = "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as";
  const BasicCardText2: string = " , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.";

  return (
    <Col sm="12" xl="12">
      <Card style={{backgroundColor : '#E5E5E5'}}>
        {/* <CommonCardHeader title={BasicCards} span={BasicCardData} /> */}
        <CardBody>
          {/* <div style={{display : 'flex'}}> */}

        {/* <img style={{height:'15px'}} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" /> */}

        <h1 className="mb-0">
Schedule
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </h1>
          <div className="gap-4" style={{display : 'flex' , marginTop:'1rem'}}>
            <div style={{display : 'flex'}}>
            <img style={{height:'3rem'}} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Calendar.png`} alt="user image" />

            <p className="mb-0 mt-3">
27/04/2024
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>
            </div>

            <div style={{display : 'flex'}}>
            <img style={{height:'3rem'}} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Clock.png`} alt="user image" />

            <p className="mb-0 mt-3" >
08:30 AM
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>
            </div>

          
          
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

const BasicCardProfileMap = () => {
  const BasicCardText1: string = "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as";
  const BasicCardText2: string = " , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.";

  return (
    <Col sm="12" xl="12">
      <Card style={{backgroundColor : ''}}>
        {/* <CommonCardHeader title={BasicCards} span={BasicCardData} /> */}
        <CardBody>
          {/* <div className="gap-4" style={{display : 'flex'}}> */}

        {/* <img style={{height:'5rem'}} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" /> */}
        {/* <img style={{height:'7rem', margin:'2rem'}} className="img-fluid table-avtar" src={`${ImagePath}/ProfileIcon.png`} alt="user image" /> */}

<div style={{display : 'grid'}}>

          <h2 className="mb-0" style={{paddingBottom : '24px'}}>
Home Address
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </h2>
          {/* <h1 className="mb-0"> */}
{/* Ramakrishnan */}
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          {/* </h1> */}
          <p className="mb-0">
          Suite No.123, Famous Building,
                      {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>

          <p className="mb-0">
          Sample Street, Athirampuzha P.O,            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>
          <p className="mb-0">
          Kottayam - 686001, Kerala India.
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
      <Card style={{backgroundColor : ''}}>
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
      <Card>
        <CommonCardHeader title={BasicDemoMap} />
        <CardBody>
          <div className="map-js-height overflow-hidden">
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
      <Card>
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

const InvoiceFourTable = () => {
  return (
    <td style={{padding : '0'}}>
      <Table className="table-responsive" style={{ width: "100%", borderSpacing: 0 }}>
        <thead>
          <tr style={{ background: "#7A70BA" }}>
            {InvoiceTableHeaderLabon.map((data, i) => (
              <th style={{ border:"none", padding: "18px 15px", textAlign: data === Description ? "left" : "center", position: data === Description ? "relative" : undefined, borderTopLeftRadius: data === Description ? 10 : 0 }} key={i}>
                <span style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>{data}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <InvoiceTableBody />
        </tbody>
      </Table>
    </td>
  );
};

const InvoiceTableBody = () => {
  return (
    <>
      {InvoiceFourDataLabon.map((data, i) => (
        <tr key={i}>
          <td style={{ padding: 30 }}>
            <h4 style={{ fontWeight: 600, margin: "4px 0px", fontSize: 16, color: "#7A70BA" }}>{data.title}</h4>
            <span style={{ opacity: "0.8", fontSize: 16 }}>{data.detail}</span>
          </td>
          {/* <td style={{ width: "12%", textAlign: "center" }}>
            <span style={{ opacity: "0.8" }}>${data.price}.00</span>
          </td>
          <td style={{ width: "12%", textAlign: "center" }}>
            <span style={{ opacity: "0.8" }}>{data.quantity}</span>
          </td> */}
          <td style={{ width: "12%", textAlign: "center" }}>
            <span style={{ color: "#7A70BA", fontWeight: 600, opacity: "0.9" }}>${data.total}.00</span>
          </td>
        </tr>
      ))}
    </>
  );
};

const InvoiceTotal = () => {
  return (
    <td >
      <Table style={{ width: "100%" , marginLeft : '6rem' }}>
        <tbody>
          <tr 
          //  style={{ display: "flex", justifyContent: "space-between", margin: "16px 0 24px 0", alignItems: "end" }}
           >
            {/* <td style={{ display: "flex", gap: 10 }}>
              <span style={{ color: "#7A70BA", fontSize: 16, fontWeight: 600 }}>{PaymentTeams} :</span>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, fontWeight: 400, width: "55%" }}>{"This denotes a payment credit for a full month's supply."}</span>
            </td> */}
            <td style={{padding : '0'}}>
              <InvoiceSubTotal />
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

const InvoiceSubTotal = () => {
  return (
    <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
      <li style={{ display: "flex", paddingBottom: 16 }}>
        <span style={{ display: "block", width: 95 }}>{Subtotal} </span>
        <span style={{ display: "block", width: 25 }}>:</span>
        <span style={{ display: "block", width: 95, color: "#7A70BA", opacity: "0.9", fontWeight: 600 }} >$6100.00</span>
      </li>
      <li style={{ display: "flex", paddingBottom: 16 }}>
        <span style={{ display: "block", width: 95 }}>{Tax}</span>
        <span style={{ display: "block", width: 25 }}> :</span>
        <span style={{ display: "block", width: 95, color: "#7A70BA", opacity: "0.9", fontWeight: 600 }}>$50.00</span>
      </li>
      <li style={{ display: "flex", paddingBottom: 20 }}>
        <span style={{ display: "block", width: 95 }}>{Discount} </span>
        <span style={{ display: "block", width: 25 }}> :</span>
        <span style={{ display: "block", width: 95, color: "#7A70BA", opacity: "0.9", fontWeight: 600}} >$30.00</span>
      </li>
      <li style={{ display: "flex", alignItems: "center" }}>
        <span style={{ display: "block", width: 95 }}>{TotalDue}</span>
        <span style={{ display: "block",color: "#7A70BA", opacity: "0.9", fontWeight: 600, padding: "12px 25px", borderRadius: 5, background: "rgba(122, 112, 186 , 0.1)", fontSize: 16}} >$6120.00</span>
      </li>
    </ul>
  );
};





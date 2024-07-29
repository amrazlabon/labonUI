'use client'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, InputGroup, Label, Row, Table } from "reactstrap";
// import BasicCard from "./BasicCard";
// import CustomHorizontalWizardFormTabContent from "./CustomHorizontalWizardFormTabContent";
import { useCallback, useState } from "react";
import { setActiveTab } from "@/Redux/Reducers/ProjectSlice";
// import BasicCard from "./BasicCard";
import Calendar from "react-calendar";
import { BasicDemoMap, Discount, ImagePath, Subtotal, Tax } from "@/Constant";
import BasicCard from "./BasicCard";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { BasicCenter, BasicContainerStyle } from "@/Data/Miscellaneous/Maps";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CommonTableProp } from "@/Types/TableType";
import { TableHeadOptionBody, TableHeadOptionHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTable";
import Link from "next/link";
import { SimpleAccordion } from "./SimpleAccordion";
// import NavComponent from "./NavComponent";
// import CustomHorizontalWizard from ".";

// import OpenModalMofi from ".";

const Summary = ({profile , setProfile , setStepActive} : any) => {
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
        setActiveTab(tab);
      }, []);
      const handleBookTimingsClick =() => {
        setStepActive(4)
      }
      console.log("the profile value",profile);
      
      
    return (
    <Col md='' >
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

      <Card style={{backgroundColor:'#F5F5F5' , padding : '0'}}>
{/* <div> */}
<h1 className="text-black ml-4 mt-4" style={{paddingBottom:'16px'}}>Summary</h1>

<BasicCard/>

<div>
<h2 className="text-black ml-4 mt-4" style={{paddingBottom:'24px'}}>Patient Details</h2>

<BasicCardProfile profile={profile}/>
  
</div>

<div>
<h2 className="text-black ml-4 mt-4" style={{paddingBottom:'24px'}}>Location</h2>
<BasicMap/>
<BasicCardProfileMap/>
</div>
<BasicCardSchedule profile={profile}/>
                                    
{/* </div> */}
<div>
<h2 className="text-black ml-4 mt-4" style={{paddingBottom:'24px'}}>Selected Tests</h2>
{/* <TableHeadOptions/> */}
<div>
<SimpleAccordion />

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
<Link href={'/acheck/send_details'}>
                  <Button style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white' , marginTop : '4rem'}} color="">Add To Cart<span><i className="fa fa-angle-right" style={{marginLeft:'1rem'}}></i></span></Button>
</Link>
                </Col>
        <div>
            {/* <OpenModalMofi/> */}
        </div>
        </Card>
        </Col>
    )
}

export default Summary;

const BasicCardSchedule = ({profile} : any) => {
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
{profile.date}
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>
            </div>

            <div style={{display : 'flex'}}>
            <img style={{height:'3rem'}} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Clock.png`} alt="user image" />

            <p className="mb-0 mt-3" >
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

const BasicCardProfileMap = () => {
  const BasicCardText1: string = "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as";
  const BasicCardText2: string = " , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.";

  return (
    <Col sm="12" xl="12">
      <Card style={{backgroundColor : '' , borderTopLeftRadius : '0' , borderTopRightRadius : '0'}}>
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

const BasicCardProfile = ({profile} : any) => {
  const BasicCardText1: string = "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as";
  const BasicCardText2: string = " , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.";

  return (
    <Col sm="12" xl="12">
      <Card style={{backgroundColor : ''}}>
        {/* <CommonCardHeader title={BasicCards} span={BasicCardData} /> */}
        <CardBody>

        <div className="gap-2" style={{ display: 'flex', alignItems: 'center' , paddingBottom : '0'}}>
  <div style={{ flex: 1, display: 'flex', justifyContent: '' }}>
    {/* <img
      style={{ height: '7rem', margin: '0' , width : '100%' , padding : '24px'}}
      className="img-fluid table-avtar"
      src={`${ImagePath}/ProfileIcon.png`}
      alt="user image"
    /> */}
      {/* <h1 className="text-black" style={{margin:'0', paddingTop : '0', textAlign : 'left'}}>1,100.00</h1> */}
      {/* <div> */}
  {/* <p className="text-white" style={{paddingBottom:'8px',paddingLeft : '24px', margin: '0'}}>Glucose</p>
  <h2 className="text-white" style={{padding:'0', paddingLeft : '24px', margin: '0'}}>1100.00</h2> */}
{/* </div> */}
<img style={{height:'7rem', margin:'0 '}} className="img-fluid table-avtar" src={`${ImagePath}/ProfileIcon.png`} alt="user image" />

  </div>
  <div style={{ flex: 2, display: 'flex', justifyContent: 'center' ,paddingRight : '0'}}>
    {/* <button
      style={{
        color: 'white',
        width: '800%',
        height: '3rem',
        padding: '12px 0px',
        backgroundColor: '#AE7FD1',
        border: 'none',
        borderRadius: '5px',
      }}
    >
      Upload Selfie &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {'>'}
    </button> */}
                  {/* <Button style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white'}} color="">Book a Home Visit </Button> */}
                  <div style={{display : 'grid'}}>


<h1 style={{margin:'0', paddingTop : '0' , paddingBottom : '10px'}}>
{profile.name}
  {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
</h1>
<div className="gap-2" style={{display : 'flex' , padding : '0'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Gender.png`} alt="user image" />

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    {profile.gender} ({profile.age} Years)
                    </p>
                    </div>
<div className="gap-2" style={{display : 'flex'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon-Relation.png`} alt="user image" />

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    {profile.relation}
                    </p>
                    </div>
                    <div className="gap-2" style={{display : 'flex'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Syringe.png`} alt="user image" />

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    {profile.tests} Tests done so far
                    </p>
                    </div>
</div>
  </div>
</div>

          {/* <div className="gap-4" style={{display : 'flex'}}> */}

        {/* <img style={{height:'5rem'}} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" /> */}
        {/* <img style={{height:'7rem', margin:'2rem'}} className="img-fluid table-avtar" src={`${ImagePath}/ProfileIcon.png`} alt="user image" /> */}

{/* <div style={{display : 'grid'}}>

          <h1 className="mb-0">
Sudha */}
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          {/* </h1>
          <h1 className="mb-0">
Ramakrishnan */}
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          {/* </h1>
          <p className="mb-0">
Female, 36 Years */}
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          {/* </p>
</div> */}
          {/* </div> */}
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

const InvoiceTotal = () => {
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
      <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: 16 }}>
        <span style={{ display: "block", width: 95, textAlign: "left" }}>{Subtotal}</span>
        {/* <span style={{ display: "block", textAlign: "right" }}>:</span> */}
        <span style={{ display: "block", width: 125, textAlign: "right", color: "", opacity: "0.9", fontWeight: 600 ,paddingRight : '3rem'  }}>$6100.00</span>
      </li>
      <hr style={{border: 'none',  borderTop: '1px solid #000',  margin: '8px 0' }}/>
      <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: 16 }}>
        <span style={{ display: "block", width: 95, textAlign: "left" }}>{Tax}</span>
        {/* <span style={{ display: "block", textAlign: "right" }}>:</span> */}
        <span style={{ display: "block", width: 125, textAlign: "right", color: "", opacity: "0.9", fontWeight: 600 ,paddingRight : '3rem' }}>$50.00</span>
      </li>
      <hr style={{border: 'none',  borderTop: '1px solid #000',  margin: '8px 0' }}/>
      <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: 20 }}>
        <span style={{ display: "block", width: 95, textAlign: "left"  }}>{Discount}</span>
        {/* <span style={{ display: "block", textAlign: "right" }}>:</span> */}
        <span style={{ display: "block", width: 125, textAlign: "right", color: "", opacity: "0.9", fontWeight: 600 ,paddingRight : '3rem' }}>$30.00</span>
      </li>
      <hr style={{border: 'none',  borderTop: '1px solid #000',  margin: '8px 0' }}/>
      {/* <li style={{ display: "flex", alignItems: "center" }}>
        <span style={{ display: "block", width: 95 }}>{TotalDue}</span>
        <span style={{ display: "block",color: "#7A70BA", opacity: "0.9", fontWeight: 600, padding: "12px 25px", borderRadius: 5, background: "rgba(122, 112, 186 , 0.1)", fontSize: 16}} >$6120.00</span>
      </li> */}
      <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: 20 }}>
        <span style={{ display: "block", width: 95, textAlign: "left" }}>{Discount}</span>
        {/* <span style={{ display: "block", textAlign: "right" }}>:</span> */}
        <span style={{ display: "block", width: 125, textAlign: "right", color: "", opacity: "0.9", fontWeight: 1000 ,paddingRight : '3rem'  }}>$30.00</span>
      </li>
      <hr style={{border: 'none',  borderTop: '1px solid #000',  margin: '8px 0' }}/>
    </ul>
  );
};





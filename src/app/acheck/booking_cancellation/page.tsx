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
import { InvoiceFourData, InvoiceFourDataLabon, InvoiceTableHeader, InvoiceTableHeaderLabon } from "@/Data/Application/Ecommerce";
import { SimpleAccordion } from "./SimpleAccordion";
import './basicStyle.css'
// import NavComponent from "./NavComponent";
// import CustomHorizontalWizard from ".";

// import OpenModalMofi from ".";

const BookingCancellation = () => {
  const [selectedTests , setSelectedTests] = useState([
    {
      test_name : 'Cholesterol',
      price:'460',
      id:1
    },
    {
      test_name : 'Cholesterol',
      price:'460',
      id:2
    }
  ])
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
        setActiveTab(tab);
      }, []);
      
    return (
    <Col md='6' >
      <div style={{padding : '0', height:'11.5rem', width:'100%',backgroundImage: 'linear-gradient(180deg, #522F62 0%, #9462B5 100%)',}}>
<h1 className="text-white" style={{padding:'24px', margin: '0' }}>Cancel Booking</h1>
<div>
<p className="text-white" style={{paddingBottom:'8px',paddingLeft : '24px', margin: '0'}}>
  {/* {selectedTests.length === 0
        ? 'Test'
        : selectedTests.length === 1
        ? selectedTests[0].test_name
        : `${selectedTests[0].test_name} + ${selectedTests.length - 1}`} */}
        Glucose
        </p>
  <p className="text-white custom-font" style={{padding:'0', paddingLeft : '24px', margin: '0'}}>
    {/* 1100.00 */}
    <span style={{marginRight : '4px'}}><i className='fa fa-rupee'></i></span>
    {/* {selectedTests.length === 0
                  ? '500'
                  : selectedTests.length === 1
                  ? `${selectedTests[0].price}`
                  : `${selectedTests.reduce((total, test) => total + (test.price ? parseFloat(test.price) : 0), 0)}`
                }.00 */}
                500.00
    </p>
  {/* <p className="text-white" style={{paddingBottom:'8px',paddingLeft : '24px', margin: '0'}}>Glucose</p>
  <h2 className="text-white" style={{padding:'0', paddingLeft : '24px', margin: '0'}}>1100.00</h2> */}
</div>
<div style={{marginTop : '24px', height:'24px', width:'100%',backgroundColor:'#F5F5F5' , borderTopLeftRadius : '16px' , borderTopRightRadius : '16px'}}>
</div>
</div>
      {/* <h1 className="text-black ml-4 mt-4 " style={{margin:'2rem' }}>Tests</h1> */}
      <Card style={{backgroundColor:'#F5F5F5' , padding : '0 24px 24px 24px' , boxShadow : 'none' , margin : '0'}}>
<h2 className="text-black " style={{paddingBottom : '12px', paddingTop : '8px'}}>Cancellation Breakup</h2>
<div style={{paddingBottom : '24px'}}>
{/* <CardBody> */}
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
                  <InvoiceTotal selectedTests={selectedTests}/>
                </tr>
              </tbody>
            </Table>
          {/* </CardBody> */}
</div>


{/* <div> */}
{/* <h1 className="text-black ml-4 mt-4" style={{margin:'2rem'}}>Summary</h1> */}

<BasicCard/>
<div style={{borderBottomStyle : 'groove', paddingTop : '24px'}}>

</div>

<h2 className="text-black ml-4 mt-4" style={{paddingBottom:'16px'}}>Booking Details</h2>


<div>
{/* <h2 className="text-black ml-4 mt-4" style={{paddingBottom:'24px'}}>Patient Details</h2> */}

<BasicCardProfile/>
  
</div>

<div style={{paddingBottom : '24px'}}>
<h2 className="text-black ml-4 mt-4" style={{paddingBottom:'16px'}}>Home Test Location</h2>
<BasicMap/>
<BasicCardProfileMap/>
</div>
<BasicCardSchedule/>
                                    
{/* </div> */}
<div>
{/* <h2 className="text-black ml-4 mt-4" style={{margin:'2rem'}}>Booking History</h2> */}
{/* <TableHeadOptions/> */}

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
<Link href={'/acheck/b_cancel'}>
                  <Button style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white' , marginTop : '24px'}} color="">Confirm Booking Cancellation<span><i className="fa fa-angle-right" style={{marginLeft:'1rem'}}></i></span></Button>
</Link>
                </Col>
        <div>
            {/* <OpenModalMofi/> */}
        </div>
        </Card>
        </Col>
    )
}

export default BookingCancellation;

const BasicCardSchedule = ({profile} : any) => {
  const BasicCardText1: string = "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as";
  const BasicCardText2: string = " , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.";

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
            {/* <i className="fa fa-edit"></i> */}
</div>
        
          <p style={{background: 'rgba(101, 196, 102, 1)', color : 'white' , borderRadius : '5px' , padding : '2px' , width: '5rem'}}>Upcoming</p>
          <div className="gap-4" style={{display : 'flex' , marginTop:'8px'}}>
            <div style={{display : 'flex'}}>
            <img style={{height:'2rem'}} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Calendar.png`} alt="user image" />

            <p className="mb-0 mt-2">
{/* {profile.date} */}
27/07/2024
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>
            </div>

            <div style={{display : 'flex'}}>
            <img style={{height:'2rem'}} className="img-fluid table-avtar" src={`${ImagePath}/Icon - Clock.png`} alt="user image" />

            <p className="mb-0 mt-2" >
{/* {profile.timeslot} */}
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
      <Card style={{backgroundColor : '' , borderTopLeftRadius : '0' , borderTopRightRadius : '0', boxShadow : 'none' , margin : '0'}}>
        {/* <CommonCardHeader title={BasicCards} span={BasicCardData} /> */}
        <CardBody>
          {/* <div className="gap-4" style={{display : 'flex'}}> */}

        {/* <img style={{height:'5rem'}} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" /> */}
        {/* <img style={{height:'7rem', margin:'2rem'}} className="img-fluid table-avtar" src={`${ImagePath}/ProfileIcon.png`} alt="user image" /> */}

<div style={{display : 'grid'}}>

          <p className="mb-0" style={{paddingBottom : '8px' , fontSize : '16px', fontWeight : '600'}}>
Home Address
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </p>
          {/* <h1 className="mb-0"> */}
{/* Ramakrishnan */}
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          {/* </h1> */}
          <p className="mb-0">
          Suite No.123, Famous Building,
                      {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          {/* </p>

          <p className="mb-0"> */}
          Sample Street, Athirampuzha P.O,            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          {/* </p>
          <p className="mb-0"> */}
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
      <Card style={{backgroundColor : '' , boxShadow : 'none' , margin : '0'}}>
        <CardBody>

        <div className="gap-2" style={{ display: 'flex', alignItems: 'center' , paddingBottom : '0'}}>
  <div style={{ flex: 1, display: 'flex', justifyContent: '' }}>
<img style={{height:'7rem', margin:'0 ' , borderRadius : '5px'}} className="img-fluid table-avtar" src={`${ImagePath}/Father.png`} alt="user image" />

  </div>
  <div style={{ flex: 2, display: 'flex', justifyContent: 'center' ,paddingRight : '0'}}>
                  <div style={{display : 'grid'}}>


<h1 style={{margin:'0', paddingTop : '0' , paddingBottom : '10px' , fontWeight : '600'}}>
{/* {profile.name ? profile.name : 'Vasudevan Ramachandran  '} */}
Vasudevan Ramachandran
</h1>
<div className="gap-2" style={{display : 'flex' , padding : '0' , paddingBottom : '4px'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Gender.png`} alt="user image" />

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    {/* {profile.gender ? profile.gender : 'Male'} ({profile.age ? profile.gender : '63'} Years) */}
                    Male 63(Years)
                    </p>
                    </div>
<div className="gap-2" style={{display : 'flex' , paddingBottom : '4px'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon-Relation.png`} alt="user image" />

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    {/* {profile.relation ? profile.relation : 'Father'} */}
                    Father
                    </p>
                    </div>
                    <div className="gap-2" style={{display : 'flex' , paddingBottom : '0'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Syringe.png`} alt="user image" />

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    {/* {profile.tests ? profile.tests : '0' }  */}
                    0 Tests done so far
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

const InvoiceSubTotal = ({selectedTests} : any) => {

  const totalPrice = selectedTests.reduce((total : any, test : any) => {
    return total + (test.price ? parseFloat(test.price) : 0);
  }, 0);
  return (
    <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
      <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: 0 }}>
        <span style={{ display: "block", width: 95, textAlign: "left" , marginLeft : '12px' , color : 'grey'}}>{Subtotal}</span>
        {/* <span style={{ display: "block", textAlign: "right" }}>:</span> */}
        <span style={{ display: "block", width: 125, textAlign: "right", color: "", opacity: "0.9", fontWeight: 600 ,paddingRight : '2rem'  }}><span style={{marginRight : '3px'}}><i className='fa fa-rupee'></i></span>{totalPrice}.00</span>
      </li>
      <hr style={{border: 'none',  borderTop: '1px solid #000',  margin: '8px 0' }}/>
      <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: 0 }}>
        <span style={{ display: "block", width: 95, textAlign: "left", marginLeft : '12px' , color : 'grey'}}>GST (18%)</span>
        {/* <span style={{ display: "block", textAlign: "right" }}>:</span> */}
        <span style={{ display: "block", width: 125, textAlign: "right", color: "", opacity: "0.9", fontWeight: 600 ,paddingRight : '2rem' }}><span style={{marginRight : '4px'}}><i className='fa fa-rupee'></i></span>{totalPrice *0.18}</span>
      </li>
      <hr style={{border: 'none',  borderTop: '1px solid #000',  margin: '8px 0' }}/>
      <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: 0 }}>
        <span style={{ display: "block", width: 95, textAlign: "left" , marginLeft : '12px', color : 'grey' }}>Convinience Fee</span>
        {/* <span style={{ display: "block", textAlign: "right" }}>:</span> */}
        <span style={{ display: "block", width: 125, textAlign: "right", color: "", opacity: "0.9", fontWeight: 600 ,paddingRight : '2rem' }}><span style={{marginRight : '4px'}}><i className='fa fa-rupee'></i></span>{totalPrice * 0.07}</span>
      </li>
      <hr style={{border: 'none',  borderTop: '1px solid #000',  margin: '8px 0' }}/>
      {/* <li style={{ display: "flex", alignItems: "center" }}>
        <span style={{ display: "block", width: 95 }}>{TotalDue}</span>
        <span style={{ display: "block",color: "#7A70BA", opacity: "0.9", fontWeight: 600, padding: "12px 25px", borderRadius: 5, background: "rgba(122, 112, 186 , 0.1)", fontSize: 16}} >$6120.00</span>
      </li> */}
      <li style={{ display: "flex", justifyContent: "space-between", paddingBottom: 0 }}>
        <span style={{ display: "block", width: 95, textAlign: "left", marginLeft : '12px' , fontWeight : '600' }}>Total</span>
        {/* <span style={{ display: "block", textAlign: "right" }}>:</span> */}
        
        <div style={{display : 'grid'}}>
        <span style={{ display: "block", width: 125, textAlign: "right", color: "", opacity: "0.9", fontWeight: 600 , fontSize : '18px' ,paddingRight : '2rem'  }}> <span style={{marginRight : '4px'}}><i className='fa fa-rupee'></i></span>{totalPrice + (totalPrice * 0.18) + (totalPrice * 0.07)}
        {/* <p style={{background: 'rgba(196, 107, 101, 1)', color : 'white' , borderRadius : '5px' , padding : '2px' , width: '4rem' , margin : '0', marginRight : '0'}}>UnPaid</p> */}

        </span>
          {/* <p>hbsf</p>
          <p>hbsf</p> */}
        <p style={{display: "block" , background: 'rgba(101, 196, 102, 1)', color : 'white' , borderRadius : '5px' , padding : '2px' , width: '3rem'  , justifySelf: 'end' ,marginRight : '2rem' }}>Paid</p>
        </div>
      </li>

      <hr style={{border: 'none',  borderTop: '1px solid #000',  margin: '8px 0' }}/>
    </ul>
  );
};




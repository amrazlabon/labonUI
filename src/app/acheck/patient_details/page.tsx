'use client'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, InputGroup, Label, Row, Table } from "reactstrap";
// import BasicCard from "./BasicCard";
// import CustomHorizontalWizardFormTabContent from "./CustomHorizontalWizardFormTabContent";
import { useCallback, useEffect, useState } from "react";
import { setActiveTab } from "@/Redux/Reducers/ProjectSlice";
// import BasicCard from "./BasicCard";
import Calendar from "react-calendar";
import { BasicDemoMap, ImagePath } from "@/Constant";
import BasicCard from "./BasicCard";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { BasicCenter, BasicContainerStyle } from "@/Data/Miscellaneous/Maps";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CommonTableProp } from "@/Types/TableType";
import { TableHeadOptionBody, TableHeadOptionHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTable";
import Link from "next/link";
import axios from "axios";
// import NavComponent from "./NavComponent";
// import CustomHorizontalWizard from ".";

// import OpenModalMofi from ".";

const PatientDetails = () => {
  const [patientInformation , setPatientInformation] = useState<any>([])
  const [bookingInformation , setBookingInformation] = useState<any>([])
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
        setActiveTab(tab);
      }, []);

      const TableHeadOptionBody = [
        {
          id: 1,
          test_date: "25/07/2024",
          lastName: "2 Tests",
          userName: "LBNHVB100420241",
          name : "Vasudevan Radakrishnan",
          timeslot_id: "07:00 AM"
        },
        {
          id: 2,
          test_date: "28/07/2024",
          lastName: "2 Tests",
          userName: "LBNHVB100420241",
          name : "Swathi Radakrishnan",
          timeslot_id: "07:00 AM"
        },
        {
          id: 3,
          test_date: "29/07/2024",
          lastName: "2 Tests",
          userName: "LBNHVB100420241",
          name : "Vasudevan Radakrishnan",
          timeslot_id: "07:00 AM"
        },
      ];

      useEffect(() => {
        const fetchData = async () => {
          try {
        const booking_id = sessionStorage.getItem('booking_id');
        const user_id = sessionStorage.getItem('user_id');
        if(booking_id){


          const response = await axios.get(`/api/patient_info?endpoint=per&id=${booking_id}`);
          const TestResponse = await axios.get(`/api/orders?endpoint=user&id=${user_id}`);
          // setData(response.data);
          console.log("the test iformation of contacrs",TestResponse.data);
          setPatientInformation(response.data)
          setBookingInformation(TestResponse.data)
        }
        } catch (error) {
          setBookingInformation(TableHeadOptionBody)
          // setError(error.message);
        }
        setBookingInformation(TableHeadOptionBody)
      };
    
        fetchData();
      }, []);
    
      
    return (
    <Col md='6' >
      <div style={{padding : '0', height:'6rem', width:'100%',backgroundImage: 'linear-gradient(180deg, #522F62 0%, #9462B5 100%)'}}>
<h1 className="text-white" style={{padding:'24px', margin: '0'}}>{patientInformation.first_name ? patientInformation.first_name : 'Vasudevan Radhakrishnan'}</h1>
<div style={{padding : '0', height:'2rem', width:'100%',backgroundColor:'#F5F5F5' , borderTopLeftRadius : '16px' , borderTopRightRadius : '16px'}}>
</div>
</div>
            <Card style={{backgroundColor:'#F5F5F5' , padding : '24px' , boxShadow : 'none' , margin : '0'}}>
                {/* </div>
</div> */}
      {/* <h1 className="text-black ml-4 mt-4 " style={{margin:'2rem' }}>Tests</h1> */}

{/* <div> */}
{/* <h1 className="text-black ml-4 mt-4" style={{margin:'2rem'}}>Summary</h1>

<BasicCard/> */}

<div>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 className="mb-0" style={{paddingBottom: '16px'}}>
Contact Details
            {/* {BasicCardText1}<em className="txt-danger">“module tabs”</em>{BasicCardText2} */}
          </h2>
            <i style={{fontSize : '20px'}} className="fa fa-edit"></i>
</div>
<BasicCardProfile patientInformation={patientInformation}/>
  
  
</div>

<div>
<h2 className="text-black ml-4 mt-4" style={{paddingBottom:'24px'}}>Location</h2>
<BasicMap/>
<BasicCardProfileMap/>
</div>
{/* <BasicCardSchedule/> */}
                                    
{/* </div> */}
<div>
<h2 className="text-black ml-4 mt-4" style={{paddingBottom:'16px'}}>Booking History</h2>
<Link href={'/acheck/test_details'}>
<TableHeadOptions bookingInformation={bookingInformation}/>
</Link>
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
<Link href={'/acheck/home'}>
                  <Button className="btn-lg" style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white' , marginTop : '24px'}} color="">Book a Home Test for this Contact
                     {/* <span><i className="fa fa-angle-right" style={{marginLeft:'1rem'}}></i></span> */}
                     </Button>
</Link>
                </Col>
        <div>
            {/* <OpenModalMofi/> */}
        </div>
        </Card>
        </Col>
    )
}

export default PatientDetails;

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

const BasicCardProfile = ({patientInformation} : any) => {
  const BasicCardText1: string = "Tabs have long been used to show alternative views of the same group of information tabs in software. Known as";
  const BasicCardText2: string = " , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.";
  console.log("pateint information in the profile",patientInformation);

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


{/* <h1 style={{margin:'0', paddingTop : '0' , paddingBottom : '10px' , fontWeight : '600'}}>
{profile.name ? profile.name : 'Vasudevan Ramachandran  '}
</h1> */}
<div className="gap-2" style={{display : 'flex' , padding : '0' , paddingBottom : '4px'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Gender.png`} alt="user image" />

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    {patientInformation.gender ? patientInformation.gender : 'Male'} ({patientInformation.age ? patientInformation.gender : '63'} Years)
                    </p>
                    </div>
<div className="gap-2" style={{display : 'flex' , paddingBottom : '4px'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon-Relation.png`} alt="user image" />

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    {patientInformation.relation ? patientInformation.relation : 'Father'}
                    </p>
                    </div>
                    <div className="gap-2" style={{display : 'flex' , paddingBottom : '0'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Syringe.png`} alt="user image" />

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    {patientInformation.tests ? patientInformation.tests : '0' } Tests done so far
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

const TableHeadOptions=({bookingInformation} : any)=> {
  // TableHeadOptions=()=> {
  console.log("bookign informations inside the list",bookingInformation);
  

    const TableHeadOptionBody = [
      {
        id: 1,
        firstName: "25/07/2024",
        lastName: "2 Tests",
        userName: "LBNHVB100420241",
        time: "07:00 AM"
      },
      {
        id: 2,
        firstName: "28/07/2024",
        lastName: "2 Tests",
        userName: "LBNHVB100420241",
        time: "07:00 AM"
      },
      {
        id: 3,
        firstName: "29/07/2024",
        lastName: "2 Tests",
        userName: "LBNHVB100420241",
        time: "07:00 AM"
      },
    ];

    const handleRowClick = (data: any) => {
      // router.push({
      //   pathname: '/acheck/patient_details', 
      //   query: {
      //     b_id: data.id,
      //   },
      // });
      sessionStorage.setItem('booked_test', JSON.stringify(data));
  
      console.log("handle click in the patient information",data)
    }

    return (
      <Col sm="" style={{paddingRight : '0' , paddingLeft : '0'}}>
        <Card style={{boxShadow : 'none' , margin : '0'}}> 
          {/* <CommonCardHeader title={TableHeadOption} span={TableHeadOptionData}/> */}
          <Row className="card-block">
            <Col sm="12" lg="12" xl="12" style={{paddingLeft : '16px' , paddingRight : '16px'}}>
              <CommonTable headClass="table-dark" headData={TableHeadOptionHead}>
                {bookingInformation.map((data : any) => (
                  <tr style={{ cursor: 'pointer' }} key={data.id} onClick={() => handleRowClick(data)}>
                    {/* <th scope="row">{data.id}</th> */}
                    <td style={{paddingTop : '0'}}>
          <img style={{height:'3rem', margin:'0' , borderRadius : '5px'}} className="img-fluid table-avtar" src={`${ImagePath}/ThumbnailTest.png`} alt="user image" />
          {/* {data.lastName} */}
                      </td>
                    <td>
                    <div style={{display : 'grid'}}>
                    <p style={{ paddingTop: '0', margin: '0' , fontSize : '16px' , fontWeight : '600' }}>
                            {data.test_date}
                          </p>
                      <div className="gap-1" style={{display : 'flex', marginTop : '4px'}}>
                      <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Syringe.png`} alt="user image" />
  
                      <p style={{paddingTop : '0' , margin : '0'}}>
                      
                      {data.lastName}1 Test
                      </p>
                      </div>
                      <div className="gap-1" style={{display : 'flex', marginTop : '4px'}}>
                      <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Clock.png`} alt="user image" />
                      <p style={{paddingTop : '0', margin : '0'}}> 
  
                      {data.timeslot_id}
                      </p>
                      </div>
                      <div className="gap-1" style={{display : 'flex', marginTop : '4px'}}>
                      <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/VectorProfile.png`} alt="user image" />
                      <p style={{paddingTop : '0', margin : '0'}}>
  
                      {data.name}
                      </p>
                      </div>
                      <div className="gap-1" style={{display : 'flex', marginTop : '4px'}}>
                      <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Order No..png`} alt="user image" />
                      <p style={{paddingTop : '0', margin : '0'}}>
  
                      LBNHVB10042024{data.id}
                      </p>
                      </div>
                      <div className="gap-2" style={{display : 'flex', marginTop : '4px'}}>
                      {/* <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Clock.png`} alt="user image" /> */}
                      <p style={{background: 'rgba(101, 196, 102, 1)', color : 'white' , borderRadius : '5px' , padding : '2px' , width: '5rem' , margin : '0'}}>Upcoming</p>
  
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





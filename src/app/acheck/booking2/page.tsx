'use client'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";
// import BasicCard from "./BasicCard";
// import CustomHorizontalWizardFormTabContent from "./CustomHorizontalWizardFormTabContent";
import { useCallback, useState } from "react";
import { setActiveTab } from "@/Redux/Reducers/ProjectSlice";
import BasicCard from "./BasicCard";
import Calendar from "react-calendar";
import { ImagePath } from "@/Constant";
import Link from "next/link";
// import NavComponent from "./NavComponent";
// import CustomHorizontalWizard from ".";

// import OpenModalMofi from ".";

const Tests = () => {
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
        setActiveTab(tab);
      }, []);
      
    return (
    <Col md='6' >
      <Card style={{backgroundColor:'#F5F5F5' , padding : '1rem'}}>
      <div className="mb-2" style={{height:'13rem', width:'100%',backgroundImage: 'linear-gradient(180deg, #522F62 0%, #9462B5 100%)',}}>
      <h1 className="text-white ml-4 mt-4" style={{margin:'2rem'}}>Home Visit Booking</h1>
<p className="text-white ml-4 mt-4" style={{marginLeft:'2rem'}}>Glucose</p>
<h1 className="text-white ml-4 " style={{marginLeft:'2rem', }}>1,100.00</h1>
</div>
      {/* <h1 className="text-black ml-4 mt-4 " style={{margin:'2rem' }}>Tests</h1> */}

{/* <div> */}
<h1 className="text-black ml-4 mt-4" style={{margin:'2rem'}}>Pick a Date</h1>

<BasicCard/>
<DefaultCalendar/>

<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: '1rem', padding: '1rem' }}>
                                        <p>
                                            <img style={{ height: '15px' }} className="img-fluid table-avtar" src={`${ImagePath}/Rectangle3.png`} alt="user image" />Selected Date
                                        </p>
                                        <p>
                                            <img style={{ height: '15px' }} className="img-fluid table-avtar" src={`${ImagePath}/Rectangle2.png`} alt="user image" />Available Date
                                        </p>
                                        <p>
                                            <img style={{ height: '15px' }} className="img-fluid table-avtar" src={`${ImagePath}/Rectangle1.png`} alt="user image" />Holidays
                                        </p>
                                    </div>
                                    
{/* </div> */}

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
<Link href={'/acheck/booking3'}>
                  <Button style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white'}} color="">Book Timings</Button>
</Link>
                </Col>
        <div>
            {/* <OpenModalMofi/> */}
        </div>
        </Card>
        </Col>
    )
}

export default Tests;

const DefaultCalendar = () => {
  const [dateValue, setDateValue] = useState<Date>(new Date());
  const date = `${dateValue.getDate()} - ${dateValue.getMonth() + 1} - ${dateValue.getFullYear()} `

  return (
    <Col xl="12">
      <Card>
        {/* <CommonCardHeader title={CalendarDefault}/> */}
        <CardBody className="card-wrapper">
          <Row className="g-3">
            <Col xs="12">
              <InputGroup className="main-inline-calender">
                <Input placeholder={`${dateValue.getDate()} - ${dateValue.getMonth() + 1} - ${dateValue.getFullYear()} `} className="mb-2 flatpickr-input" readOnly />
                <Calendar onChange={(value) => setDateValue(value as Date)} value={dateValue} className="w-100" />
              </InputGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
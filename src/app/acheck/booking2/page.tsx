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
import './calendarStyles.css';
import { formatShortWeekday } from '@/utils/formatShortWeekday';
// import { enUS } from 'date-fns/locale'; // Import the locale you need

// import OpenModalMofi from ".";

const Tests = ({profile , setProfile , setStepActive} : any) => {
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  // const [dateValue, setDateValue] = useState(new Date());
  const callback = useCallback((tab: number | undefined) => {
        setActiveTab(tab);
      }, []);
      console.log("the date value", profile);
  const [dateValue, setDateValue] = useState<Date>(profile?.date ? new Date() : new Date());
      
  const handleBookTimingsClick =() => {
    setStepActive(1)
  }
    return (
    <Col md='' >
      {/* <div style={{padding : '0', height:'11rem', width:'100%',backgroundImage: 'linear-gradient(180deg, #522F62 0%, #9462B5 100%)',}}>
<h1 className="text-white" style={{padding:'24px', margin: '0'}}>Home Visit Booking</h1>
<div>
  <p className="text-white" style={{paddingBottom:'8px',paddingLeft : '24px', margin: '0'}}>Glucose</p>
  <h2 className="text-white" style={{padding:'0', paddingLeft : '24px', margin: '0'}}>1100.00</h2>
</div>
<div style={{marginTop : '24px', height:'2rem', width:'100%',backgroundColor:'#F5F5F5' , borderTopLeftRadius : '16px' , borderTopRightRadius : '16px'}}>
</div>
</div> */}
<div>

      <Card style={{backgroundColor:'#F5F5F5' , padding : '0' , }}>
      {/* <h1 className="text-black ml-4 mt-4 " style={{margin:'2rem' }}>Tests</h1> */}

{/* <div> */}
<h1 className="text-black" style={{paddingBottom:'12px' , marginTop : '0'}}>Pick a Date</h1>

<BasicCard/>
<DefaultCalendar profile={profile} setProfile={setProfile} setStepActive={setStepActive} dateValue={dateValue} setDateValue={setDateValue}/>

<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: '1rem', paddingBottom: '16px' }}>
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

{/* <Col sm="12">
                  <Button onClick={handleBookTimingsClick} className='btn-lg' style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white'}} color="">Book Timings <span><i className="fa fa-angle-right" style={{marginLeft:'1rem'}}></i></span></Button>
                </Col> */}
        <div>
            {/* <OpenModalMofi/> */}
        </div>
        </Card>
          </div>
        </Col>
    )
}

export default Tests;

const DefaultCalendar = ({profile , setProfile , setStepActive ,  dateValue, setDateValue }: any) => {
  // const date = `${dateValue.getDate()} - ${dateValue.getMonth() + 1} - ${dateValue.getFullYear()} `

  const formatDate = (date : any) => {
    console.log("the date in the format date",date);
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const handleDateChange = (value : any) => {
    setDateValue(formatDate(value));
    setProfile({
      ...profile,
      date: formatDate(value),
    });
    setStepActive(1)
  };
  const todayDate = new Date();
  return (
    <Col xl="12" style={{paddingTop : '24px'}}>
      <Card style={{padding : '0'}}>
        {/* <CommonCardHeader title={CalendarDefault}/> */}
        <CardBody className="card-wrapper" style={{padding : '0'}}>
          <Row className="g-3">
            <Col xs="12" style={{padding : ''}}>
              <InputGroup className="">
                {/* <Input placeholder={`${dateValue.getDate()} - ${dateValue.getMonth() + 1} - ${dateValue.getFullYear()} `} className="mb-2 flatpickr-input" readOnly /> */}
                <Calendar
                //  minDate={todayDate}
        formatShortWeekday={(locale, date) => formatShortWeekday(date)}
                // tileDisabled={({ date }) => disableDates(date)}
                 onChange={handleDateChange}
                  value={dateValue}
                   className="w-100" />
              </InputGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

const disableDates = (date : any) => {
  const disabledDates = [
    new Date(2024, 6, 7), // Example date
    new Date(2024, 6, 14), // Another example date
    new Date(2024, 6, 21), // Another example date
    new Date(2024, 6, 28), // Another example date
  ];

  return disabledDates.some(
    (disabledDate) => 
      date.getFullYear() === disabledDate.getFullYear() &&
      date.getMonth() === disabledDate.getMonth() &&
      date.getDate() === disabledDate.getDate()
  );
};
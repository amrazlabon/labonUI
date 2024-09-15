'use client'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";
// import BasicCard from "./BasicCard";
// import CustomHorizontalWizardFormTabContent from "./CustomHorizontalWizardFormTabContent";
import { useCallback, useEffect, useState } from "react";
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

const Tests = ({profile , setProfile , setStepActive , selectedTests, selectedAddress} : any) => {
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
    setActiveTab(tab);
  }, []);

  
  // Initialize dateValue with the date from profile if it exists, otherwise null
  console.log("the profile.date value",profile.date);
  const [dateValue, setDateValue] = useState<Date | null>(null);

  useEffect(() => {
    if (profile.date) {
      // Split, reverse, and join the date to match "yyyy-mm-dd" format
      const formattedDate = profile.date.split('/').reverse().join('-');
      
      // Create a new Date object from the formatted date
      const dateObj = new Date(formattedDate);
      
      // Check if the date object is valid
      if (!isNaN(dateObj.getTime())) {
        setDateValue(dateObj);
      } else {
        setDateValue(null); // Invalid date
      }
    } else {
      setDateValue(null); // No date provided
    }
  }, [profile.date]);

  
  const handleBookTimingsClick = () => {
    setStepActive(1);
  };

  return (
    <Col md='' style={{ backgroundColor: '#F5F5F5', paddingTop: '0', boxShadow: 'none' }}>
      <Card style={{ backgroundColor: '#F5F5F5', padding: '0', boxShadow: 'none', margin: '0' }}>
        <h1 className="text-black" style={{ paddingBottom: '12px', marginTop: '0' }}>Pick a Date</h1>
        <BasicCard />
        <DefaultCalendar
          profile={profile}
          setProfile={setProfile}
          setStepActive={setStepActive}
          dateValue={dateValue}
          setDateValue={setDateValue}
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: '1rem', paddingBottom: '0' }}>
          <p>
            <img style={{ height: '15px' }} className="img-fluid table-avtar" src={`${ImagePath}/Rectangle3.png`} alt="user image" />Selected Date
          </p>
          <p>
            <img style={{ height: '15px' }} className="img-fluid table-avtar" src={`${ImagePath}/Rectangle2.png`} alt="user image" />Available Date
          </p>
          <p className="m-0">
            <img style={{ height: '15px' }} className="img-fluid table-avtar" src={`${ImagePath}/Rectangle1.png`} alt="user image" />Holidays
          </p>
        </div>
      </Card>
    </Col>
  );
};

export default Tests;

const DefaultCalendar = ({profile , setProfile , setStepActive ,  dateValue, setDateValue }: any) => {
  // const date = `${dateValue.getDate()} - ${dateValue.getMonth() + 1} - ${dateValue.getFullYear()} `

  const formatDate = (date : any) => {
    // console.log("the date in the format date",date);
    
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

  const isSunday = (date: Date) => date.getDay() === 0;

  // Disable previous dates and keep Sundays grey
  const tileDisabled = ({ date }: { date: Date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of the day for comparison
  
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1); // Get yesterday's date
  
    const currentHour = new Date().getHours();
  
    // Disable dates before yesterday, and disable today if current time is after 8 PM (20:00)
    return date < yesterday || (date.getTime() === today.getTime() && currentHour >= 20);
  };

  // Add a custom class for Sundays
  const tileClassName = ({ date }: { date: Date }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of the day for comparison
  
    if (isSunday(date)) {
      return 'sunday-tile'; // Grey color for Sundays
    } else if (date.getTime() === today.getTime()) {
      return 'current-date-tile'; // Bold font for the current date
    } else if (tileDisabled({ date })) {
      return undefined; // No class for disabled dates (previous dates)
    } else {
      return 'remaining-date-tile'; // Red color for remaining dates
    }
  };
  


  const todayDate = new Date();
  return (
    <Col xl="12" style={{paddingTop : '24px' , boxShadow : 'none'}}>
      <Card style={{padding : '0', boxShadow : 'none'}}>
        {/* <CommonCardHeader title={CalendarDefault}/> */}
        <CardBody className="card-wrapper" style={{padding : '0'}}>
          <Row className="g-3">
            <Col xs="12" style={{padding : ''}}>
              <InputGroup className="">
                {/* <Input placeholder={`${dateValue.getDate()} - ${dateValue.getMonth() + 1} - ${dateValue.getFullYear()} `} className="mb-2 flatpickr-input" readOnly /> */}
                <Calendar
                 minDate={todayDate} // Ensure minimum date is today
                 formatShortWeekday={(locale, date) => formatShortWeekday(date)}
                 onChange={handleDateChange}
                 value={dateValue || null} // Set value to null if dateValue is undefined
                //  className="w-100"
                 tileDisabled={tileDisabled} // Disable previous dates
                 tileClassName={tileClassName} // Apply class for Sundays
                   className="w-100" />
              </InputGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

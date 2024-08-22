'use client'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";
import { useCallback, useEffect, useRef, useState } from "react";
import { ImagePath } from "@/Constant";
import BasicCard from "./BasicCard";
import Link from "next/link";
import './formStyle.css';
import React from "react";
import axios from "axios";


const TestTime = ({profile , setProfile , setStepActive , selectedTests, selectedAddress} : any) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
    setActiveTab(tab);
  }, []);
  
  const handleBookTimingsClick =() => {
    setStepActive(2)
  }

  useEffect(() => {
    const fetchData = async () => {
      // console.log("the fdate of the profle",profile.date);
      
      try {
        const response = await axios.get(`/api/timeslot?date=${profile.date}`);
        // setData(response.data);
        let data = response.data.sort((a : any, b : any) => a.id - b.id);
        // console.log("the timeslot data",data);
        setTimeSlotData(data);
        
      } catch (error) {
      }
    }
    fetchData();

  }, []);
  
  const [selectedTime, setSelectedTime] = useState<string>(profile.timeslot ? profile.timeslot : null); // State for selected time
  const [timeSlotData, setTimeSlotData] = useState<any>([]); // State for selected time
  // console.log("the data for the button",selectedTime);

  const handleTimeChange = (time: string , id : any) => {
    // console.log("time",time)
    setSelectedTime(time);
    setProfile({
      ...profile,
      timeslot: time,
      timeslot_id : id
    });
    if (buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (
    <Col md='' style={{boxShadow : 'none'}}>
      {/* <h1 className="text-black ml-4 mt-4 " style={{margin:'2rem' }}>Tests</h1> */}
      <Card style={{backgroundColor:'#F5F5F5' , padding : '0' , boxShadow : 'none', margin : '0'}}>

{/* <div> */}
<h1 className="text-black" style={{margin:'0', paddingBottom : '24px' , marginTop : '0'}}>Select a Suitable Time</h1>

<BasicCard/>
<div style={{display:'flex'}}>

{/* <p style={{fontWeight:'600',fontSize:'16px'}}>Morning </p> */}
{/* <span style={{color:'#65C466'}}> (Recommended)</span> */}
</div>
<IconsRadio timeSlotData={timeSlotData} selectedTime={selectedTime} onTimeChange={handleTimeChange}/>
                                    

{selectedTime && 

<Col sm="12" >
{/* <Link href={'/acheck/booking4'}> */}
                  <Button  onClick={handleBookTimingsClick} className='btn-lg' style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white' , marginTop : '24px'}} color="">Add Patient Details <span><i className="fa fa-angle-right" style={{marginLeft:'1rem'}}></i></span></Button>
{/* </Link> */}
                </Col>
// </div>
}
        <div>
            {/* <OpenModalMofi/> */}
        </div>
        </Card>
        </Col>
    )
}

export default TestTime;



const IconsRadio = React.forwardRef(({timeSlotData ,  selectedTime, onTimeChange }: any, ref: React.Ref<any>) => {

  const CustomRadioListData = [
    { id: 1, icon: "Gender - Male.png", text: "7:00 AM" },
    { id: 2, icon: "Gender - Female.png", text: "8:00 AM" },
    { id: 3, icon: "Gender - Other.png", text: "8:30 AM" },
    { id: 4, icon: "Gender - Male.png", text: "9:30 AM" },
    { id: 5, icon: "Gender - Female.png", text: "10:00 AM" },
    { id: 6, icon: "Gender - Other.png", text: "10:30 AM" },
    { id: 7, icon: "Gender - Male.png", text: "2:00 PM" },
    { id: 8, icon: "Gender - Female.png", text: "2:30 PM" },
    { id: 9, icon: "Gender - Other.png", text: "3:30 PM" },
    { id: 10, icon: "Gender - Male.png", text: "4:30 PM" },
    { id: 11, icon: "Gender - Female.png", text: "6:00 PM" },
    { id: 12, icon: "Gender - Other.png", text: "7:00 PM" },
    { id: 13, icon: "Gender - Male.png", text: "7:30 PM" },
    { id: 14, icon: "Gender - Female.png", text: "8:00 PM" },
  ];

  const morningIds = [1, 2, 3, 4];
const afternoonIds = [5, 6, 7, 8];
const eveningIds = [9, 10, 11, 12, 13, 14, 15];

// Filter the array based on these IDs
const morningOptions = timeSlotData.filter((item : any) => morningIds.includes(item.id));
const afternoonOptions = timeSlotData.filter((item : any) => afternoonIds.includes(item.id));
const eveningOptions = timeSlotData.filter((item : any) => eveningIds.includes(item.id));


  return (
    <Col xl="12" sm="12" className="order-xl-0 order-sm-1">
      <Card style={{ padding: '16px', boxShadow: 'none', margin: '0' }}>
        {/* Morning */}
        <div>
          <p style={{ fontWeight: '600', fontSize: '16px' }}>Morning</p>
          <div className="h-100 checkbox-checked">
            <div className="form-check radio-primary ps-0">
              <ul className="radio-wrapper">
                {morningOptions.map(({ icon, id, timeslot } : any, index : any) => (
                  <li className="p-1 pt-2 pb-2" key={id}>
                    <Input
                      className="checkbox-shadow d-block"
                      id={`radio-${id}`}
                      type="radio"
                      name="radio-time"
                      value={timeslot}
                      checked={selectedTime === timeslot}
                      onChange={() => onTimeChange(timeslot, id)}
                    />
                    <Label htmlFor={`radio-${id}`} check>
                      <span>{timeslot}</span>
                    </Label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Afternoon */}
        <div style={{ marginTop: '16px' }}>
          <p style={{ fontWeight: '600', fontSize: '16px' }}>Afternoon</p>
          <div className="h-100 checkbox-checked">
            <div className="form-check radio-primary ps-0">
              <ul className="radio-wrapper">
                {afternoonOptions.map(({ icon, id, timeslot } : any, index : any) => (
                  <li className="p-1 pt-2 pb-2" key={id}>
                    <Input
                      className="checkbox-shadow d-block"
                      id={`radio-${id}`}
                      type="radio"
                      name="radio-time"
                      value={timeslot}
                      checked={selectedTime === timeslot}
                      onChange={() => onTimeChange(timeslot, id)}
                    />
                    <Label htmlFor={`radio-${id}`} check>
                      <span>{timeslot}</span>
                    </Label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Evening */}
        <div style={{ marginTop: '16px' }}>
          <p style={{ fontWeight: '600', fontSize: '16px' }}>Evening</p>
          <div className="h-100 checkbox-checked">
            <div className="form-check radio-primary ps-0">
              <ul className="radio-wrapper">
                {eveningOptions.map(({ icon, id, timeslot } : any, index : any) => (
                  <li className="p-1 pt-2 pb-2" key={id}>
                    <Input
                      className="checkbox-shadow d-block"
                      id={`radio-${id}`}
                      type="radio"
                      name="radio-time"
                      value={timeslot}
                      checked={selectedTime === timeslot}
                      onChange={() => onTimeChange(timeslot, id)}
                    />
                    <Label htmlFor={`radio-${id}`} check>
                      <span>{timeslot}</span>
                    </Label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
});



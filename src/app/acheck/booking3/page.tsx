'use client'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";
import { useCallback, useRef, useState } from "react";
import { ImagePath } from "@/Constant";
import BasicCard from "./BasicCard";
import Link from "next/link";
import './formStyle.css';
import React from "react";


const TestTime = ({profile , setProfile , setStepActive , selectedTests, selectedAddress} : any) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
    setActiveTab(tab);
  }, []);
  
  const handleBookTimingsClick =() => {
    setStepActive(2)
  }
  
  const [selectedTime, setSelectedTime] = useState<string>(profile.timeslot ? profile.timeslot : null); // State for selected time
  console.log("the data for the button",selectedTime);

  const handleTimeChange = (time: string) => {
    console.log("time",time)
    setSelectedTime(time);
    setProfile({
      ...profile,
      timeslot: time,
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
<IconsRadio selectedTime={selectedTime} onTimeChange={handleTimeChange}/>
                                    

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



const IconsRadio = React.forwardRef(({ selectedTime, onTimeChange }: any, ref: React.Ref<any>) => {

  const CustomRadioListData = [
    {
      id: 1,
      icon: "Gender - Male.png",
      text: "7:00 AM",
      defaultChecked: true,
    },
    {
      id: 2,
      icon: "Gender - Female.png",
      text: "8:00 AM",
    },
    {
      id: 3,
      icon: "Gender - Other.png",
      text: "8:30 AM",
    },
    {
      id: 4,
      icon: "Gender - Male.png",
      text: "9:30 AM",
      defaultChecked: true,
    },
    {
      id: 5,
      icon: "Gender - Female.png",
      text: "10:00 AM",
    },
    {
      id: 6,
      icon: "Gender - Other.png",
      text: "10:30 AM",
    },
    {
      id: 7,
      icon: "Gender - Male.png",
      text: "2:00 PM",
      defaultChecked: true,
    },
    {
      id: 8,
      icon: "Gender - Female.png",
      text: "2:30 PM",
    },
    {
      id: 9,
      icon: "Gender - Other.png",
      text: "3:30 PM",
    },
    {
      id: 10,
      icon: "Gender - Male.png",
      text: "4:30 PM",
      defaultChecked: true,
    },
    {
      id: 11,
      icon: "Gender - Female.png",
      text: "6:00 PM",
    },
    {
      id: 9,
      icon: "Gender - Other.png",
      text: "7:00 PM",
    },
    {
      id: 10,
      icon: "Gender - Male.png",
      text: "7:30 PM",
      defaultChecked: true,
    },
    {
      id: 11,
      icon: "Gender - Female.png",
      text: "8:00 PM",
    },
    
  ]
  const morningOptions = CustomRadioListData.slice(0, 4);
  const afternoonOptions = CustomRadioListData.slice(4, 8);
  const eveningOptions = CustomRadioListData.slice(8);
  
  return (
    <Col xl="12" sm="12" className="order-xl-0 order-sm-1">
      <Card style={{padding : '16px', boxShadow : 'none' , margin : '0'}}>
      <p style={{fontWeight:'600',fontSize:'16px'}}>Morning </p>

      <div className=" h-100 checkbox-checked">
        <div className="form-check radio-primary ps-0">
          <ul className="radio-wrapper">
            {CustomRadioListData.map(({ icon, id, text, defaultChecked }, index) => (
              <li className="p-1 pt-2 pb-2" key={index}>
                <Input className="checkbox-shadow d-block" id={`radio-${id}`} type="radio"
                //  defaultChecked={defaultChecked}
                  name="radio2" value={text}
                  // checked={selectedTime === text}
                  onChange={() => onTimeChange(text)}/>
                <Label htmlFor={`radio-${id}`} check>
                {/* <img style={{ height: '100%', }} className="img-fluid table-avtar" src={`${ImagePath}/${icon}`} alt="user image" /> */}

                  {/* <i className={`fa fa-${icon}`}></i> */}
                  <span>{text}</span>
                </Label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </Card>

    </Col>
  );
});


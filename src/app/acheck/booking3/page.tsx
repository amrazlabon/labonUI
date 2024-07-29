'use client'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, InputGroup, Label, Row } from "reactstrap";
// import BasicCard from "./BasicCard";
// import CustomHorizontalWizardFormTabContent from "./CustomHorizontalWizardFormTabContent";
import { useCallback, useState } from "react";
import { setActiveTab } from "@/Redux/Reducers/ProjectSlice";
// import BasicCard from "./BasicCard";
import Calendar from "react-calendar";
import { ImagePath } from "@/Constant";
import BasicCard from "./BasicCard";
import Link from "next/link";
// import NavComponent from "./NavComponent";
// import CustomHorizontalWizard from ".";
import './formStyle.css';

// import OpenModalMofi from ".";

const TestTime = ({profile , setProfile , setStepActive} : any) => {
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
        setActiveTab(tab);
      }, []);
      
      const handleBookTimingsClick =() => {
        setStepActive(2)
      }

      const [selectedTime, setSelectedTime] = useState<string>(profile.timeslot ? profile.timeslot : '8:00 AM'); // State for selected time

  const handleTimeChange = (time: string) => {
    console.log("time",time)
    setSelectedTime(time);
    setProfile({
      ...profile,
      timeslot: time,
    });
  };
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
      {/* <h1 className="text-black ml-4 mt-4 " style={{margin:'2rem' }}>Tests</h1> */}
      <Card style={{backgroundColor:'#F5F5F5' , padding : '0'}}>

{/* <div> */}
<h1 className="text-black" style={{margin:'0', paddingBottom : '24px' , marginTop : '0'}}>Select a Suitable Time</h1>

<BasicCard/>
<div style={{display:'flex'}}>

<p style={{fontWeight:'600',fontSize:'16px'}}>Morning </p><span style={{color:'#65C466'}}> (Recommended)</span>
</div>
<IconsRadio selectedTime={selectedTime} onTimeChange={handleTimeChange}/>
                                    
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
{/* <Link href={'/acheck/booking4'}> */}
                  <Button onClick={handleBookTimingsClick} className='btn-lg' style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white' , marginTop : '4rem'}} color="">Add Patient Details <span><i className="fa fa-angle-right" style={{marginLeft:'1rem'}}></i></span></Button>
{/* </Link> */}
                </Col>
        <div>
            {/* <OpenModalMofi/> */}
        </div>
        </Card>
        </Col>
    )
}

export default TestTime;



const IconsRadio = ({ selectedTime, onTimeChange }: any) => {

  const CustomRadioListData = [
    {
      id: 1,
      icon: "Gender - Male.png",
      text: "8:00 AM",
      defaultChecked: true,
    },
    {
      id: 2,
      icon: "Gender - Female.png",
      text: "8:30 AM",
    },
    {
      id: 3,
      icon: "Gender - Other.png",
      text: "9:00 AM",
    },
    {
      id: 1,
      icon: "Gender - Male.png",
      text: "9:30 AM",
      defaultChecked: true,
    },
    {
      id: 2,
      icon: "Gender - Female.png",
      text: "10:00 AM",
    },
    {
      id: 3,
      icon: "Gender - Other.png",
      text: "10:30 AM",
    },
  ]
  return (
    <Col xl="12" sm="12" className="order-xl-0 order-sm-1">
      <div className=" h-100 checkbox-checked">
        {/* <h6 className="sub-title">{IconsRadios}</h6> */}
        <div className="form-check radio-primary ps-0">
          <ul className="radio-wrapper">
            {/* <li className="p-1 pt-2 pb-2">
              <Input id="radio-icon" className="d-block" type="radio" name="radio2"/>
              <Label htmlFor="radio-icon" check>
                <i className="fa fa-sliders"></i><span>Sliders</span>
              </Label>
            </li> */}
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
    </Col>
  );
};


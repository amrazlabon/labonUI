"use client";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Toast, ToastBody } from "reactstrap";
import BorderBottom from "@/Components/BonusUi/CreativCard/BorderBottom";
import UpcomingDatePicker from "@/Components/General/Dashboard/DefaultDashboard/UpcomingAppointments/UpcomingDatePicker";
import ReactDatePicker from "react-datepicker";
import { ImagePath } from "@/Constant";
import Link from "next/link";
import './buttonStyle.css'
import { useModal } from "@/context/modalContext";
// import { UserForm } from "./UserForm";

const BookingConfirmation = () => {
  const [bookingOrder, setBookingOrder] = useState<any>({});
  const [open,setOpen] = useState(true)
    useEffect(()=>{
      const bookingOrder = sessionStorage.getItem('booking_order');
    if(bookingOrder) {
      setBookingOrder(JSON.parse(bookingOrder))
    }
      setTimeout(()=>{
        setOpen(false);
      },10000)
    },[])

    // const { openModal } = useModal();

    // const [startDate, setStartDate] = useState<Date | null>(new Date());
    // const [endDate, setEndDate] = useState<Date | null>(null);
  
    // const onChange = (date: [Date | null, Date | null]) => {
    //     const [start, end] = date;
    //     setStartDate(start);
    //     setEndDate(end);
    //   };
    return (
        // <Container fluid className="p-3">

            <Col md="6" style={{padding : '24px'}}>
                <ColorsSchemes open={open} setOpen={setOpen}/>
                <div className=" login-dark">
                    <div className="text-center">
                    {/* <button onClick={openModal}>Sign In</button> */}


                    <img style={{height:'35px', paddingBottom : ''}} className="img-fluid table-avtar" src={`${ImagePath}/Thumbs-up.png`} alt="user image" />
                    <h1 style={{fontWeight:'700'}}>Booking Confirmed!</h1>
                    {/* <div style={{display:'flex',padding:'1rem',backgroundColor:'#E5E5E5',borderRadius:'20px',marginTop:'1rem'}}> */}

<p style={{fontSize : '24px' , fontWeight :'400' , marginBottom : '0'}}>Hello {bookingOrder.name ? bookingOrder.name : 'Sudha'}!</p>
                        {/* <h2>Hello {bookingOrder.name}!</h2> */}
                        <p>
                        You just booked a home test for <span style={{fontWeight : 'bold'}}> {bookingOrder.name ? bookingOrder.name :  'Sreedevi Ramachandran'}</span>. The invoice has been emailed to you. Our phlebotomist assigned to collect blood samples will arrive at your location tenatively byat <span style={{fontWeight : 'bold'}}>{bookingOrder.timeslot ? bookingOrder.timeslot : '7:00 AM'}</span>  on <span style={{fontWeight : 'bold'}}>{bookingOrder.date ? bookingOrder.date : '01/01/2024'}</span>.
                        </p>
                    <br />
                    <p style={{marginTop : '0' }}>In case you have any clarifications, please call us on the support number <span style={{fontWeight : 'bold'}}>+91 9446061000</span>. See you soon!</p>
                    <div style={{borderBottomStyle : 'groove' , marginTop : '24px' , marginBottom : '24px'}}></div>
                    {/* <h2>Save this Data</h2> */}
<p style={{fontSize : '24px' , fontWeight :'400' , marginBottom : '0' , textAlign : 'left'}}>Save this Date</p>

                    <p style={{textAlign : 'left' , paddingTop : '12px'}}>We don’t see the patient details saved. Would <br /> you like to save it for future use?</p>
                    </div>

                    <Col sm="12" style={{paddingTop : '24px'}}>
        <Link href={''}>
                  <Button style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white', borderRadius : '50px' }} color="">Yes <span><i className="fa fa-angle-right" style={{marginLeft:'1rem'}}></i></span></Button>
        </Link>
                </Col>
                <Link href={''}>
                <p className="text-center" style={{paddingTop : '24px' , cursor : 'pointer'}}>Dashboard</p>
                </Link>  {/* <button className={"test-btn"}>Dashboard</button> */}
                

                </div>

        {/* </Container> */}
            </Col>
    );
};

export default BookingConfirmation;

const ColorsSchemes = ( {open} : any, {setOpen} : any) => {
  
    return (
      <Col md="6">
        <Card>
          
          {/* <CommonCardHeader title={ColorsScheme} span={ColorSchema} /> */}
          {/* <CardBody className="toast-rtl colors-schemes"> */}
            <Toast fade className="default-show-toast align-items-center text-light bg-success border-0"
             isOpen={open}
             style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1050,
              margin: "0 auto",
              width: "100%",
              height : '4rem',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}>
              <div className="d-flex justify-content-between align-items-center">
        <img style={{height:'15px', marginLeft : '1rem'}} className="img-fluid table-avtar" src={`${ImagePath}/Thumbs-up.png`} alt="user image" />
        <ToastBody>Congrats! Booking confirmed.</ToastBody>
                {/* <Button close className="btn-close-white me-2 m-auto" onClick={() => setOpen(false)}></Button> */}
              </div>
            </Toast>
          {/* </CardBody> */}
        </Card>
      </Col>
    );
  };
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
  const [rescheduleOrder, setRescheduleOrder] = useState<any>({});
  const [open,setOpen] = useState(true)
    useEffect(()=>{
      const bookingOrder = sessionStorage.getItem('rescheduled_order');
      const rescheduleOrder = sessionStorage.getItem('reschedule_booking');
    if(bookingOrder) {
      setBookingOrder(JSON.parse(bookingOrder))
    }
    if(rescheduleOrder) {
      setRescheduleOrder(JSON.parse(rescheduleOrder))
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

    const formatDate = (isoString : any) => {
      const date = new Date(isoString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };

    return (
        // <Container fluid className="p-3">

            <Col md="" style={{padding : '24px'}}>
                <ColorsSchemes open={open} setOpen={setOpen}/>
                <div className=" login-dark">
                    <div className="text-center">
                    {/* <button onClick={openModal}>Sign In</button> */}


                    <img style={{height:'35px', paddingBottom : ''}} className="img-fluid table-avtar" src={`${ImagePath}/Thumbs-up.png`} alt="user image" />
                    <h1 style={{fontWeight:'700'}}>Booking Rescheduled!</h1>
                    {/* <div style={{display:'flex',padding:'1rem',backgroundColor:'#E5E5E5',borderRadius:'20px',marginTop:'1rem'}}> */}
                    {/* <p>Booking ID: <strong>LBNHVB112220241</strong></p> */}
                    <p style={{fontSize: '16px', fontWeight: '', marginBottom: '24px', marginTop: '24px'}}>
                    Booking ID: <strong>LBNHVB1122202{rescheduleOrder.id}{bookingOrder.reschedule_count ? '-' + bookingOrder.reschedule_count : ''}</strong>
</p>
                    <p style={{fontSize: '24px', fontWeight: '400', marginBottom: '24px', marginTop: '24px'}}>
  Hello {bookingOrder.name ? bookingOrder.name.split(' ')[0] : 'Sudha'}!
</p>

                        {/* <h2>Hello {bookingOrder.name}!</h2> */}
                        <p>
                        Your booking for <span style={{fontWeight : 'bold'}}> {bookingOrder.name ? bookingOrder.name :  'Sreedevi Ramachandran'}</span> on <span style={{fontWeight : 'bold'}}>{bookingOrder.date ? bookingOrder.date : '01/01/2024'}</span> at <span style={{fontWeight : 'bold'}}>{bookingOrder.timeslot ? bookingOrder.timeslot : '7:00 AM'}</span> has been rescheduled.
                        </p>
                    <br />
                    <p style={{marginTop : '0' }}>For any clarifications, please call our support number <span style={{fontWeight : 'bold'}}>+91 8289861000</span>. See you soon!</p>
                    <div style={{borderBottomStyle : 'groove' , marginTop : '24px' , marginBottom : '24px'}}></div>
{/* <p style={{fontSize : '24px' , fontWeight :'400' , marginBottom : '0' , textAlign : 'left'}}>Save this Data</p>

                    <p style={{textAlign : 'left' , paddingTop : '12px'}}>We don’t see the patient details saved. Would <br /> you like to save it for future use?</p> */}
                    </div>

                    {/* <Col sm="12" style={{paddingTop : '24px'}}>
        <Link href={''}>
                  <Button style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white', borderRadius : '50px' }} color="">Yes <span><i className="fa fa-angle-right" style={{marginLeft:'1rem'}}></i></span></Button>
        </Link>
                </Col>
                <Link href={''}>
                <p className="text-center" style={{paddingTop : '24px' , cursor : 'pointer'}}>Dashboard</p>
                </Link> */}
                  {/* <button className={"test-btn"}>Dashboard</button> */}
                

                </div>

        {/* </Container> */}
            </Col>
    );
};

export default BookingConfirmation;

const ColorsSchemes = ( {open} : any, {setOpen} : any) => {
  
    return (
      <Col md="">
         <Card style={{boxShadow : 'none', margin : '0'}}>
          
          {/* <CommonCardHeader title={ColorsScheme} span={ColorSchema} /> */}
          {/* <CardBody className="toast-rtl colors-schemes"> */}
            <Toast fade className="default-show-toast align-items-center text-light bg-success border-0" isOpen={open}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1050,
              margin: "0 auto",
              width: "100%",
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              paddingLeft : '24px',
              // background : 'orangered',
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}>
              <div className="d-flex align-items-center">
        {/* <img style={{height:'15px', marginLeft : '1rem'}} className="img-fluid table-avtar" src={`${ImagePath}/Thumbs-up.png`} alt="user image" /> */}
        <i className="fa fa-thumbs-up"></i>
        <ToastBody>Your Booking has been Rescheduled.</ToastBody>
                {/* <Button close className="btn-close-white me-2 m-auto" onClick={() => setOpen(false)}></Button> */}
              </div>
            </Toast>
          {/* </CardBody> */}
        </Card>
      </Col>
    );
  };
"use client";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import BorderBottom from "@/Components/BonusUi/CreativCard/BorderBottom";
import UpcomingDatePicker from "@/Components/General/Dashboard/DefaultDashboard/UpcomingAppointments/UpcomingDatePicker";
import ReactDatePicker from "react-datepicker";
import { ImagePath } from "@/Constant";
import Link from "next/link";
import './buttonStyle.css'
// import { UserForm } from "./UserForm";

const BookingConfirmation = () => {
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
                <div className=" login-dark">
                    <div className="text-center">


                    <img style={{height:'35px'}} className="img-fluid table-avtar" src={`${ImagePath}/Thumbs-up.png`} alt="user image" />
                    <h1 style={{fontWeight:'700'}}>Booking Confirmed!</h1>
                    {/* <div style={{display:'flex',padding:'1rem',backgroundColor:'#E5E5E5',borderRadius:'20px',marginTop:'1rem'}}> */}

                        <p>Booking ID: LBNHVB-MRL-20241201-1-A</p>
                        <h2>Hello Sudha!</h2>
                        <p>You just booked a home test for<span className="text-bold">Sreedevi Ramachandran</span> . <br />The invoice has been emailed to you. Our phlebotomist assigned <br /> to collect blood samples will arrive at <br /> your location tentatively by <span className="font-bold">7:00 AM on 01/01/2024.</span> </p>
                    {/* </div> */}
                    <br />
                    <p>In case you have any clarifications, <br /> please call us on the support number <br /> +91 9446061000. See you soon!</p>
                    <hr />
                    <h2>Save this Data</h2>
                    <p>We don’t see the patient details saved. Would <br /> you like to save it for future use?</p>
                    </div>

                    <Col sm="12" style={{paddingTop : '24px'}}>
        <Link href={''}>
                  <Button style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white', }} color="">Yes <span><i className="fa fa-angle-right" style={{marginLeft:'1rem'}}></i></span></Button>
        </Link>
                </Col>
                <p className="text-center mt-4">Dashboard</p>
  {/* <button className={"test-btn"}>Dashboard</button> */}
                

                </div>


        {/* </Container> */}
            </Col>
    );
};

export default BookingConfirmation;
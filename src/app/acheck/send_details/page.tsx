'use client'
import { useEffect, useState } from "react";
import { Col, Input, Label , Button} from "reactstrap"
import './style.css'
import Link from "next/link";
// import { Button, Card, CardBody, Col, Form, FormGroup, Input, InputGroup, Label, Row, Table } from "reactstrap";


const SendDetails = () => {
    const [isSelectFromContacts, setIsSelectFromContacts] = useState(true);
    const [bookingOrder, setBookingOrder] = useState<any>({});

  const handleToggleChange = (event : any) => {
    setIsSelectFromContacts(event.target.checked);
  };

  useEffect(() => {
    const bookingOrder = sessionStorage.getItem('booking_order');
    if(bookingOrder) {
      setBookingOrder(JSON.parse(bookingOrder))
    }
  } , [] )

    return(
        <Col md='6' style={{padding : '24px'}}>
            <div className=" login-dark">
                    <div className="text-center">


                    <h1 style={{fontWeight:'700'}}>Send Details to Patient</h1>
                    {/* <div style={{display:'flex',padding:'1rem',backgroundColor:'#E5E5E5',borderRadius:'20px',marginTop:'1rem'}}>
                    <img style={{height:'15px'}} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" /> */}

                        <p>Would you like to send the booking details to the patient’s <br />email {bookingOrder.email}, so they <br />also have the information with them?</p>
                        </div>

                        <div style={{marginLeft : '0' , placeContent : 'center'}} className="toggle-container">
                <label>Do Not Send</label>
                <Label style={{marginLeft : '1rem'}} className="form-switch form-check-inline" check>
      <Input className={`switch-primary check-size`} type="checkbox" role="switch" defaultChecked={isSelectFromContacts} checked={isSelectFromContacts}
            onChange={handleToggleChange}
 disabled={false}/>
    </Label>
                <label>Send</label>
            </div>
                        {/* <div className="">
                <label>Select from My Contacts</label>
                <Label style={{marginLeft : '1rem'}} className="form-switch form-check-inline" check>
      <Input className={`switch-primary check-size`} type="checkbox" role="switch" defaultChecked={true} disabled={false}/>
    </Label>
                <label>Add New</label>
            </div> */}
                        </div>
        
                        <Col sm="12">
                <Link href={'/acheck/b_c'}>
                  <Button style={{marginTop : '10rem' ,height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white'}} color="">Confirm Booking</Button>
                </Link>
                </Col>
        </Col>
    )

}

export default SendDetails;
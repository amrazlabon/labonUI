'use client'
import { useEffect, useState } from "react";
import { Col, Input, Label , Button, Card, Toast, ToastBody} from "reactstrap"
import './style.css'
import Link from "next/link";
import axios from "axios";
// import { Button, Card, CardBody, Col, Form, FormGroup, Input, InputGroup, Label, Row, Table } from "reactstrap";


const SendDetails = () => {
    const [isSelectFromContacts, setIsSelectFromContacts] = useState(true);
    const [bookingOrder, setBookingOrder] = useState<any>({});
    const [userData, setUserData] = useState<any>({});
    const [open,setOpen] = useState(true)

  const handleToggleChange = (event : any) => {
    setIsSelectFromContacts(event.target.checked);
  };

  // the issue facing is from here, the loading is having some issue, should look into it here
  useEffect(() => {
    const userData = sessionStorage.getItem('user_data');
    const bookingOrder = sessionStorage.getItem('booking_order');
    console.log("this is what should be checke din case of loading");
    
    console.log("the data in the send details",bookingOrder);
    
    try {
      if (bookingOrder) {
        setBookingOrder(JSON.parse(bookingOrder));
      }
      if (userData) {
        setUserData(JSON.parse(userData));
      }
    } catch (error) {
      console.error("Failed to parse session storage data:", error);
    }

    setTimeout(()=>{
      setOpen(false);
    },5000)
  }, []);
    // Empty dependency array to run only on initial load
  

  // think the issue is here, we are facing in the reduce issue and thing will work
  // issue is with some initial value loading, look what the issue is
  async function sendEmail() {
    // or we can send the bookingOrder details on the load only, that will solve the issue
    console.log("else we should call the load function from here");
    
    const totalTestCost = bookingOrder.test_data.reduce((total : any, test : any) => {
      return total + (test.price ? parseFloat(test.price) : 0);
    }, 0);


    const emailContentAdmin = `<p>Dear Admin,</p>
  
  <p>${userData.name ? userData.name.split(' ')[0] : 'Customer' } has made a new home Test booking for ${bookingOrder.name ? bookingOrder.name.split(' ')[0] : 'NA'} . An email notification has already gone to the Lab Admin. Please ensure it is followed up and the blood test happens on time.</p>
  
  <p><strong>Booking details:</strong></p>
  <ol>
    <li><strong>Booking ID:</strong> LBNHVB112220241</li>
    <li><strong>Scheduled Date & Time:</strong> ${bookingOrder.date} at ${bookingOrder.timeslot}</li>
    <li><strong>Patient Name:</strong> ${bookingOrder.name ? bookingOrder.name : 'NA'}</li>
    <li><strong>Contact:</strong> +91 ${bookingOrder.mobile ? bookingOrder.mobile : 'NA'}</li>
    <li><strong>Age:</strong> ${bookingOrder.age ? bookingOrder.age : 'NA'}</li>
    <li><strong>Gender:</strong> ${bookingOrder.gender ? bookingOrder.gender : 'NA'}</li>
    <li><strong>Location:</strong> ${bookingOrder.location ? bookingOrder.location : 'NA'}</li>
    <li><strong>Address:</strong> ${bookingOrder.address ? bookingOrder.address : 'NA'}</li>
    <li><strong>Customer Name:</strong> ${userData.name ? userData.name : 'Customer' }</li>
    <li><strong>Customer Contact:</strong> ${userData.mobile ? userData.mobile : 'NA' }</li>
    <li><strong>Tests Booked:</strong>
      <ul>
        ${bookingOrder.test_data.map((test : any) => `<li>${test.test_name}: ₹${formatPrice(test.price)}</li>`).join('')}
      </ul>
    </li>
    <li><strong>Total Amount:</strong> ₹${formatPrice(totalTestCost)}</li>
    <li><strong>Payment to collect from Lab:</strong> ₹${formatPrice((totalTestCost * 0.1))}</li>
  </ol>

  <p>System generated email</p>
`;

const emailContentLab = `<p>Dear Lab Admin,</p>
  
  <p>There is a new home blood test booking done through Labon. Please make arrangements so your phlebotomist reaches the location on the scheduled date & time.</p>
  
  <p><strong>Booking details:</strong></p>
  <ol>
    <li><strong>Booking ID:</strong> LBNHVB112220241</li>
    <li><strong>Scheduled Date & Time:</strong> ${bookingOrder.date} at ${bookingOrder.timeslot}</li>
    <li><strong>Patient Name:</strong> ${bookingOrder.name ? bookingOrder.name : 'NA'}</li>
    <li><strong>Contact:</strong> +91 ${bookingOrder.mobile ? bookingOrder.mobile : 'NA'}</li>
    <li><strong>Age:</strong> ${bookingOrder.age ? bookingOrder.age : 'NA'}</li>
    <li><strong>Gender:</strong> ${bookingOrder.gender ? bookingOrder.gender : 'NA'}</li>
    <li><strong>Location:</strong> ${bookingOrder.location ? bookingOrder.location : 'NA'}</li>
    <li><strong>Address:</strong> ${bookingOrder.address ? bookingOrder.address : 'NA'}</li>
    <li><strong>Tests Booked:</strong>
      <ul>
        ${bookingOrder.test_data.map((test : any) => `<li>${test.test_name}: ₹${formatPrice(test.price)}</li>`).join('')}
      </ul>
    </li>
    <li><strong>Total Amount to collect from Patient:</strong> ₹${formatPrice(totalTestCost)}</li>
    <li><strong>Payment to Labon:</strong> ₹${formatPrice((totalTestCost * 0.1))}</li>
  </ol>


  <p>For any clarifications, please write to contact@labon.ai or call us at +91 9847012345.</p>
  <p><strong>Team Labon</strong></p>
`;

const emailContentPatient = `<p>Dear ${bookingOrder.name ? bookingOrder.name.split(' ')[0] : 'Patient'},</p>
  
  <p>${userData.name ? userData.name.split(' ')[0] : 'Customer' } has made a new home Test booking for you. Our phlebotomist will come to your location on the schedule date & time for blood test.</p>
  
  <p>Your Booking ID is LBNHVB112220241 </p>
  <p><strong>Below are the booking details:</strong></p>
  <ol>
  <li><strong>Patient Name:</strong> ${bookingOrder.name ? bookingOrder.name : 'NA'}</li>
    <li><strong>Scheduled Date & Time:</strong> ${bookingOrder.date} at ${bookingOrder.timeslot}</li>
    <li><strong>Contact:</strong> +91 ${bookingOrder.mobile ? bookingOrder.mobile : 'NA'}</li>
    <li><strong>Age:</strong> ${bookingOrder.age ? bookingOrder.age : 'NA'}</li>
    <li><strong>Gender:</strong> ${bookingOrder.gender ? bookingOrder.gender : 'NA'}</li>
    <li><strong>Location:</strong> ${bookingOrder.location ? bookingOrder.location : 'NA'}</li>
    <li><strong>Address:</strong> ${bookingOrder.address ? bookingOrder.address : 'NA'}</li>
    <li><strong>Customer Name:</strong> ${userData.name ? userData.name : 'Customer' }</li>
    <li><strong>Customer Contact:</strong> ${userData.mobile ? userData.mobile : 'NA' }</li>
    <li><strong>Tests Booked:</strong>
      <ul>
        ${bookingOrder.test_data.map((test : any) => `<li>${test.test_name}: ₹${formatPrice(test.price)}</li>`).join('')}
      </ul>
    </li>
    <li><strong>Total Amount:</strong> ₹${formatPrice(totalTestCost)}</li>
    <li><strong>Payment</strong>: You can make the payment to our phlebotomist by cash/Google Pay when we arrive on the scheduled date/time for blood sample collection.</li>
    <li><strong>Transportation Charges</strong>: Please make a transportation fee of Rs.100 when our Phlebotomist come for blood sample collection. If there are any additional charges to be paid for transportation, it will be informed when we arrive for blood test on the scheduled date/time.</li>
    <li><strong>Phlebotomist Name</strong>: NA</li>
  </ol>

  <p>For any clarifications, please write to contact@labon.ai or call us at +91 9847012345.</p>
  <p>Thank you once again for booking home test with Labon!</p>
  <p><strong>Team Labon</strong></p>

`;

const emailContentCustomer = `<p>Dear ${userData.name ? userData.name.split(' ')[0] : 'Customer' },</p>
  
  <p>Your booking for home sample collection for ${bookingOrder.name ? bookingOrder.name.split(' ')[0] : 'Patient'} is confirmed.</p>
  
  <p>Your Booking ID is LBNHVB112220241 </p>
  <p><strong>We thank you for booking the service with Labon.ai. Below are the booking details:</strong></p>
  <ol>
  <li><strong>Patient Name:</strong> ${bookingOrder.name ? bookingOrder.name : 'NA'}</li>
    <li><strong>Scheduled Date & Time:</strong> ${bookingOrder.date} at ${bookingOrder.timeslot}</li>
    <li><strong>Contact:</strong> +91 ${bookingOrder.mobile ? bookingOrder.mobile : 'NA'}</li>
    <li><strong>Age:</strong> ${bookingOrder.age ? bookingOrder.age : 'NA'}</li>
    <li><strong>Gender:</strong> ${bookingOrder.gender ? bookingOrder.gender : 'NA'}</li>
    <li><strong>Location:</strong> ${bookingOrder.location ? bookingOrder.location : 'NA'}</li>
    <li><strong>Address:</strong> ${bookingOrder.address ? bookingOrder.address : 'NA'}</li>
    <li><strong>Customer Name:</strong> ${userData.name ? userData.name : 'Customer' }</li>
    <li><strong>Customer Contact:</strong> ${userData.mobile ? userData.mobile : 'NA' }</li>
    <li><strong>Tests Booked:</strong>
      <ul>
        ${bookingOrder.test_data.map((test : any) => `<li>${test.test_name}: ₹${formatPrice(test.price)}</li>`).join('')}
      </ul>
    </li>
    <li><strong>Total Amount:</strong> ₹${formatPrice(totalTestCost)}</li>
    <li><strong>Payment</strong>: Our phlebotomist will collect the payment from the patient when we arrive on the scheduled date/time for blood sample collection. They can pay by cash/Google Pay. Please keep the patient informed of the same.</li>
    <li><strong>Transportation Charges</strong>: We collect transportation charges from the patient when we reach their location for blood test. The minimum transportation charge is Rs.100. If there are any additional charges to be paid for transportation, it will be informed to you when we call you for confirmation of the booking, or, it will be informed to the patient when we arrive on the scheduled date/time for blood sample collection.</li>
    <li><strong>Phlebotomist Name</strong>: NA</li>
  </ol>

  <p>For any clarifications, please write to contact@labon.ai or call us at +91 9847012345.</p>
  <p>Thank you once again for booking home test with Labon!</p>
  <p><strong>Team Labon</strong></p>
`;



const emailTasks = [];

    // Add the lab admin email
    emailTasks.push({
        email: 'labmanager@medivision.in',
        subject: 'New Home Blood Test Booking LBNHVB112220241 through Labon',
        message: emailContentLab,
    });

    emailTasks.push({
        email: 'contact@labon.ai',
        subject: 'New Home Blood Test Booking',
        message: emailContentAdmin,
    });

    if (isSelectFromContacts) {
      emailTasks.push({
          email: bookingOrder.email,
          subject: 'Labon - Home Visit Booking Confirmation LBNHVB112220241',
          message: emailContentPatient,
      });
  }

    emailTasks.push({
        email: userData.email,
        subject: 'Labon - Home Visit Booking Confirmation LBNHVB112220241',
        message: emailContentCustomer,
    });

    // Conditionally add the patient email
    

    try {
        // Send all emails in sequence or in parallel
        for (const task of emailTasks) {
            const response = await axios.post('/api/send_mail', task, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                console.log(`Email sent successfully to ${task.email}`);
            } else {
                console.error(`Error sending email to ${task.email}:`, response.data);
            }
        }
    } catch (error) {
        console.error('Error occurred:', error);
    }

  }
  

    return(
        <Col md='' style={{padding : '24px'}}>
                <ColorsSchemes open={open} setOpen={setOpen}/>
                <div className=" login-dark">
                    <div className="text-center">

                    <p style={{fontSize : '24px' , fontWeight :'600' , marginBottom : '0' , textAlign : 'left'}}>Send Details to Patient</p>

                    {/* <h1 style={{fontWeight:'700'}}>Send Details to Patient</h1> */}
                    {/* <div style={{display:'flex',padding:'1rem',backgroundColor:'#E5E5E5',borderRadius:'20px',marginTop:'1rem'}}>
                    <img style={{height:'15px'}} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" /> */}

                        <p style={{paddingTop : '16px'}}>Would you like to send the booking details to the patient’s email <span style={{fontWeight : 'bold'}}>{bookingOrder.email ? bookingOrder.email : 'Sudha Radhakrishnan'}</span>, so they also have the information with them?</p>
                        </div>

                        <div  className="toggle-container">
                <label className={!isSelectFromContacts ? 'active-label' : 'inactive-label'}>Do Not Send</label>
                <Label style={{marginLeft : '1rem'}} className="form-switch form-check-inline" check>
      <Input className={`switch-primary check-size`} type="checkbox" role="switch" defaultChecked={isSelectFromContacts} checked={isSelectFromContacts}
            onChange={handleToggleChange}
 disabled={false}/>
    </Label>
                <label className={isSelectFromContacts ? 'active-label' : 'inactive-label'}>Send</label>
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
                <Link href={'/labs/b_c'}>
                  <Button className="btn-lg" onClick={sendEmail} style={{marginTop : '8px' ,height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white'}} color="">Send Details</Button>
                </Link>
                </Col>
        </Col>
    )

}

export default SendDetails;

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
      <ToastBody>Congrats! Booking confirmed.</ToastBody>
              {/* <Button close className="btn-close-white me-2 m-auto" onClick={() => setOpen(false)}></Button> */}
            </div>
          </Toast>
        {/* </CardBody> */}
      </Card>
    </Col>
  );
};

function formatPrice(value: any): string {
  const numberValue = parseFloat(value); // Convert string to number
  if (isNaN(numberValue)) {
    console.error("Invalid number input:", value);
    return "0.00"; // Return a default value or handle the error as needed
  }
  return numberValue.toFixed(2); // Convert to 2 decimal places
}

'use client'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { BasicDate, CheckMeOut, EmailAddress, EmailFloatingPlaceholder, FloatingPasswordPlaceholder, FormFloating, FullDate, Height, Padding, PasswordFloatingPlaceholder, SignInButton } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FloatingFormData } from "@/Data/Form&Table/Form";
import BasicCard from "./BasicCard";
import {  ImagePath } from "@/Constant";
import Link from "next/link";
import { useEffect, useState } from "react";
import './form.css'
import DatePicker from "react-multi-date-picker";
import axios from "axios";
import { useRouter } from "next/navigation";

const ContactUs = () => {
  const [profileData, setProfileData] = useState<any>([]);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    mobile: '',
    gender: '',
    email: '',
    pincode: '',
    location: '',
    address: '',
    age: '',
    designation: '',
    message: '',
    id: ''
  });


  const [errors, setErrors] = useState({
    name: '',
    gender: '',
    designation: '',
    mobile: '',
    email: '',
    message: '',
  });

  // Regex to validate email and mobile number
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[0-9]{10}$/;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const userId = sessionStorage.getItem('user_id');
  //       if (userId) {
  //         const response = await axios.get(`/api/login?endpoint=user&id=${userId}`);
  //         setProfileData(response.data);

  //         const formatDate = (dateString: string) => {
  //           const date = new Date(dateString);
  //           return date.toISOString().split('T')[0];
  //         };
  //         // Assuming response.data contains fields: name, dob, mobile, gender, email, pincode, location, address, and age
  //         setFormData({
  //           ...response.data,
  //           dob: formatDate(response.data.dob), 
  //           // age: calculateAge(response.data.dob), // Update age based on dob
  //         });
  //       }
  //     } catch (error) {
  //       console.error('Error fetching profile data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  console.log("form value",formData);

  const calculateAge = (dob: string) => {
    if (!dob) return '';
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age.toString();
  };

  const handleInputChange = async (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      ...(name === 'dob' && { age: calculateAge(value) })
    });

    setErrors({
      ...errors,
      [name]: '',
    });


    if (name === 'pincode' && value.length === 6) {
      // Call the third-party API when pincode length is 6
      try {
          const response = await axios.get(`https://api.postalpincode.in/pincode/${value}`);
          const locationData = response.data[0];

          if (locationData.Status === 'Success' && locationData.PostOffice.length > 0) {
              // Filter the PostOffice array to find the Sub Post Office
              const subPostOffice = locationData.PostOffice.find(
                  (postOffice : any) => postOffice.BranchType === 'Sub Post Office'
              );

              if (subPostOffice) {
                  setFormData({
                      ...formData,
                      location: `${subPostOffice.Name}, ${subPostOffice.District}, ${subPostOffice.State}`,
                      pincode: value
                  });
              } else {
                  console.log('No Sub Post Office found for this pincode.');
              }
          } else {
              console.log('Invalid Pincode');
          }
      } catch (error) {
          console.error('Error fetching location data:', error);
      }
  };

}

const validateForm = () => {
  const newErrors : any = {};
  let isValid = true;

  // Name validation
  if (formData.name.length < 3) {
    newErrors.name = 'Name must be at least 3 characters long.';
    isValid = false;
  }

  // Designation validation
  if (formData.designation.length < 3) {
    newErrors.designation = 'Designation must be at least 3 characters long.';
    isValid = false;
  }

  // Mobile validation
  if (!mobileRegex.test(formData.mobile)) {
    newErrors.mobile = 'Mobile number must be 10 digits long.';
    isValid = false;
  }

  // Email validation
  if (!emailRegex.test(formData.email)) {
    newErrors.email = 'Invalid email format.';
    isValid = false;
  }

  // Message validation
  if (formData.message.length < 3) {
    newErrors.message = 'Message must be at least 3 characters long.';
    isValid = false;
  }

  setErrors(newErrors);
  return isValid;
};


const router = useRouter(); // Initialize the router

  const goBack = () => {
    router.back(); // Go back to the previous route
  };

  

  const handleTimeChange = (gender: string) => {
    setFormData({
      ...formData,
      gender: gender,
    });
  };

  const handleFormData = async (e : any) => { 

    e.preventDefault();
    
    // Validate before submitting
    if (validateForm()) {
      const userId = formData.id;
    console.log("the form data",formData);

    const emailContent = `
  <p>Dear Admin,</p>

  <p>${formData.name ? formData.name.split(' ')[0] : 'NA'} has made a new enquiry by submitting the Contact Form.</p>

  <p>Below are the details:</p>
  
  <ol>
    <li><strong>Name:</strong> ${formData.name}</li>
    <li><strong>Gender:</strong> ${formData.gender}</li>
    <li><strong>Designation:</strong> ${formData.designation}</li>
    <li><strong>Mobile:</strong> ${formData.mobile}</li>
    <li><strong>Email:</strong> ${formData.email}</li>
    <li><strong>Message:</strong> ${formData.message}</li>
  </ol>

  <p>This is a system-generated email.</p>`;

    
    const task = {
      email: 'contact@labon.ai',
      subject: `Contact Us Form Submission by ${formData.name.split(' ')[0]}`,
      message: emailContent,
  }
    try {
      // Send all emails in sequence or in parallel
      // for (const task of emailTasks) {
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
      // }
  } catch (error) {
      console.error('Error occurred:', error);
  }
      console.log('Form is valid, submitting data...', formData);
      // Submit form logic here
    } else {
      console.log('Form has errors');
    }
    
    }
  
  
  return (
    <Col md="6">

<div style={{padding : '0', height:'12rem', width:'100%',backgroundImage: 'linear-gradient(180deg, #522F62 0%, #9462B5 100%)',}}>
<div style={{display : 'flex'}}>
  <i onClick={goBack} className='fa fa-angle-left' style={{padding:'24px 0 24px 24px', fontSize : '24px' , color : 'white'}}></i>
      {/* <h1 className="text-black ml-4" style={{margin:'0' , paddingBottom : '24px'}}>My Booking Information</h1> */}
      <h1 className="text-white" style={{padding:'24px', margin: '0'}}>Contact Us</h1>
        </div>
      
      <p style={{fontSize : '22px'  , color : 'white' , padding : '16px 24px 0 24px' , margin : 0}}>Looking for some information?</p>
      <p style={{fontSize : '22px' , color : 'white' , padding : '0 24px 0 24px' , fontWeight : 'bold'}}>Write to us</p>
<div style={{padding : '0', height:'2rem', width:'100%',backgroundColor:'#F5F5F5' , borderTopLeftRadius : '16px' , borderTopRightRadius : '16px'}}>
</div>


</div>


      {/* background: linear-gradient(180deg, #522F62 0%, #9462B5 100%); */}

      
      

      <Card style={{backgroundColor:'#F5F5F5' , padding : '0 24px 24px 24px', boxShadow : 'none' , margin : '0'}}>
{/* <BasicCard/> */}
        {/* <CommonCardHeader title={FormFloating} span={FloatingFormData} /> */}
        <CardBody style={{ padding: '0' }}>
          <div className="">
            <Form className="floating-wrapper" onSubmit={(e) => e.preventDefault()}>
              <Row className="g-3">
              {/* <Col sm="12">
                  <FormGroup  floating className="mb-6 mt-3">
                    <Input disabled type="text" 
                    name="id"
                    placeholder="Enter Name"
                    value={formData.id}
                    onChange={handleInputChange} />
                    <Label check>User ID</Label>
                  </FormGroup>
                </Col> */}
                <Col sm="12" className="mt-6">
                  <FormGroup floating>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <Label check>Name</Label>
                    <p style={{margin : '0' , paddingTop : '8px' , color : 'GrayText'}}>Enter full name. Example: Smitha Chacko</p>
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                    </FormGroup>
                </Col>
                {/* <div className="gap-4" style={{ display: 'flex' , margin : '0' , paddingTop : '12px' }}>
                  <Col sm="6" className="">
                    <FormGroup floating>
                      <Input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                      />
                      <Label check>Date</Label>
                    </FormGroup>
                  </Col>

                  <Col sm="2" className="mb-6 ">
                  <FormGroup floating>
                    <Input disabled type="number" 
                    value={formData.age}
                    name="age"
                    placeholder="Age"
                    onChange={handleInputChange} />
                    <Label check>Age</Label>
                  </FormGroup>
                </Col>
                </div> */}
                <IconsRadio selectedTime={formData.gender} onTimeChange={handleTimeChange} />
                <Col sm="12">
                  <FormGroup floating className="mb-0 mt-3">
                    <Input
                      type="text"
                      name="designation"
                      placeholder="Designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                    />
                    <Label check>Designation</Label>
                    {errors.designation && <p style={{ color: 'red' }}>{errors.designation}</p>}
                  </FormGroup>
                </Col>
                <Col sm="12">
                  <FormGroup floating className="mb-6 mt-0">
                    <Input
                      type="text"
                      name="mobile"
                      placeholder="Mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                    />
                    <Label check>Mobile</Label>
                    {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile}</p>}
                  </FormGroup>
                </Col>
                <Col sm="12" className="mb-6">
                  <FormGroup floating>
                    <Input
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <Label check>Email</Label>
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                  </FormGroup>
                </Col>
                {/* <Col sm="6">
                  <FormGroup floating className="mb-6">
                    <Input
                      type="text"
                      name="pincode"
                      placeholder="Pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                    />
                    <Label check>Pincode</Label>
                  </FormGroup>
                </Col>
                <Col sm="12" className="mb-6">
                  <FormGroup floating>
                    <Input
                      type="text"
                      name="location"
                      placeholder="Location"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                    <Label check>Location</Label>
                  </FormGroup>
                </Col> */}
                <Col sm="12" className="mb-2">
                  <FormGroup floating className="mb-6">
                    <Input
                      type="textarea"
                      name="message"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      style={{
                        height: '8rem'
                      }}
                    />
                    <Label check>Message</Label>
                    {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
                  </FormGroup>
                </Col>
                {/* {canShowSummaryButton && ( */}

                  <Col sm="12">
                  {/* <Link href={'/acheck/summary'}> */}
                    <Button 
                    onClick={handleFormData} 
                    className="btn-lg" style={{ height: '3rem', width: '100%', backgroundColor: '#AE7FD1', color: 'white' }} color="">
                      Send Message
                    </Button>
                  {/* </Link> */}
                </Col>
                {/* )} */}
              </Row>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContactUs;

const IconsRadio = ({ selectedTime, onTimeChange }: any) => {

  const CustomRadioListData = [
    {
      id: 1,
      icon: "fa fa-male",
      text: "Male",
      defaultChecked: true,
    },
    {
      id: 2,
      icon: "fa fa-female",
      text: "Female",
    },
    {
      id: 3,
      icon: "fa fa-dot-circle-o",
      text: "Other",
    },
  ]
  return (
    <Col xl="12" sm="12" className="order-xl-0 order-sm-1">
      <div className=" h-100 checkbox-checked">
        {/* <h6 className="sub-title">{IconsRadios}</h6> */}
        <div className="form-check radio radio-primary ps-0">
          <ul className="radio-wrapper gap-4">
            {/* <li className="p-1 pt-2 pb-2">
              <Input id="radio-icon" className="d-block" type="radio" name="radio2"/>
              <Label htmlFor="radio-icon" check>
                <i className="fa fa-sliders"></i><span>Sliders</span>
              </Label>
            </li> */}
            {CustomRadioListData.map(({ icon, id, text, defaultChecked }, index) => (
              <li className="p-1 pt-2 pb-2" key={index} style={{maxWidth : '50px'}}>
                <Input className="checkbox-shadow d-block" id={`radio-${id}`} type="radio" defaultChecked={defaultChecked} name="radio2" 
                checked={selectedTime === text}
                onChange={() => onTimeChange(text)}/>
                <Label htmlFor={`radio-${id}`} check>
                <i className={`${icon}`} style={{ marginLeft: '' , padding :0 , fontSize : '28px' , color: selectedTime === text ? 'white' : 'black',}}></i>
                {/* <img style={{ height: '100%', margin : '0'}} className="img-fluid table-avtar" src={`${ImagePath}/${icon}`} alt="user image" /> */}

                  {/* <i className={`fa fa-${icon}`}></i> */}
                  {/* <span>{text}</span> */}
                </Label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Col>
  );
};

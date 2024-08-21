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

const FloatingForm = () => {
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
    id: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = sessionStorage.getItem('user_id');
        if (userId) {
          const response = await axios.get(`/api/login?endpoint=user&id=${userId}`);
          setProfileData(response.data);

          const formatDate = (dateString: string) => {
            const date = new Date(dateString);
            return date.toISOString().split('T')[0];
          };
          // Assuming response.data contains fields: name, dob, mobile, gender, email, pincode, location, address, and age
          setFormData({
            ...response.data,
            dob: formatDate(response.data.dob), 
            // age: calculateAge(response.data.dob), // Update age based on dob
          });
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchData();
  }, []);

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

  

  const handleTimeChange = (gender: string) => {
    setFormData({
      ...formData,
      gender: gender,
    });
  };

  const handleFormData = async () => { 
    const userId = formData.id;
    try {
      const response = await axios.patch('/api/login',formData);
      // setSavedAddresses(response.data);
      console.log("Saved addresses: where dont know", response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
    }
  
  
  return (
    <Col md="6">

<div style={{padding : '0', height:'13rem', width:'100%',backgroundImage: 'linear-gradient(180deg, #522F62 0%, #9462B5 100%)',}}>
      <h1 className="text-white" style={{padding:'24px', margin: '0'}}>My Profile</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
    <img
      style={{ height: '7rem', margin: '0' , width : '100%' , padding : '24px'}}
      className="img-fluid table-avtar"
      src={`${ImagePath}/ProfileIcon.png`}
      alt="user image"
    />
  </div>
  <div style={{ flex: 1, display: 'flex', justifyContent: 'center' ,paddingRight : '24px'}}>
    {/* <button
      style={{
        color: 'white',
        width: '800%',
        height: '3rem',
        padding: '12px 0px',
        backgroundColor: '#AE7FD1',
        border: 'none',
        borderRadius: '5px',
      }}
    >
      Upload Selfie &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {'>'}
    </button> */}
                  <Button className="btn-lg" style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white' , marginTop : '1rem'}} color="">Upload Selfie
                     {/* <span><i className="fa fa-angle-right" style={{marginLeft:'1rem'}}></i></span> */}
                     </Button>

  </div>
</div>
<div style={{padding : '0', height:'2rem', width:'100%',backgroundColor:'#F5F5F5' , borderTopLeftRadius : '16px' , borderTopRightRadius : '16px'}}>
</div>


</div>


      {/* background: linear-gradient(180deg, #522F62 0%, #9462B5 100%); */}

      
      

      <Card style={{backgroundColor:'#F5F5F5' , padding : '0 24px 24px 24px', boxShadow : 'none' , margin : '0'}}>
<BasicCard/>
        {/* <CommonCardHeader title={FormFloating} span={FloatingFormData} /> */}
        <CardBody style={{ padding: '0' }}>
          <div className="">
            <Form className="floating-wrapper" onSubmit={(e) => e.preventDefault()}>
              <Row className="g-3">
              <Col sm="12">
                  <FormGroup  floating className="mb-6 mt-3">
                    <Input disabled type="text" 
                    name="id"
                    placeholder="Enter Name"
                    value={formData.id}
                    onChange={handleInputChange} />
                    <Label check>User ID</Label>
                  </FormGroup>
                </Col>
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
                  </FormGroup>
                </Col>
                <div className="gap-4" style={{ display: 'flex' , margin : '0' , paddingTop : '12px' }}>
                  <Col sm="6" className="">
                    <FormGroup floating>
                      <Input
                        type="date"
                        name="dob"
                        // placeholder="Date"
                        value={formData.dob}
                        onChange={handleInputChange}
                      />
                      <Label check>Date</Label>
                    </FormGroup>
                  </Col>

                  {/* <DatePicker
      selected={formData.dob}
      onChange={(date) => setStartDate(date)}
      dateFormat="yyyy/MM/dd"
      className="form-control"
    /> */}

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
                </div>
                <IconsRadio selectedTime={formData.gender} onTimeChange={handleTimeChange} />
                <Col sm="12">
                  <FormGroup floating className="mb-6 mt-3">
                    <Input
                      type="text"
                      name="mobile"
                      placeholder="Mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                    />
                    <Label check>Mobile</Label>
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
                  </FormGroup>
                </Col>
                <Col sm="6">
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
                </Col>
                <Col sm="12" className="mb-2">
                  <FormGroup floating className="mb-6">
                    <Input
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                    <Label check>Address</Label>
                  </FormGroup>
                </Col>
                {/* {canShowSummaryButton && ( */}

                  <Col sm="12">
                  {/* <Link href={'/acheck/summary'}> */}
                    <Button 
                    onClick={handleFormData} 
                    className="btn-lg" style={{ height: '3rem', width: '100%', backgroundColor: '#AE7FD1', color: 'white' }} color="">
                      Save Profile <span><i className="fa fa-save" style={{ marginLeft: '24px' }}></i></span>
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

export default FloatingForm;

const IconsRadio = ({ selectedTime, onTimeChange }: any) => {

  const CustomRadioListData = [
    {
      id: 1,
      icon: "Gender - Male.png",
      text: "Male",
      defaultChecked: true,
    },
    {
      id: 2,
      icon: "Gender - Female.png",
      text: "Female",
    },
    {
      id: 3,
      icon: "Gender - Other.png",
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
                <img style={{ height: '100%', margin : '0'}} className="img-fluid table-avtar" src={`${ImagePath}/${icon}`} alt="user image" />

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

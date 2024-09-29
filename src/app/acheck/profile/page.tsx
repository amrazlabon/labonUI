'use client'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row , ToastBody , Toast, Modal, ModalBody, ModalFooter} from "reactstrap";
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
    id: '',
    profile_complete : false
  });

  const [errors, setErrors] = useState({
    name: '',
    dob: '',
    // mobile: '',
    gender: '',
    email: '',
    pincode: '',
    location: '',
    address: '',
    age: ''
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[0-9]{10}$/;
  

  const validateForm = () => {
    const newErrors : any = {};
    let isValid = true;
  
    // Name validation
    if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters long.';
      isValid = false;
    }
  
    // Designation validation
    if (formData.pincode) {
      if (formData.pincode.length < 6) {
      newErrors.pincode = 'Pincode must be at least 6 characters long.';
      isValid = false;
    }
  }

  if (!formData.gender) {
    newErrors.gender = 'Please fill the field.';
    isValid = false;
  }

  if (!formData.pincode) {
    newErrors.pincode = 'Please fill the field.';
    isValid = false;
  }

  if (!formData.address) {
    newErrors.address = 'Please fill the field.';
    isValid = false;
  }

  if (!formData.email) {
    newErrors.email = 'Please fill the field.';
    isValid = false;
  }

  if (!formData.location) {
    newErrors.location = 'Please fill the field.';
    isValid = false;
  }

  if (!formData.age) {
    newErrors.age = 'Please fill the field.';
    isValid = false;
  }
  
    // Mobile validation
    // if (!mobileRegex.test(formData.mobile)) {
    //   newErrors.mobile = 'Mobile number must be 10 digits long.';
    //   isValid = false;
    // }
  
    // Email validation
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
      isValid = false;
    }
  
    // Message validation
    if (formData.address) {
      if (formData.address.length < 3) {
      newErrors.address = 'Address must be at least 3 characters long.';
      isValid = false;
    }
  }
  if (formData.location) {
    if (formData.location.length < 3) {
    newErrors.location = 'Location must be at least 3 characters long.';
    isValid = false;
  }
}
  
    setErrors(newErrors);
    return isValid;
  };

  const [initialFormData, setInitialFormData] = useState<any>(formData);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // toggleModal()
        const userId = JSON.parse(sessionStorage.getItem('user_id') || 'null');
// const userId = JSON.parse(sessionStorage.getItem('user_id') || 'null');
        if (userId) {
          console.log("the user id",userId);
          
          const response = await axios.get(`/api/login?endpoint=user&id=${userId}`);
          setProfileData(response.data);
          

          const formatDate = (dateString: string) => {
            const date = new Date(dateString);
            return date.toISOString().split('T')[0];
          };
          // Assuming response.data contains fields: name, dob, mobile, gender, email, pincode, location, address, and age
          const newFormData = {
            ...response.data,
            dob: formatDate(response.data.dob), 
            // age: calculateAge(response.data.dob), // Update age based on dob
          }
          setFormData(newFormData);
          setInitialFormData(newFormData); // Set initial form data

          console.log("prifle data",response.data);
          
          if(response.data.profile_complete === false) {
            toggleModal()
          }
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

  
useEffect(() => {
  setIsButtonEnabled(JSON.stringify(formData) !== JSON.stringify(initialFormData));
}, [formData, initialFormData]);

  const handleTimeChange = (gender: string) => {
    setFormData({
      ...formData,
      gender: gender,
    });
  };

  const handleFormData = async () => { 
    const userId = formData.id;
    console.log("the form data",formData);
    formData.profile_complete = true
    if (validateForm()) {
    
    try {
      const response = await axios.patch('/api/login',formData);
      // setSavedAddresses(response.data);
      if(response.data) { 
      // const userResponse = await axios.get('/api/login');
      const userResponse = await axios.get(`/api/login?endpoint=user&id=${userId}`);
      if (userResponse) { 
        console.log("the user response data",userResponse.data);
        
        sessionStorage.setItem('user_data', JSON.stringify(userResponse.data));
        const event = new Event('sessionUpdate');
        window.dispatchEvent(event);
        setOpen(true)
        setTimeout(()=>{
            setOpen(false);
          },5000)
        // window.location.reload()

      }
      }
      console.log("Saved addresses: where dont know", response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  } else {
    console.log('Form has errors');
  }
    }
    const [open,setOpen] = useState(false)

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);
  
  
  
  return (
    <Col md="6">
                <ColorsSchemes open={open} setOpen={setOpen}/>
                <BasicCardModal showModal={showModal} toggleModal={toggleModal} />

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
                  {/* <Button className="btn-lg" style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white' , marginTop : '1rem'}} color="">Upload Selfie
                     </Button> */}

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
                      style={{
                        borderColor: errors.name ? 'red' : '', // Change border to red if there's an error
                      }}
                    />
                    <Label check>Name</Label>
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
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
                {errors.age && <p style={{ color: 'red' , margin : 0}}>{errors.age}</p>}
                <IconsRadio selectedTime={formData.gender} onTimeChange={handleTimeChange} />
                {errors.gender && <p style={{ color: 'red' , margin : 0}}>{errors.gender}</p>}
                <Col sm="12">
                  <FormGroup floating className="mb-6 mt-3">
                    <Input disabled
                      type="text"
                      name="mobile"
                      placeholder="Mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      // style={{
                      //   borderColor: errors.mobile ? 'red' : '', // Change border to red if there's an error
                      // }}
                    />
                    <Label check>Mobile</Label>
                    {/* {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile}</p>} */}
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
                      style={{
                        borderColor: errors.email ? 'red' : '', // Change border to red if there's an error
                      }}
                    />
                    <Label check>Email</Label>
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
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
                      style={{
                        borderColor: errors.pincode ? 'red' : '', // Change border to red if there's an error
                      }}
                    />
                    <Label check>Pincode</Label>
                    {errors.pincode && <p style={{ color: 'red' }}>{errors.pincode}</p>}
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
                      style={{
                        borderColor: errors.location ? 'red' : '', // Change border to red if there's an error
                      }}
                    />
                    <Label check>Location</Label>
                    {errors.location && <p style={{ color: 'red' }}>{errors.location}</p>}
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
                      style={{
                        borderColor: errors.address ? 'red' : '', // Change border to red if there's an error
                      }}
                    />
                    <Label check>Address</Label>
                    {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
                  </FormGroup>
                </Col>
                {/* {canShowSummaryButton && ( */}

                  <Col sm="12">
                  {/* <Link href={'/acheck/summary'}> */}
                    <Button 
                    onClick={handleFormData} 
                    disabled={!isButtonEnabled} // Disable button if form data hasn't changed
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

const BasicCardModal = ({ showModal, toggleModal } : any) => {
  const BasicCardText1 = "Tabs have long been used to show alternative views of the same group of information tabs in software.";
  const BasicCardText2 = " For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to switch between bookings.";

  return (
    <Modal isOpen={showModal} toggle={toggleModal} centered className="custom-modals">
      <ModalBody>
        <Card style={{ backgroundColor: '#E5E5E5' , padding: 0 , margin : 0}}>
          <CardBody style={{padding : 0}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* <img style={{ height: '15px', marginRight: '10px' }} className="img-fluid table-avatar" src="/path/to/caution.png" alt="Caution" /> */}
        <img style={{height:'25px'}} className="img-fluid table-avtar" src={`${ImagePath}/caution.png`} alt="user image" />
        <p className="mb-0">
                The profile is not complete, please fill the form to continue.
              </p>
            </div>

          </CardBody>
        <Button className="btnStylesss btn-lg" onClick={toggleModal}>OK</Button>
        </Card>
      </ModalBody>
      {/* <ModalFooter>
        <Button color="primary" onClick={toggleModal}>OK</Button>
      </ModalFooter> */}
    </Modal>
  );
};


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

const ColorsSchemes = ( {open} : any, {setOpen} : any) => {
  
  return (
    <Col md="6">
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
      <ToastBody>My Profile updated successfully!</ToastBody>
              {/* <Button close className="btn-close-white me-2 m-auto" onClick={() => setOpen(false)}></Button> */}
            </div>
          </Toast>
        {/* </CardBody> */}
      </Card>
    </Col>
  );
};

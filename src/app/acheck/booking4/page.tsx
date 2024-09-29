'use client'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, InputGroup, Label, Row, Table } from "reactstrap";
// import BasicCard from "./BasicCard";
// import CustomHorizontalWizardFormTabContent from "./CustomHorizontalWizardFormTabContent";
import { useCallback, useEffect, useState } from "react";
import { setActiveTab } from "@/Redux/Reducers/ProjectSlice";
// import BasicCard from "./BasicCard";
import Calendar from "react-calendar";
import { BasicDate, EmailFloatingPlaceholder, FontWeight, FullDate, ImagePath, PasswordFloatingPlaceholder } from "@/Constant";
// import BasicCard from "./BasicCard";
// import NavComponent from "./NavComponent";
// import CustomHorizontalWizard from ".";
import './form.css'
import { CommonFormGroupProp } from "@/Types/FormType";
import { CommonTableProp } from "@/Types/TableType";
import { TableHeadOptionBody, TableHeadOptionHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTable";
import Link from "next/link";
import axios from "axios";

// import OpenModalMofi from ".";

const PatientAdd = ({profile , setProfile , setStepActive, selectedTests, selectedAddress} : any) => {
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
        setActiveTab(tab);
      }, []);

      const [isSelectFromContacts, setIsSelectFromContacts] = useState(true);
      
      const [formData, setFormData] = useState({
        name: profile.name ? profile.name : '',
        dob: profile.dob ? new Date(profile.dob).toISOString().split('T')[0] : '',
        mobile: profile.mobile ? profile.mobile :'',
        relation: profile.relation ? profile.relation :'',
        gender: profile.gender ? profile.gender :'',
        email: profile.email ? profile.email :'',
        pincode: profile.pincode ? profile.pincode :'',
        location: profile.location ? profile.location :'',
        address: profile.address ? profile.address :'',
        age: profile.age ? profile.age :'',
        nick_name: profile.nick_name ? profile.nick_name :'',
        // time: '8:00 AM', // default value for time
      });

      

      const handleToggleChange = (event: any) => {
        setIsSelectFromContacts(event.target.checked);
      };

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
    
      const handleFormChange = (field: string, value: string) => {
        // setFormData({
        //   ...formData,
        //   [field]: value,
        // });
        // setProfile({
        //   ...profile,
        //   [field]: value,
        // });
        
        if (field === 'dob') {
          const age = calculateAge(value);
          setFormData({
            ...formData,
            [field]: value,
            age: age, // Update age based on dob
          });
          setProfile({
            ...profile,
            [field]: value,
            age: age, // Update age in profile
          });
        } else {
          setFormData({
            ...formData,
            [field]: value,
          });
          setProfile({
            ...profile,
            [field]: value,
          });
        }
        // console.log("formdata",formData);
        
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
      <Card style={{backgroundColor:'#F5F5F5' , padding : '0' , margin : '0' , boxShadow : 'none'}}>
      {/* <h1 className="text-black ml-4 mt-4 " style={{margin:'2rem' }}>Tests</h1> */}

{/* <div> */}
<h1 className="text-black" style={{paddingBottom:'24px', margin : '0'}}>Add Patient Details</h1>

<div className="toggle-container" >
                <label className={!isSelectFromContacts ? 'active-label' : 'inactive-label'}>
                Select from My Contacts</label>
                <Label style={{marginLeft : '1rem'}} className="form-switch form-check-inline" check>
      <Input className={`switch-primary check-size`} type="checkbox" role="switch" defaultChecked={isSelectFromContacts} checked={isSelectFromContacts}
            onChange={handleToggleChange}
 disabled={false}/>
    </Label>
                <label className={isSelectFromContacts ? 'active-label' : 'inactive-label'}>Add New</label>
            </div>

            </Card>
            {isSelectFromContacts ? <FloatingForm profile={profile} setProfile={setProfile} formData={formData} onFormChange={handleFormChange} setStepActive={setStepActive}/> : 
            <TableHeadOptions profile={profile} setProfile={setProfile} setStepActive={setStepActive}/>}






{/* <Col sm="12">
                  <Button style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white' , marginTop : '4rem'}} color="">Add Patient Details</Button>
                </Col> */}
        <div>
        </div>
        </Col>
    )
}

export default PatientAdd;

const FloatingForm = ({ profile , setProfile , formData, onFormChange , setStepActive}: any) => {

  
  const [isAgeShow , setIsAgeShow] = useState(false)

  const [errors, setErrors] = useState({
    name: '',
    dob: '',
    mobile: '',
    gender: '',
    relation : '',
    nick_name : '',
    email: '',
    pincode: '',
    location: '',
    address: '',
    age: ''
  });
  // console.log("formdata",formData);

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

if (!formData.relation) {
newErrors.relation = 'Please fill the field.';
isValid = false;
}

if (!formData.nick_name) {
newErrors.nick_name = 'Please fill the field.';
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

if (!mobileRegex.test(formData.mobile)) {
  newErrors.mobile = 'Invalid mobile format.';
  isValid = false;
}

// Message validation
if (formData.address) {
  if (formData.address.length < 3) {
  newErrors.address = 'Address must be at least 3 characters long.';
  isValid = false;
}
}

if (formData.nick_name) {
if (formData.nick_name.length < 3) {
newErrors.nick_name = 'Nick Name must be at least 3 characters long.';
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

  
  const handleInputChange = (e: any) => {
    // console.log("the values of date change",e.target.name);
    
    const { name, value } = e.target;
    if (name === 'dob') {
      setIsAgeShow(true)
    }
      
    //   const age = calculateAge(value);
    //   console.log("the age",age);
      
    // onFormChange('age', age);

    // }
    onFormChange(name, value);
  };

  const handleTimeChange = (gender: string) => {
    onFormChange('gender', gender);
  };

  const handleBookTimingsClick =async () => {
    // console.log("form data",formData);
    const userId = JSON.parse(sessionStorage.getItem('user_id') || 'null');

    // console.log("profile value in thw add",profile);
    if (validateForm()) {
    
    if(userId){
      
      const reqBody = {
        address : formData.address,
        location : formData.location,
        pincode : formData.pincode,
        nick_name : formData.nick_name,
        dob : new Date(formData.dob),
        mobile : '+91' + formData.mobile,
        email : formData.email,
        age : formData.age,
        gender : formData.gender,
        user_id : userId,
        first_name : formData.name,
        relation : formData.relation,
        middle_name : '',
        last_name : '',
        co_ordinates : profile.co_ordinates
      }
      console.log("the request bidy",reqBody);
      
      try {
        setStepActive(3)
        const response = await axios.post('/api/patient_info',reqBody);
        // setSavedAddresses(response.data);
        // console.log("coming till here");
        // console.log("Saved addresses: where dont know", response.data);
        setProfile({
          ...profile,
          patient_id : response.data[0].id
        })
        

      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
  } else {
    console.log('Form has errors');
  }

    
  }

  const { name, dob, gender, pincode , mobile , email , location , address , nick_name , relation} = formData;

  // Check if all required fields have values
  const canShowSummaryButton = name && dob && gender && pincode && mobile && email && location && address && nick_name && relation;

  return (
    <Col>


      {/* background: linear-gradient(180deg, #522F62 0%, #9462B5 100%); */}

      
      <Card style={{backgroundColor:'#F5F5F5' , padding : '0', boxShadow : 'none' , margin : '0'}}>
        {/* <CommonCardHeader title={FormFloating} span={FloatingFormData} /> */}
        <CardBody style={{ padding: '0' }}>
          <div className="">
            <Form className="floating-wrapper" onSubmit={(e) => e.preventDefault()}>
              <Row className="g-3">
                <Col sm="12" className="mt-6">
                  <FormGroup floating>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Patient Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{
                        borderColor: errors.name ? 'red' : '', // Change border to red if there's an error
                      }}
                    />
                    <Label check>Patient Name</Label>
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                  </FormGroup>
                </Col>
                <div className="gap-4" style={{ display: 'flex' , margin : '0' }}>
                  <Col sm="6" className="mt-3">
                    <FormGroup floating>
                      <Input
                        type="date"
                        name="dob"
                        // placeholder="Date"
                        value={formData.dob}
                        onChange={handleInputChange}
                      />
                      <Label check>Date of Birth</Label>
                    </FormGroup>
                  </Col>
                  {(isAgeShow || profile.dob) &&
                  (<Col sm="2" className="mb-6 mt-3">
                  <FormGroup floating>
                    <Input disabled type="number" 
                    value={formData.age}
                    name="age"
                    placeholder="Age"
                    onChange={handleInputChange} />
                    <Label check>Age</Label>
                  </FormGroup>
                </Col>)
                  }
                </div>
                {errors.age && <p style={{ color: 'red' , margin : 0}}>{errors.age}</p>}

                <IconsRadio selectedTime={formData.gender} onTimeChange={handleTimeChange} />
                {errors.gender && <p style={{ color: 'red' , margin: 0}}>{errors.gender}</p>}
                <Col sm="12">
  <FormGroup floating className="mb-0 mt-3">
    <Input
      type="select"
      name="relation"
      placeholder="Relation"
      value={formData.relation}
      onChange={handleInputChange}
    >
      <option value="" disabled>Select Relation</option>
      <option value="Myself">Myself</option>
      <option value="Father">Father</option>
      <option value="Mother">Mother</option>
      <option value="Spouse">Spouse</option>
      <option value="Sibling">Sibling</option>
      <option value="Child">Child</option>
      <option value="Relative">Relative</option>
      <option value="Friend">Friend</option>
      <option value="Other">Other</option>
    </Input>
    <Label check>Relation</Label>
    {errors.relation && <p style={{ color: 'red' }}>{errors.relation}</p>}
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
                      style={{
                        borderColor: errors.mobile ? 'red' : '', // Change border to red if there's an error
                      }}
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
                <Col sm="12" className="mb-0">
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
                <Col sm="12" className="mb-2">
                  <FormGroup floating>
                    <Input type="text" name="nick_name" value={formData.nick_name} onChange={handleInputChange}
                    style={{
                      borderColor: errors.nick_name ? 'red' : '', // Change border to red if there's an error
                    }} placeholder="Name" />
                    <Label>Nick Name</Label>
                    {/* <p style={{margin : '0' , paddingTop : '8px' , color : 'GrayText'}}>Example: Home</p> */}
                    {errors.nick_name && <p style={{ color: 'red' }}>{errors.nick_name}</p>}
                  </FormGroup>
                </Col>
                {canShowSummaryButton && (

                  <Col sm="12">
                  {/* <Link href={'/acheck/summary'}> */}
                    <Button onClick={handleBookTimingsClick} className="btn-lg" style={{ height: '3rem', width: '100%', backgroundColor: '#AE7FD1', color: 'white' }} color="">
                      Summary <span><i className="fa fa-angle-right" style={{ marginLeft: '24px' }}></i></span>
                    </Button>
                  {/* </Link> */}
                </Col>
                )}
              </Row>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

const CommonFormGroup:React.FC<CommonFormGroupProp> = ({ labelClass, label, colSm, colClass, inputType, placeholder, defaultValue,inputClass,max }) => {
  return (
    <Row className="mb-3 align-items-center">
      {/* <Label className={`col-sm-3 ${labelClass}`} check>{label}</Label> */}
      <Col sm={colSm} className={colClass}>
        <Input type={inputType} className={inputClass} placeholder={placeholder} defaultValue={defaultValue} max={max}/>
      </Col>
    </Row>
  );
};

// export default FloatingForm;

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

const CommonTable :React.FC<CommonTableProp>= ({ tableClass, strip, caption, size, hover, headClass, headRowClass, headData, children }) => {
  return (
    <div className={`table-responsive theme-scrollbar ${tableClass ? tableClass : ""}`}>
      <Table striped={strip} hover={hover} size={size}>
        {caption && <caption>{caption}</caption>}
        {/* <thead className={headClass}>
          <tr className={headRowClass}>
            {headData.map((head) => (
              <th key={head.id} scope="col">
                {head.head}
              </th>
            ))}
          </tr>
        </thead> */}
        <tbody>{children}</tbody>
      </Table>
     </div>
  );
};

const TableHeadOptions=({profile , setProfile , setStepActive} : any)=> {
  // TableHeadOptions=()=> {

  const [patientInformation , setPatientInformation] = useState<any>([])
  const TableHeadOptionBody = [
    {
      id: 1,
      first_name: "Vasudevan Ramachandran",
      relation: "Father",
      userName: "5 tests done so far",
      time: "No upcoming tests"
    },
    {
      id: 2,
      first_name: "Swathi Ramachandran",
      relation: "Mother",
      userName: "5 tests done so far",
      time: "No upcoming tests"
    },
    {
      id: 3,
      first_name: "Sowmya Ramachandran",
      relation: "Sister",
      userName: "5 tests done so far",
      time: "No upcoming tests"
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = JSON.parse(sessionStorage.getItem('user_id') || 'null');
      if(userId){
        // console.log("is inside the data");
        
        // setIsLoggedIn(true)
        const response = await axios.get(`/api/patient_info?endpoint=user&id=${userId}`);
        const sortedData = response.data.sort((a : any, b : any) => b.id - a.id); // Sorts in ascending order
        setPatientInformation(sortedData)
        // setSavedAddresses(response.data);
        // console.log("Saved addresses: where dont know", response.data);
      }
      } catch (error) {
        setPatientInformation([])
        // setError(error.message);
      }
    };

    fetchData();
  }, []);


    const handleRowClick = (data: any) => {
      setProfile({
        ...profile,
        name: data.first_name,
        relation : data.relation,
        dob: data.dob, // Add appropriate value or logic if needed
        mobile: data.mobile, // Add appropriate value or logic if needed
        // relation: data.relation, // Add appropriate value or logic if needed
        gender: data.gender, // Add appropriate value or logic if needed
        email: data.email, // Add appropriate value or logic if needed
        pincode: data.pincode, // Add appropriate value or logic if needed
        location: data.location, // Add appropriate value or logic if needed
        address: data.address, // Add appropriate value or logic if needed
        age: data.age, // Add appropriate value or logic if needed
        nick_name: data.nick_name, // Add appropriate value or logic if needed
        patient_id : data.id,
        co_ordinates : data.co_ordinates
      });
      setStepActive(3)
    };

    const formatDate = (isoString : any) => {
      const date = new Date(isoString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };
  

  return (
    <Col sm="" style={{paddingRight : '0' , paddingLeft : '0'}}>
      <Card style={{boxShadow : 'none' , margin : '0'}}>
        {/* <CommonCardHeader title={TableHeadOption} span={TableHeadOptionData}/> */}
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12" style={{paddingLeft : '16px' , paddingRight : '16px'}}>
          {patientInformation.length > 0 ? (
              <CommonTable headClass="table-dark" headData={TableHeadOptionHead}>
                {patientInformation.map((data: any) => (
                  <tr style={{ cursor: 'pointer' }} key={data.id} onClick={() => handleRowClick(data)}>
                    <td style={{paddingTop : '0'}}>
                      <img style={{ height: '3rem', margin: '0'  , borderRadius : '5px'}} className="img-fluid table-avatar" src={`${ImagePath}/Father.png`} alt="user image" />
                    </td>
                    <td>
                      <div style={{ display: 'grid' }}>
                        <p style={{ paddingTop: '0', margin: '0' , fontSize : '16px' , fontWeight : '600' }}>
                          {data.first_name}
                        </p>
                        <div className="gap-1" style={{ display: 'flex' , marginTop : '4px'}}>
                          <img style={{ height: '1rem', margin: '0'  ,}} className="img-fluid table-avatar" src={`${ImagePath}/Icon-Relation.png`} alt="user image" />
                          <p style={{ paddingTop: '0', margin: '0' , fontSize : '14px' }}>
                            {data.relation}
                          </p>
                        </div>
                        <div className="gap-1" style={{ display: 'flex' , marginTop : '4px' }}>
                          <img style={{ height: '1rem', margin: '0' }} className="img-fluid table-avatar" src={`${ImagePath}/icon - Syringe.png`} alt="user image" />
                          <p style={{ paddingTop: '0', margin: '0'  , fontSize : '14px'}}>
                            {data.total_test_count ? data.total_test_count : '0'} tests done so far
                          </p>
                        </div>
                        <div className="gap-1" style={{ display: 'flex' , marginTop : '4px'}}>
                          <img style={{ height: '1rem', margin: '0' }} className="img-fluid table-avatar" src={`${ImagePath}/Icon - Clock.png`} alt="user image" />
                          <p style={{ paddingTop: '0', margin: '0', fontSize: '14px', color: data.upcoming_test_count || data.upcoming_test_date ? 'rgba(101, 196, 102, 1)' : 'rgba(196, 107, 101, 1)' }}>
  {data.upcoming_test_count
    ? `${data.upcoming_test_count} upcoming tests`
    : data.upcoming_test_date
      ? `${formatDate(data.upcoming_test_date)} ${data.upcoming_time_slot}`
      : '0 upcoming tests'}
</p>

                          {/* <p style={{ paddingTop: '0', margin: '0' , fontSize : '14px' , color  :'rgba(196, 107, 101, 1)' }}>
                            {data.upcoming_test_count ? data.upcoming_test_count + 'upcoming tests' : data.upcoming_test_date + data.upcoming_time_slot}
                          </p> */}
                        </div>
                      </div>
                    </td>
                    <td>
                      <i className="fa fa-angle-right"></i>
                    </td>
                  </tr>
                ))}
              </CommonTable>
            ) : (
              <p>There are no saved contacts</p>
            )}
          </Col>
        </Row>
      </Card>
    </Col>
  );
}






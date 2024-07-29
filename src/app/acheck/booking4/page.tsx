'use client'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, InputGroup, Label, Row, Table } from "reactstrap";
// import BasicCard from "./BasicCard";
// import CustomHorizontalWizardFormTabContent from "./CustomHorizontalWizardFormTabContent";
import { useCallback, useState } from "react";
import { setActiveTab } from "@/Redux/Reducers/ProjectSlice";
// import BasicCard from "./BasicCard";
import Calendar from "react-calendar";
import { BasicDate, EmailFloatingPlaceholder, FullDate, ImagePath, PasswordFloatingPlaceholder } from "@/Constant";
// import BasicCard from "./BasicCard";
// import NavComponent from "./NavComponent";
// import CustomHorizontalWizard from ".";
import './form.css'
import { CommonFormGroupProp } from "@/Types/FormType";
import { CommonTableProp } from "@/Types/TableType";
import { TableHeadOptionBody, TableHeadOptionHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTable";
import Link from "next/link";

// import OpenModalMofi from ".";

const PatientAdd = ({profile , setProfile , setStepActive} : any) => {
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
        setActiveTab(tab);
      }, []);

      const [isSelectFromContacts, setIsSelectFromContacts] = useState(true);
      
      const [formData, setFormData] = useState({
        name: profile.name ? profile.name : '',
        dob: profile.dob ? profile.dob :'',
        mobile: profile.mobile ? profile.mobile :'',
        gender: profile.gender ? profile.gender :'',
        email: profile.email ? profile.email :'',
        pincode: profile.pincode ? profile.pincode :'',
        location: profile.location ? profile.location :'',
        address: profile.address ? profile.address :'',
        age: profile.age ? profile.age :'',
        // time: '8:00 AM', // default value for time
      });
      console.log("formdata",formData);
    
      const handleToggleChange = (event: any) => {
        setIsSelectFromContacts(event.target.checked);
      };
    
      const handleFormChange = (field: string, value: string) => {
        setFormData({
          ...formData,
          [field]: value,
        });
        setProfile({
          ...profile,
          [field]: value,
        });
        
        console.log("formdata",formData);
        
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
      <Card style={{backgroundColor:'#F5F5F5' , padding : '0' , margin : '0'}}>
      {/* <h1 className="text-black ml-4 mt-4 " style={{margin:'2rem' }}>Tests</h1> */}

{/* <div> */}
<h1 className="text-black" style={{paddingBottom:'24px'}}>Select a Suitable Time</h1>

<div className="toggle-container" >
                <label>Select from My Contacts</label>
                <Label style={{marginLeft : '1rem'}} className="form-switch form-check-inline" check>
      <Input className={`switch-primary check-size`} type="checkbox" role="switch" defaultChecked={isSelectFromContacts} checked={isSelectFromContacts}
            onChange={handleToggleChange}
 disabled={false}/>
    </Label>
                <label>Add New</label>
            </div>

            </Card>
            {isSelectFromContacts ? <FloatingForm formData={formData} onFormChange={handleFormChange} setStepActive={setStepActive}/> : 
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

const FloatingForm = ({ formData, onFormChange , setStepActive}: any) => {

  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
  
    // Check if the birth date has not occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  };

  
  const handleInputChange = (e: any) => {
    console.log("the values of date change",e.target.name);
    
    const { name, value } = e.target;
    if (name === 'dob') {
      console.log("coming inside");
      
      const age = calculateAge(value);
      console.log("the age",age);
      
      // onFormChange('age', age);
      formData.age = age;
    }
    onFormChange(name, value);
  };

  const handleTimeChange = (gender: string) => {
    onFormChange('gender', gender);
  };

  const handleBookTimingsClick =() => {
    setStepActive(3)
  }

  const { name, dob, gender, pincode , mobile , email , location , address} = formData;

  // Check if all required fields have values
  const canShowSummaryButton = name && dob && gender && pincode && mobile && email && location && address;

  return (
    <Col>


      {/* background: linear-gradient(180deg, #522F62 0%, #9462B5 100%); */}

      
      <Card style={{backgroundColor:'#F5F5F5' , padding : '0'}}>
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
                    />
                    <Label check>Patient Name</Label>
                  </FormGroup>
                </Col>
                <div className="gap-4" style={{ display: 'flex' }}>
                  <Col sm="6" className="mt-2">
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
              <li className="p-1 pt-2 pb-2" key={index}>
                <Input className="checkbox-shadow d-block" id={`radio-${id}`} type="radio" defaultChecked={defaultChecked} name="radio2" 
                checked={selectedTime === text}
                onChange={() => onTimeChange(text)}/>
                <Label htmlFor={`radio-${id}`} check>
                <img style={{ height: '100%', }} className="img-fluid table-avtar" src={`${ImagePath}/${icon}`} alt="user image" />

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

    const TableHeadOptionBody = [
      {
        id: 1,
        firstName: "Vasudevan Ramachandran",
        lastName: "Father",
        userName: "5 tests done so far",
        time: "No upcoming tests"
      },
      {
        id: 2,
        firstName: "Swathi Ramachandran",
        lastName: "Mother",
        userName: "5 tests done so far",
        time: "No upcoming tests"
      },
      {
        id: 3,
        firstName: "Sowmya Ramachandran",
        lastName: "Sister",
        userName: "5 tests done so far",
        time: "No upcoming tests"
      },
    ];

    const handleRowClick = (data: any) => {
      setProfile({
        ...profile,
        name: data.firstName,
        relation : data.lastName,
        dob: '', // Add appropriate value or logic if needed
        mobile: '', // Add appropriate value or logic if needed
        gender: '', // Add appropriate value or logic if needed
        email: '', // Add appropriate value or logic if needed
        pincode: '', // Add appropriate value or logic if needed
        location: '', // Add appropriate value or logic if needed
        address: '', // Add appropriate value or logic if needed
        age: '' // Add appropriate value or logic if needed
      });
      setStepActive(3)
    };
  

  return (
    <Col sm="" style={{paddingRight : '0' , paddingLeft : '0'}}>
      <Card>
        {/* <CommonCardHeader title={TableHeadOption} span={TableHeadOptionData}/> */}
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable headClass="table-dark" headData={TableHeadOptionHead}>
              {TableHeadOptionBody.map((data) => (
                <tr style={{cursor : 'pointer'}} key={data.id} onClick={() => handleRowClick(data)}>
                  {/* <th scope="row">{data.id}</th> */}
                  <td>
        <img style={{height:'4rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/ProfileIcon.png`} alt="user image" />
        {/* {data.lastName} */}
                    </td>
                  <td>
                  <div style={{display : 'grid'}}>
                    <h4 style={{paddingTop : '16px', margin : '0'}}>
                      {data.firstName}
                    </h4>
                    <div className="gap-2" style={{display : 'flex'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon-Relation.png`} alt="user image" />

                    <p style={{paddingTop : '0' , margin : '0'}}>
                    
                    {data.lastName}
                    </p>
                    </div>
                    <div className="gap-2" style={{display : 'flex'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Syringe.png`} alt="user image" />
                    <p style={{paddingTop : '0', margin : '0'}}> 

                    {data.userName}
                    </p>
                    </div>
                    <div className="gap-2" style={{display : 'flex'}}>
                    <img style={{height:'1rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/icon - Clock.png`} alt="user image" />
                    <p style={{paddingTop : '0', margin : '0'}}>

                    {data.time}
                    </p>
                    </div>
                  </div>
                  </td>
                  <td>
                    <i className='fa fa-angle-right'></i>
                    {/* {data.userName} */}
                    </td>
                </tr>
              ))}
            </CommonTable>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}






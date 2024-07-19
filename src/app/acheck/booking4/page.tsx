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

const PatientAdd = () => {
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
        setActiveTab(tab);
      }, []);

      const [isSelectFromContacts, setIsSelectFromContacts] = useState(true);

  const handleToggleChange = (event : any) => {
    setIsSelectFromContacts(event.target.checked);
  };


      
    return (
    <Col md='6' >
      <div style={{padding : '0', height:'11rem', width:'100%',backgroundImage: 'linear-gradient(180deg, #522F62 0%, #9462B5 100%)',}}>
<h1 className="text-white" style={{padding:'24px', margin: '0'}}>Home Visit Booking</h1>
<div>
  <p className="text-white" style={{paddingBottom:'8px',paddingLeft : '24px', margin: '0'}}>Glucose</p>
  <h2 className="text-white" style={{padding:'0', paddingLeft : '24px', margin: '0'}}>1100.00</h2>
</div>
<div style={{marginTop : '24px', height:'2rem', width:'100%',backgroundColor:'#F5F5F5' , borderTopLeftRadius : '16px' , borderTopRightRadius : '16px'}}>
</div>
</div>
      <Card style={{backgroundColor:'#F5F5F5' , padding : '24px' , margin : '0'}}>
      {/* <h1 className="text-black ml-4 mt-4 " style={{margin:'2rem' }}>Tests</h1> */}

{/* <div> */}
<h1 className="text-black" style={{paddingBottom:'24px'}}>Select a Suitable Time</h1>

{/* <BasicCard/> */}
{/* <div style={{display:'flex'}}>

<p style={{fontWeight:'600',fontSize:'16px'}}>Morning </p><span style={{color:'#65C466'}}> (Recommended)</span>
</div> */}
{/* <IconsRadio/> */}
                                    
{/* </div> */}

{/* <CustomHorizontalWizard differentId heading="Custom vertical wizard" horizontalWizardClass="vertical-options vertical-variations" firstXl={3} secondXl={9} /> */}

{/* <CardBody>
          <div className={`horizontal-wizard-wrapper vertical-options`}>
            <Row className="g-3">
              <Col xl={firstXl} xs={xs} className="main-horizontal-header">
                <NavComponent callbackActive={callback} activeTab={activeTab} />
              </Col>
              <Col xl={secondXl} xs={xs}>
                <CustomHorizontalWizardFormTabContent activeTab={activeTab} callbackActive={callback} differentId={differentId}/>
              </Col>
            </Row>
          </div>
        </CardBody> */}
{/* <CustomHorizontalWizardFormTabContent activeTab={1} callbackActive={callback} differentId={false}/> */}


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
            {isSelectFromContacts ? <FloatingForm /> : <TableHeadOptions />}

            {/* <TableHeadOptions/>

            <FloatingForm/> */}




{/* <Col sm="12">
                  <Button style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white' , marginTop : '4rem'}} color="">Add Patient Details</Button>
                </Col> */}
        <div>
            {/* <OpenModalMofi/> */}
        </div>
        </Col>
    )
}

export default PatientAdd;

const FloatingForm = () => {
  return (
    <Col>


      {/* background: linear-gradient(180deg, #522F62 0%, #9462B5 100%); */}

      
      <Card style={{backgroundColor:'#F5F5F5'}}>
        {/* <CommonCardHeader title={FormFloating} span={FloatingFormData} /> */}
        <CardBody style={{padding : '24px'}}>
          {/* <BasicCard/> */}
          <div className="">
            <Form className="floating-wrapper" onSubmit={(e)=>e.preventDefault()}>
              <Row className="g-3">
                {/* <Col sm="12">
                  <FormGroup  floating className="mb-3">
                    <Input disabled type="text" placeholder={EmailFloatingPlaceholder} />
                    <Label check>User ID</Label>
                  </FormGroup>
                </Col> */}
                <Col sm="12" className="mt-6 ">
                  <FormGroup floating>
                    <Input type="text" placeholder={PasswordFloatingPlaceholder} />
                    <Label check>Patient Name</Label>
                  </FormGroup>
                </Col>
                <div className="gap-4" style={{display : 'flex'}}>

                <Col sm="6" className="mt-2">
                  {/* <FormGroup floating>
                    <Input type="text" placeholder={PasswordFloatingPlaceholder} />
                    <Label check>Name</Label>
                    </FormGroup> */}
          <CommonFormGroup inputType="date" label={BasicDate} colSm="12" inputClass="digits" defaultValue={FullDate} />
                </Col>
                
                {/* <Col sm="2" className="mt-2 ">
                  <FormGroup floating>
                    <Input disabled type="number" placeholder={PasswordFloatingPlaceholder} />
                    <Label check>Age</Label>
                  </FormGroup>
                </Col> */}
                    </div>

                <IconsRadio/>
                
                <Col sm="12">
                  <FormGroup  floating className="mb-6 mt-3">
                    <Input type="text" placeholder={EmailFloatingPlaceholder} />
                    <Label check>Mobile</Label>
                  </FormGroup>
                </Col>
                <Col sm="12" className="mb-6">
                  <FormGroup floating>
                    <Input type="text" placeholder={PasswordFloatingPlaceholder} />
                    <Label check>Email</Label>
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup  floating className="mb-6">
                    <Input type="text" placeholder={EmailFloatingPlaceholder} />
                    <Label check>Pincode</Label>
                  </FormGroup>
                </Col>
                <Col sm="12" className="mb-6">
                  <FormGroup floating>
                    <Input type="text" placeholder={PasswordFloatingPlaceholder} />
                    <Label check>Location</Label>
                  </FormGroup>
                </Col><Col sm="12" className="mb-2">
                  <FormGroup  floating className="mb-6">
                    <Input type="text" placeholder={EmailFloatingPlaceholder} />
                    <Label check>Address</Label>
                  </FormGroup>
                </Col>
                {/* <Col sm="12" className="mt-0">
                  <div className="form-check checkbox-checked">
                    <Input id="gridCheck" type="checkbox" />
                    <Label htmlFor="gridCheck" check>{CheckMeOut}</Label>
                  </div>
                </Col> */}
                <Col sm="12">
                <Link href={'/acheck/summary'}>
                  <Button style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white'}} color="">Add Patient Details <span><i className="fa fa-angle-right" style={{marginLeft: '24px'}}></i></span></Button>
                </Link>
                </Col>
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

const IconsRadio = () => {

  const CustomRadioListData = [
    {
      id: 1,
      icon: "Gender - Male.png",
      text: "Hidden",
      defaultChecked: true,
    },
    {
      id: 2,
      icon: "Gender - Female.png",
      text: "Folder",
    },
    {
      id: 3,
      icon: "Gender - Other.png",
      text: "Send",
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
                <Input className="checkbox-shadow d-block" id={`radio-${id}`} type="radio" defaultChecked={defaultChecked} name="radio2" />
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

const TableHeadOptions=()=> {
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
        firstName: "HDL Cholesterol",
        lastName: "Mother",
        userName: "5 tests done so far",
        time: "No upcoming tests"
      },
      {
        id: 3,
        firstName: "LDL Cholesterol",
        lastName: "Sister",
        userName: "5 tests done so far",
        time: "No upcoming tests"
      },
    ];

  return (
    <Col sm="" style={{paddingRight : '24px' , paddingLeft : '24px'}}>
      <Card>
        {/* <CommonCardHeader title={TableHeadOption} span={TableHeadOptionData}/> */}
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable headClass="table-dark" headData={TableHeadOptionHead}>
              {TableHeadOptionBody.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>
        <img style={{height:'4rem', margin:'0'}} className="img-fluid table-avtar" src={`${ImagePath}/ProfileIcon.png`} alt="user image" />
        {/* {data.lastName} */}
                    </td>
                  <td>
                  <div style={{display : 'grid'}}>
                    <h3 style={{paddingTop : '16px', margin : '0'}}>
                      {data.firstName}
                    </h3>
                    <p style={{paddingTop : '8px' , margin : '0'}}>

                    {data.lastName}
                    </p>
                    <p style={{paddingTop : '8px', margin : '0'}}> 

                    {data.userName}
                    </p>
                    <p style={{paddingTop : '8px', margin : '0'}}>

                    {data.time}
                    </p>
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






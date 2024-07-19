import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { BasicDate, CheckMeOut, EmailAddress, EmailFloatingPlaceholder, FloatingPasswordPlaceholder, FormFloating, FullDate, Height, Padding, PasswordFloatingPlaceholder, SignInButton } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { FloatingFormData } from "@/Data/Form&Table/Form";
import BasicCard from "./BasicCard";
import CommonFormGroup from "./CommonFormGroup";
import { IconsRadio } from "./IconsRadio";
import {  ImagePath } from "@/Constant";
import Link from "next/link";

const FloatingForm = () => {
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
                  <Button style={{height: '3rem', width :'90%' , backgroundColor : '#AE7FD1' , color :'white'}} color="">Upload Selfie <span><i className="fa fa-angle-right" style={{marginLeft:'1rem'}}></i></span></Button>

  </div>
</div>
<div style={{padding : '0', height:'2rem', width:'100%',backgroundColor:'#F5F5F5' , borderTopLeftRadius : '16px' , borderTopRightRadius : '16px'}}>
</div>


</div>
      {/* background: linear-gradient(180deg, #522F62 0%, #9462B5 100%); */}

      
      <Card style={{backgroundColor:'#F5F5F5'}}>
        {/* <CommonCardHeader title={FormFloating} span={FloatingFormData} /> */}
        <CardBody style={{padding : '24px'}}>
          <BasicCard/>
          <div className="">
            <Form className="floating-wrapper" onSubmit={(e)=>e.preventDefault()}>
              <Row className="g-3">
                <Col sm="12">
                  <FormGroup  floating className="mb-6 mt-3">
                    <Input disabled type="text" placeholder={EmailFloatingPlaceholder} />
                    <Label check>User ID</Label>
                  </FormGroup>
                </Col>
                <Col sm="12" className="mb-6">
                  <FormGroup floating>
                    <Input type="text" placeholder={PasswordFloatingPlaceholder} />
                    <Label check>Name</Label>
                  </FormGroup>
                </Col>
                <div className="gap-4" style={{display : 'flex'}}>

                <Col sm="6" className="mb-6">
                  {/* <FormGroup floating>
                    <Input type="text" placeholder={PasswordFloatingPlaceholder} />
                    <Label check>Name</Label>
                    </FormGroup> */}
          <CommonFormGroup inputType="date" label={BasicDate} colSm="12" inputClass="digits" defaultValue={FullDate} />
                </Col>

                <Col sm="2" className="mb-6 ">
                  <FormGroup floating>
                    <Input disabled type="number" placeholder={PasswordFloatingPlaceholder} />
                    <Label check>Age</Label>
                  </FormGroup>
                </Col>
                    </div>

<div style={{marginBottom : '24px'}}>

                <IconsRadio/>
</div>
                
                <Col sm="12">
                  <FormGroup  floating className="mb-6">
                    <Input disabled type="text" placeholder={EmailFloatingPlaceholder} />
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
                <Col sm="12" className="mt-6">
                  <FormGroup floating>
                    <Input type="text" placeholder={PasswordFloatingPlaceholder} />
                    <Label check>Location</Label>
                  </FormGroup>
                </Col><Col sm="12">
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
                <Link href={'/acheck/testss'}>
                  <Button style={{height: '3rem', width :'100%' , backgroundColor : '#AE7FD1' , color :'white'}} color="">Save Profile <span><i className="fa fa-save" style={{marginLeft: '24px'}}></i></span></Button>
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

export default FloatingForm;

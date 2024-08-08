'use client'

import CommonModal from "@/Components/UiKits/Modal/Common/CommonModal";
import { ClickOut } from "@/Constant";
import { StaticModalToggleProp } from "@/Types/UikitsType";
import { useState, useRef, useEffect } from "react";
import { Col, Button, Form, Row, FormGroup, Input, Label } from "reactstrap";
// import OpenModalMofi from ".";
import './homestyle.css'
import Link from "next/link";

const Login = () => {
    const [modalTwo, setModalTwo] = useState(false);
    const modalTwoTogggle = () => setModalTwo(!modalTwo);

    useEffect(() => {
        modalTwoTogggle()
    }, [])

    
    return (
        <div>
            {/* <OpenModalMofi/> */}
            <ModalTwo modalTwo={modalTwo} modalTwoTogggle={modalTwoTogggle}/>

        </div>
    )
}

export default Login;


const ModalTwo = ({modalTwo , modalTwoTogggle} : any) => {
  
    return (
      <Col xl="4" md="6" className="custom-alert text-center">
        <div className="card-wrapper  h-100">
          <div className="Mofi-demo-img">
            {/* <CommonMofiModalTitle heading="Modal 2 -" subHeading="Result Modal" text="Example of Mofi login form." /> */}
            {/* <div className="overflow-hidden">
              <Button color="primary" className="mx-auto mt-3" onClick={modalTwoTogggle}>Login</Button>
            </div> */}
            <CommonModal centered modalBodyClassName="social-profile text-start" isOpen={modalTwo} toggle={modalTwoTogggle}>
              <div className="modal-toggle-wrapper">
                {/* <h3>Sign In / Sign Up with Mobile</h3>
                <p>Fill in your information below to continue.</p> */}
                <StaticForm staticModalToggle={modalTwoTogggle} />
              </div>
            </CommonModal>
          </div>
        </div>
      </Col>
    );
  };
  

  const StaticForm: React.FC<StaticModalToggleProp> = ({ staticModalToggle }) => {
    const [formData, setFormData] = useState({
      mobile: '',
      otp: '', // Store OTP as a single string
    });
  
    console.log("the form data",formData);
    
    const [showOtp, setShowOtp] = useState(false);
    const [showVerifyButton, setShowVerifyButton] = useState(false);
  
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  
    const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/[^0-9]/g, ''); // Ensure only numbers are entered
      setFormData((prevData) => ({
        ...prevData,
        mobile: value,
      }));
  
      if (value.length === 10) {
        setShowOtp(true);
      } else {
        setShowOtp(false);
        setShowVerifyButton(false);
      }
    };
  
    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const { value } = e.target;
      if (/^[0-9]$/.test(value) || value === '') {
        const newOtp = formData.otp.split(''); // Convert the OTP string to an array
        newOtp[index] = value;
        setFormData((prevData) => ({
          ...prevData,
          otp: newOtp.join(''), // Join the array back into a string
        }));
  
        // Move focus to the next input if a digit is entered
        if (value && index < inputRefs.current.length - 1) {
          inputRefs.current[index + 1]?.focus();
        }
      }
    };
  
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      if (e.key === 'Backspace' && !formData.otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    };

    const signInButton = () => {
      sessionStorage.setItem('user_id', JSON.stringify(1));
      // setIsLoggedIn(true)
      staticModalToggle();
  
    }

    const maxLength = 1;
  
    return (
      <Col>
        <Form>
          <Row className="g-3">
            <p style={{ color: 'white', marginTop: '24px', marginBottom: '8px' }}>
              Sign In / Sign Up with Mobile
            </p>
            <Col sm="12" style={{ margin: '0' }}>
              <div className="gap-2" style={{ display: 'flex', alignItems: 'center' }}>
                <FormGroup floating style={{ flex: '1 1 20%' }}>
                  <Input
                    disabled
                    type="text"
                    placeholder="+91"
                    style={{ textAlign: 'center', paddingLeft: '0' }}
                  />
                  <Label check style={{ position: 'absolute', margin: '0' }}>
                    <i className="flag-icon flag-icon-in" style={{ fontSize: '26px' }}></i>
                  </Label>
                </FormGroup>
                <FormGroup floating style={{ flex: '1 1 75%' }}>
                  <Input
                    type="text"
                    onChange={handleMobileChange}
                    placeholder="Mobile"
                    name="mobile"
                    value={formData.mobile}
                  />
                  <Label check>Mobile</Label>
                </FormGroup>
              </div>
              <p style={{ color: 'white', marginTop: '0', marginBottom: '16px' }}>
                Example: 9847098470 (10 Digit only)
              </p>
            </Col>
            {showOtp && (
              <Col sm="12" style={{ margin: '0' }}>
                <p style={{ color: 'white', marginTop: '0', marginBottom: '8px' }}>
                  Enter OTP sent to your Mobile
                </p>
                <FormGroup floating className="">
                  <div className="six-digit-input">
                    {Array(6).fill('').map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={maxLength}
                        className="digit-input"
                        value={formData.otp[index] || ''}
                        ref={(el : any) => (inputRefs.current[index] = el)}
                        onChange={(e) => handleOtpChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                      />
                    ))}
                  </div>
                </FormGroup>
              </Col>
            )}
            {formData.otp.length === 6 &&
            <Link href={'/acheck/home'}>

            <Col xs="12" style={{padding : '0', margin : '0'}}>
              <Button
                className="btnStyles"
                color="primary"
                type="submit"
                onClick={signInButton}
                disabled={!formData.mobile || formData.otp.length < 6}
                >
                Verify<span><i className="fa fa-angle-right" style={{ marginLeft: '1rem' }}></i></span>
              </Button>
            </Col>
                    </Link>
              }
          </Row>
        </Form>
      </Col>
    );
  };
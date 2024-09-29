import React, { useRef, useState } from 'react';
// import { useModal } from '@/path/to/ModalContext';
import { Button, Card, Col, Form, FormGroup, Input, Label, Modal, ModalBody, Row, Toast, ToastBody } from 'reactstrap';
import './homestyle.css'; // Your styles
import { useModal } from '@/Redux/loginModal';
import { StaticModalToggleProp } from '@/Types/UikitsType';
import axios from 'axios';
import { ImagePath } from '@/Constant';
// import CommonModal from '@/Components/UiKits/Modal/Common/CommonModal';

const LoginModal: any = ({showModal , toggleModal} : any) => {
  // const { showModal, toggleModal } = useModal();
  return (
    <Col xl="4" md="6" className="custom-alert text-center">
      {/* <div className="card-wrapper  h-100"> */}
        {/* <div className="Mofi-demo-img"> */}
          {/* <CommonMofiModalTitle heading="Modal 2 -" subHeading="Result Modal" text="Example of Mofi login form." /> */}
          {/* <div className="overflow-hidden">
            <Button color="primary" className="mx-auto mt-3" onClick={modalTwoTogggle}>Login</Button>
          </div> */}
          <CommonModal centered modalBodyClassName="social-profile text-start" isOpen={showModal} toggle={toggleModal}>
            <div className="modal-toggle-wrapper">
              {/* <h3>Sign In / Sign Up with Mobile</h3>
              <p>Fill in your information below to continue.</p> */}
              <StaticForm staticModalToggle={toggleModal} />
            </div>
          </CommonModal>
        {/* </div> */}
      {/* </div> */}
    </Col>
  );
};

export default LoginModal;


interface CommonModalProps {
  isOpen: boolean;
  toggle: () => void;
  centered?: boolean;
  modalBodyClassName?: string;
  children: React.ReactNode;
}

const CommonModal: React.FC<CommonModalProps> = ({
  isOpen,
  toggle,
  centered,
  modalBodyClassName,
  children
}) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered={centered} className="custom-modal">
      {/* <ModalHeader toggle={toggle}>Modal Header</ModalHeader> */}
      <ModalBody className={modalBodyClassName}>
        {children}
      </ModalBody>
    </Modal>
  );
};


type CountryCode = 'IND' | 'US' | 'UK' | 'CAN';

// Country data mapping with flag classes and codes
const countryData: Record<CountryCode, { code: string; flagClass: string }> = {
  IND: { code: '+91', flagClass: 'flag-icon-in' },
  US: { code: '+1', flagClass: 'flag-icon-us' },
  UK: { code: '+44', flagClass: 'flag-icon-gb' },
  CAN: { code: '+1', flagClass: 'flag-icon-ca' },
};




const StaticForm: React.FC<StaticModalToggleProp> = ({ staticModalToggle }) => {
  const [formData, setFormData] = useState<{
    mobile: string;
    otp: string;
    country: CountryCode;
    countryCode: string;
  }>({
    mobile: '',
    otp: '',
    country: 'IND', // Default country (India)
    countryCode: countryData['IND'].code, // Default country code
  });

  const [showOtp, setShowOtp] = useState(false);
  const [showVerifyButton, setShowVerifyButton] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // Track if the OTP button has been clicked
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [open, setOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  console.log("the form data", formData);

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Ensure only numbers are entered
    setFormData((prevData) => ({
      ...prevData,
      mobile: value,
    }));

    // Show the "Send OTP" button if mobile is 10 digits
    if (value.length === 10) {
      setOtpSent(false); // Reset OTP sent status if mobile number changes
    } else {
      setShowOtp(false);
      setShowVerifyButton(false);
      setOtpSent(false); // Reset OTP state when number is invalid
    }
  };

  const handleCountryChange = (e: React.ChangeEvent<any>) => {
    const selectedCountry = e.target.value as CountryCode;
    setFormData({
      ...formData,
      country: selectedCountry,
      countryCode: countryData[selectedCountry].code, // Update the country code
    });
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

  const verifyOtp = async () => {
    // setOtpSent(true); // Show OTP field once "Send OTP" button is clicked
    // setShowOtp(true);
    try {
      const reqBody = {
        mobile: formData.countryCode + formData.mobile,
      };
      console.log("the request body,",reqBody);
      
      const response = await axios.get(`/api/login?otp=${formData.otp}&mobile=${encodeURIComponent(reqBody.mobile)}`);
      console.log("tje responsein the verify",response.data);
      

      if(response.data.error){
        console.log("the response error");
        
            setToastMessage('OTP is incorrect, Please try again');
            setOpen(true);
      
            setTimeout(() => {
              setOpen(false);
            }, 5000);
      }
      else {

      // setOtpSent(true); // Show OTP field once "Send OTP" button is clicked
  // setShowOtp(true);
      sessionStorage.setItem('user_id', JSON.stringify(response.data[0].id));
      sessionStorage.setItem('user_data', JSON.stringify(response.data[0]));
      const event = new Event('sessionUpdate');
      window.dispatchEvent(event);

      staticModalToggle();
      if (response.data[0].profile_complete === false) {
        window.location.href = '/labs/profile';
      }
    }
    } catch (error) {
      console.error('Error fetching Login:', error);
    }
  };

  const signInButton = async () => {
    // if (formData.otp === '1234') {
      try {
        const reqBody = {
          mobile: formData.countryCode + formData.mobile,
        };
        console.log("the request body,",reqBody);
        
        const response = await axios.post('/api/login', reqBody);

        setOtpSent(true); // Show OTP field once "Send OTP" button is clicked
    setShowOtp(true);
        // sessionStorage.setItem('user_id', JSON.stringify(response.data[0].id));
        // sessionStorage.setItem('user_data', JSON.stringify(response.data[0]));
        // const event = new Event('sessionUpdate');
        // window.dispatchEvent(event);

        // staticModalToggle();
        // if (response.data[0].profile_complete === false) {
        //   window.location.href = '/labs/profile';
        // }
      } catch (error) {
        console.error('Error fetching Login:', error);
      }
    // } else {
    //   setToastMessage('OTP is incorrect.');
    //   setOpen(true);

    //   setTimeout(() => {
    //     setOpen(false);
    //   }, 3000);
    // }
  };

  const maxLength = 1;

  return (
    <Col>
      <ColorsSchemes open={open} setOpen={setOpen} message={toastMessage} />
      <Form>
        <Row className="g-3">
          <p style={{ color: 'white', marginTop: '24px', marginBottom: '8px' }}>
            Sign In / Sign Up with Mobile
          </p>
          <Col sm="12" style={{ margin: '0' }}>
            <div className="gap-2" style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '1rem' }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    pointerEvents: 'none',
                  }}
                >
                  <i className={`flag-icon ${countryData[formData.country].flagClass}`} style={{ fontSize: '26px', marginRight: '8px' }}></i>
                </div>
                <Input
                  type="select"
                  value={formData.country}
                  onChange={handleCountryChange}
                  style={{
                    height: '3.5rem',
                    paddingLeft: '60px',
                  }}
                >
                  {Object.keys(countryData).map((country) => (
                    <option key={country} value={country}>
                      {countryData[country as CountryCode].code}
                    </option>
                  ))}
                </Input>
              </div>

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
                  {Array(4).fill('').map((_, index) => (
                    <input
                    key={index}
                    type="number"
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

          {!otpSent && formData.mobile.length === 10 && (
            <Col sm="12">
              <Button
              style={{marginTop : '5rem'}}
                className="btnStyles"
                color="primary"
                onClick={signInButton}
              >
                Send OTP<span><i className="fa fa-angle-right" style={{ marginLeft: '1rem' }}></i></span>
              </Button>
            </Col>
          )}
          {formData.otp.length === 4 && (
            <Col xs="12" style={{ padding: '0', margin: '0' }}>
              <Button
                className="btnStyles"
                color="primary"
                onClick={verifyOtp}
                disabled={!formData.mobile || formData.otp.length < 4}
              >
                Verify<span><i className="fa fa-angle-right" style={{ marginLeft: '1rem' }}></i></span>
              </Button>
            </Col>
          )}
        </Row>
      </Form>
    </Col>
  );
};


const ColorsSchemes = ( {open , setOpen , message , toasterColorContent} : any ) => {
  
  // console.log("toaster content",toasterColorContent,toasterContent)
  return (
    <Col md="6">
      <Card style={{boxShadow : 'none', margin : '0'}}>
          {/* {toasterColorContent} */}
        
        {/* <CommonCardHeader title={ColorsScheme} span={ColorSchema} /> */}
        {/* <CardBody className="toast-rtl colors-schemes"> */}
          <Toast fade className={`default-show-toast align-items-center text-light bg-danger border-0`}
           isOpen={open}
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
  <i className="fa fa-thumbs-up"></i>
  {/* <img style={{height:'15px', marginLeft : '1rem'}} className="img-fluid table-avtar" src={`${ImagePath}/Thumbs-up.png`} alt="user image" /> */}
  <ToastBody className="">{message}</ToastBody>
  {/* <Button close className="btn-close-white me-2 m-auto" onClick={() => setOpen(false)}></Button> */}
</div>

          </Toast>
        {/* </CardBody> */}
      </Card>
    </Col>
  );
};



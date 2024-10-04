import React, { useRef, useState } from 'react';
// import { useModal } from '@/path/to/ModalContext';
import { Button, Card, Col, Form, FormGroup, Input, Label, Modal, ModalBody, Row, Toast, ToastBody } from 'reactstrap';
import './homestyle.css'; // Your styles
import { useModal } from '@/Redux/loginModal';
// import { StaticModalToggleProp } from '@/Types/UikitsType';
import axios from 'axios';
import { ImagePath } from '@/Constant';
// import CommonModal from '@/Components/UiKits/Modal/Common/CommonModal';

const LoginModal: any = ({showModal , toggleModal, routePage} : any) => {
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
              <StaticForm staticModalToggle={toggleModal} routePage={routePage}/>
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


type CountryCode = 
  'IND' | 'US' | 'UK' | 'CAN' | 'AUS' | 'DEU' | 'FRA' | 'JPN' | 'CHN' | 'BRA' | 
  'RUS' | 'SAU' | 'UAE' | 'SGP' | 'KOR' | 'ZAF' | 'MEX' | 'ITA' | 'ESP' | 'TUR' |
  'EGY' | 'ARG' | 'IDN' | 'NGA' | 'ISR' | 'SWE' | 'NOR' | 'CHE' | 'NLD' | 'BEL' |
  'THA' | 'VNM' | 'PHL' | 'MYS' | 'PAK' | 'BGD' | 'POL' | 'UKR' | 'NZL' | 'IRN' |
  'IRQ' | 'OMN' | 'QAT' | 'KWT' | 'JOR' | 'CHL' | 'COL' | 'PER' | 'KEN' | 'ETH' |
  'GHA' | 'VEN';


// Country data mapping with flag classes and codes
const countryData: Record<CountryCode, { code: string; flagClass: string; mobileLength: number }> = {
  IND: { code: '+91', flagClass: 'flag-icon-in', mobileLength: 10 },
  US: { code: '+1', flagClass: 'flag-icon-us', mobileLength: 10 },
  UK: { code: '+44', flagClass: 'flag-icon-gb', mobileLength: 10 },
  CAN: { code: '+1', flagClass: 'flag-icon-ca', mobileLength: 10 },
  AUS: { code: '+61', flagClass: 'flag-icon-au', mobileLength: 9 },
  DEU: { code: '+49', flagClass: 'flag-icon-de', mobileLength: 11 },
  FRA: { code: '+33', flagClass: 'flag-icon-fr', mobileLength: 9 },
  JPN: { code: '+81', flagClass: 'flag-icon-jp', mobileLength: 10 },
  CHN: { code: '+86', flagClass: 'flag-icon-cn', mobileLength: 11 },
  BRA: { code: '+55', flagClass: 'flag-icon-br', mobileLength: 11 },
  RUS: { code: '+7', flagClass: 'flag-icon-ru', mobileLength: 10 },
  SAU: { code: '+966', flagClass: 'flag-icon-sa', mobileLength: 9 },
  UAE: { code: '+971', flagClass: 'flag-icon-ae', mobileLength: 9 },
  SGP: { code: '+65', flagClass: 'flag-icon-sg', mobileLength: 8 },
  KOR: { code: '+82', flagClass: 'flag-icon-kr', mobileLength: 10 },
  ZAF: { code: '+27', flagClass: 'flag-icon-za', mobileLength: 9 },
  MEX: { code: '+52', flagClass: 'flag-icon-mx', mobileLength: 10 },
  ITA: { code: '+39', flagClass: 'flag-icon-it', mobileLength: 9 },
  ESP: { code: '+34', flagClass: 'flag-icon-es', mobileLength: 9 },
  TUR: { code: '+90', flagClass: 'flag-icon-tr', mobileLength: 10 },
  EGY: { code: '+20', flagClass: 'flag-icon-eg', mobileLength: 10 },
  ARG: { code: '+54', flagClass: 'flag-icon-ar', mobileLength: 10 },
  IDN: { code: '+62', flagClass: 'flag-icon-id', mobileLength: 10 },
  NGA: { code: '+234', flagClass: 'flag-icon-ng', mobileLength: 10 },
  ISR: { code: '+972', flagClass: 'flag-icon-il', mobileLength: 9 },
  SWE: { code: '+46', flagClass: 'flag-icon-se', mobileLength: 9 },
  NOR: { code: '+47', flagClass: 'flag-icon-no', mobileLength: 8 },
  CHE: { code: '+41', flagClass: 'flag-icon-ch', mobileLength: 9 },
  NLD: { code: '+31', flagClass: 'flag-icon-nl', mobileLength: 9 },
  BEL: { code: '+32', flagClass: 'flag-icon-be', mobileLength: 9 },
  THA: { code: '+66', flagClass: 'flag-icon-th', mobileLength: 9 },
  VNM: { code: '+84', flagClass: 'flag-icon-vn', mobileLength: 9 },
  PHL: { code: '+63', flagClass: 'flag-icon-ph', mobileLength: 10 },
  MYS: { code: '+60', flagClass: 'flag-icon-my', mobileLength: 9 },
  PAK: { code: '+92', flagClass: 'flag-icon-pk', mobileLength: 10 },
  BGD: { code: '+880', flagClass: 'flag-icon-bd', mobileLength: 10 },
  POL: { code: '+48', flagClass: 'flag-icon-pl', mobileLength: 9 },
  UKR: { code: '+380', flagClass: 'flag-icon-ua', mobileLength: 9 },
  NZL: { code: '+64', flagClass: 'flag-icon-nz', mobileLength: 9 },
  IRN: { code: '+98', flagClass: 'flag-icon-ir', mobileLength: 10 },
  IRQ: { code: '+964', flagClass: 'flag-icon-iq', mobileLength: 10 },
  OMN: { code: '+968', flagClass: 'flag-icon-om', mobileLength: 8 },
  QAT: { code: '+974', flagClass: 'flag-icon-qa', mobileLength: 8 },
  KWT: { code: '+965', flagClass: 'flag-icon-kw', mobileLength: 8 },
  JOR: { code: '+962', flagClass: 'flag-icon-jo', mobileLength: 9 },
  CHL: { code: '+56', flagClass: 'flag-icon-cl', mobileLength: 9 },
  COL: { code: '+57', flagClass: 'flag-icon-co', mobileLength: 10 },
  PER: { code: '+51', flagClass: 'flag-icon-pe', mobileLength: 9 },
  KEN: { code: '+254', flagClass: 'flag-icon-ke', mobileLength: 10 },
  ETH: { code: '+251', flagClass: 'flag-icon-et', mobileLength: 9 },
  GHA: { code: '+233', flagClass: 'flag-icon-gh', mobileLength: 9 },
  VEN: { code: '+58', flagClass: 'flag-icon-ve', mobileLength: 10 },
};





export interface StaticModalToggleProp {
  staticModalToggle: () => void;
  routePage : any
}

const StaticForm: React.FC<StaticModalToggleProp> = ({ staticModalToggle , routePage } : any) => {
  
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

  // const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value.replace(/[^0-9]/g, ''); // Ensure only numbers are entered
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     mobile: value,
  //   }));

  //   // Show the "Send OTP" button if mobile is 10 digits
  //   if (value.length === 10) {
  //     setOtpSent(false); // Reset OTP sent status if mobile number changes
  //   } else {
  //     setShowOtp(false);
  //     setShowVerifyButton(false);
  //     setOtpSent(false); // Reset OTP state when number is invalid
  //   }
  // };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, ''); // Ensure only numbers are entered
    const countryMobileLength = countryData[formData.country].mobileLength; // Get the mobile length for the selected country
    
    setFormData((prevData) => ({
      ...prevData,
      mobile: value,
    }));
  
    // Show the "Send OTP" button if mobile is valid based on country-specific length
    if (value.length === countryMobileLength) {
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
        mobile: formData.mobile,
        country_code: formData.countryCode,
        // country: formData.country,
      };
      console.log("the request body,",reqBody);
      
      const response = await axios.get(`/api/login?otp=${formData.otp}&mobile=${reqBody.mobile}&country_code=${encodeURIComponent(reqBody.country_code)}`);
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
      if (routePage === 'home' && (response.data[0].profile_complete) === false) {
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
          mobile: formData.mobile,
          country_code: formData.countryCode,
          country: formData.country,
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

              <FormGroup floating style={{ flex: '1 1 100%' }}>
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
              Example: 9847098470 ({countryData[formData.country].mobileLength} Digit only)
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

{!otpSent && formData.mobile.length === countryData[formData.country].mobileLength && (
  <Col sm="12">
    <Button
      style={{ marginTop: '5rem' }}
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



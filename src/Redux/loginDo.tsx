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


const StaticForm: React.FC<StaticModalToggleProp> = ({ staticModalToggle }) => {
  const [formData, setFormData] = useState({
    mobile: '',
    otp: '', // Store OTP as a single string
  });

  const [showOtp, setShowOtp] = useState(false);
  const [showVerifyButton, setShowVerifyButton] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [open, setOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

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

  const signInButton = async () => {
    if (formData.otp === '123456') {
      try {
        const reqBody = {
          mobile: '+91' + formData.mobile,
        };
        const response = await axios.post('/api/login', reqBody);
        // console.log('the response from the login', response.data);

        sessionStorage.setItem('user_id', JSON.stringify(response.data[0].id));
        sessionStorage.setItem('user_data', JSON.stringify(response.data[0]));
        const event = new Event('sessionUpdate');
        window.dispatchEvent(event);

        // setToastMessage('Congrats! Login successful.');
        // setOpen(true);
        staticModalToggle();

        // Close the modal after a short delay
        // setTimeout(() => {
        //   setOpen(false);
        // }, 3000);
         // Adjust the delay as needed
      } catch (error) {
        console.error('Error fetching Login:', error);
      }
    } else {
      setToastMessage('OTP is incorrect.');
      setOpen(true);

      // Close the modal and reset the toast
      setTimeout(() => {
        setOpen(false);
        // staticModalToggle();
      }, 3000); // Adjust the delay as needed
    }
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
          {formData.otp.length === 6 && (
            <Col xs="12" style={{ padding: '0', margin: '0' }}>
              <Button
                className="btnStyles"
                color="primary"
                onClick={signInButton}
                disabled={!formData.mobile || formData.otp.length < 6}
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

const ColorsSchemes = ({ open, setOpen, message }: any) => {
  return (
    <Col md="6">
      <Card style={{margin : '0'}}>
        <Toast
          fade
          className="default-show-toast align-items-center text-light border-0"
          isOpen={open}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1050,
            margin: '0 auto',
            width: '100%',
            height: '4rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background : 'orangered',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <img
              style={{ height: '15px', marginLeft: '1rem' }}
              className="img-fluid table-avtar"
              src={`${ImagePath}/Thumbs-up.png`}
              alt="user image"
            />
            <ToastBody>{message}</ToastBody>
          </div>
        </Toast>
      </Card>
    </Col>
  );
};



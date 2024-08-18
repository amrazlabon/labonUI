import React from 'react';
// import { useModal } from '@/path/to/ModalContext';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import './homestyle.css'; // Your styles
import { useModal } from '@/Redux/loginModal';
import CommonModal from '@/Components/UiKits/Modal/Common/CommonModal';

const LoginModal: React.FC = () => {
  const { showModal, toggleModal } = useModal();
  const [formData, setFormData] = React.useState({
    mobile: '',
    otp: '',
  });
  const [showOtp, setShowOtp] = React.useState(false);
  const [showVerifyButton, setShowVerifyButton] = React.useState(false);
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setFormData(prevData => ({
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
      const newOtp = formData.otp.split('');
      newOtp[index] = value;
      setFormData(prevData => ({
        ...prevData,
        otp: newOtp.join(''),
      }));
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
    toggleModal();
  };

  const maxLength = 1;

  return (
    <CommonModal centered modalBodyClassName="social-profile text-start" isOpen={showModal} toggle={toggleModal}>
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
            }
          </Row>
        </Form>
      </Col>
    </CommonModal>
  );
};

export default LoginModal;

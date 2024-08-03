import React from 'react';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';

interface SignInModalProps {
  isOpen: boolean;
  toggle: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Sign In</ModalHeader>
      <ModalBody>
        {/* Sign In Form Here */}
      </ModalBody>
    </Modal>
  );
};

export default SignInModal;

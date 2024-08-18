import React, { createContext, useState, useContext } from 'react';

interface ModalContextType {
  showModal: boolean;
  toggleModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  console.log("check if this is working fine");
  
  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <ModalContext.Provider value={{ showModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
    console.log("the modal is opening");
    
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

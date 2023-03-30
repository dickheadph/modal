//used createContext to handle and manage both states and arrow functions
import { createContext, useState } from 'react';

const ModalContext = createContext();
export const ModalProvider = (props) => {
  //   const [hovered, setHovered] = useState(false);
  const [modal, setModal] = useState(false);
  const [agree, setAgree] = useState(false);

  const showModal = () => {
    setModal(true);
  };
  const onProceed = () => {
    setAgree(true);
    setTimeout(() => {
      setAgree(false);
      setModal(false);
      setAgree(true);
    }, 2000);
  };

  const onCancel = () => {
    setModal(false);
    };
    
  return (
    <ModalContext.Provider
      value={{ modal, showModal, agree, onProceed, onCancel }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;

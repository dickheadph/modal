import { useContext } from 'react';
import ModalContext from '../context/ModalProvider';

const Modal = () => {
    
  const { agree, onProceed, onCancel } = useContext(ModalContext);

  return (
    <div className='absolute inset-0  bg-[#0008] z-50'>
      <div className='m-5 relative bg-white h-[250px] mt-[40%] lg:mt-[15%] lg:mx-[25%] rounded-md p-3'>
        {!agree ? (
          <>
            <h3 className='text-center font-semibold'>
              Are you sure you want to cancel your subscription?
            </h3>
            <div className='text-center m-4 space-x-8'>
              <button className='btn' onClick={onProceed}>
                Yes
              </button>
              <button className='btn bg-green-500 text-white' onClick={onCancel}>
                No
              </button>
            </div>
          </>
        ) : (
          <h3 className='text-center font-semibold'>
            Subscription successfully cancelled!
          </h3>
        )}
      </div>
    </div>
  );
};

export default Modal;

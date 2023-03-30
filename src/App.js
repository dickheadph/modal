import { useState, useContext } from 'react';
import Image from './assets/netflixlogo.jpeg';
import Modal from './components/modal';
import ModalContext from './context/ModalProvider';
function App() {
  const [hovered, setHovered] = useState(false);

  const { modal, showModal, agree } = useContext(ModalContext);

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-screen'>
      {modal && <Modal />}
      <div className='absolute bg-white m-5 rounded-md p-3 shadow-xl'>
        <p className='text-center'>Your Subscriptions</p>
        <div className='flex lg:flex-wrap'>
          <img alt='logo' src={Image} className='h-[130px] my-2' />
          <div className='flex flex-wrap ml-2'>
            <>
              <th>Subscription</th>
              <tr>$49.99/month</tr>
              <th>Next Rebill</th>
              <tr>December 13, 2020</tr>
              <th>Action</th>
            </>
          </div>
        </div>
        <button
          //
          className={`w-full border-[1px] rounded-md p-2 ${
            hovered ? 'bg-red-500 text-white' : 'bg-white'
          }`}
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
          onClick={showModal}
          disabled={agree ? true : false}>
          {agree ? 'Cancelled' : 'Cancel'}
        </button>
      </div>
    </div>
  );
}

export default App;

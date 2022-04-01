import React, { useEffect, useState } from 'react';
import './App.css';
import LogRocket from 'logrocket';


import Viewer from './Viewer/';



import Modal from './components/Modal'


// LogRocket.init('59lkkw/beto');



export default function App() {

  const [show, setShow] = useState(false);



  // const openModal = () => {
  //   setConfirmModal(true)
  // }
  // const testing = () => {
  //   console.log(modalShow)
  //   setModalShow(true)
  // }
  // // Handle closing confirmation modal
  // const onCloseWindow = () => {
  //   setConfirmModal(false);
  // };

  // retrievingSelectors();

  return (
    <div className="App">
      {/* <h1>TESTINGF </h1> */}
      {/* <button onClick={() => setShow(true)}>Show Modal</button> */}
      <Modal title="My Modal" onClose={() => setShow(false)} show={show} />


      {/* <iframe
        title="Figma Frame"
        width="100%"
        height="800px"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FXjn3ZT4xK5hg6i0F30thOC%2FLONGEVITY-DESIGN%3Fnode-id%3D0%253A1"
        allowfullscreen
      /> */}
      {/* {confirmModal ?
        <ConfirmationModal onCloseWindow={onCloseWindow} />
        : null
      } */}

      {/* <Button variant="primary" onClick={() => testing()}>
        Launch vertically centered modal
      </Button> */}

      {/* <ConfirmationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}

      <Viewer onClose={() => setShow(true)} />
    </div>
  );
}
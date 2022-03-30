import React, { useEffect, useState } from 'react';
import './App.css';
import { Modal, Button } from "react-bootstrap";

import Viewer from './Viewer/';

import ConfirmationModal from './components/confirmationModal'


// function retrievingSelectors() {
//   // var modal = document.getElementsByClassName("modal");
//   var modal = document.getElementsByClassName("modal")
//   var trigger = document.getElementsByClassName("trigger");
//   var closeButton = document.getElementsByClassName("close-button");

//   console.log(modal)

//   function toggleModal() {
//     modal.className.toggleModal();
//     // modal.classList.toggle("show-modal");
//   }

//   function windowOnClick(event) {
//     if (event.target === modal) {
//       toggleModal();
//     }
//   }


//   // trigger.addEventListener("click", toggleModal);
//   // closeButton.addEventListener("click", toggleModal);
//   window.addEventListener("click", windowOnClick);
// }

export default function App() {

  const [modalShow, setModalShow] = useState(false);



  // const openModal = () => {
  //   setConfirmModal(true)
  // }
  const testing = () => {
    console.log(modalShow)
    setModalShow(true)
  }
  // // Handle closing confirmation modal
  // const onCloseWindow = () => {
  //   setConfirmModal(false);
  // };

  // retrievingSelectors();

  return (
    <div className="App">
      {/* <div class="modal">
          <div class="modal-content">
            <span class="close-button">×</span>
            <div id="modal-iframe">
              <p>Modal Dummy Text Dolor Ipsum Babylon!</p>
            </div>
          </div>
        </div> */}
      {/* <iframe id="iframe_custom" >
        </iframe> */}

      {/* {confirmModal ?
        <ConfirmationModal onCloseWindow={onCloseWindow} />
        : null
      } */}

      <Button variant="primary" onClick={() => testing()}>
        Launch vertically centered modal
      </Button>

      <ConfirmationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <Viewer />
    </div>
  );
}
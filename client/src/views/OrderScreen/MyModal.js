import "./myModal.css"
import {Modal} from 'react-bootstrap'

import React, { Component,useState } from 'react';
export default function MyModal() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose_withConfirm = () => { 
    
    console.log('Accpeted'); 
    setShow(false);
  }

  const handleShow = () => setShow(true);

  return ( <div >
 
    <Modal show={show} className='modal modal_window' >
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>{"A"}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Imgur_logo.svg/300px-Imgur_logo.svg.png"} className="modal-image img-fluid" />
          <p>{"AAAAAAAAAAAAA"}</p>
        </Modal.Body>

        <Modal.Footer>
            <div className="btn-white accpet" onClick={ handleClose}>CLOSE</div>
            <div className="btn " onClick={ handleClose_withConfirm }>Accept</div>

        </Modal.Footer>
      </Modal>
    </div>
  )
}

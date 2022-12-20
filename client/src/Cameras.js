import React, { useState } from "react";
import "./App.css";
import { dummyData } from "./data";
import { axios } from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const Cameras = () => {
  return (
    <>
      <Home />
      <div className="camera-container">
        {dummyData.map((data, key) => {
          return (
            <div key={key}>
              <Camera key={key} company={data.company} ticker={data.ticker} />
            </div>
          );
        })}
      </div>
    </>
  );
};

const Home = () => {
  return (
    <header className="header">
      <h2>Your Camera List Tracker</h2>
    </header>
  );
};

function Camera({ company, ticker }) {
  const [show, setShow] = useState(false);
  const [camera, setCamera] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (!company) return <div />;
  return (
    <>
      <h5>{company}</h5>
      <Button variant="primary" onClick={handleShow}>
        Fetch Cameras
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Camera Types</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ticker}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Camera;

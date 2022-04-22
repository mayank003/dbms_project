import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Pizza({ pizza }) {
  const [quantity, setquantity] = useState(1);
  const [varient, size] = useState("small");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded">
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          src={pizza.image}
          alt="unable to load"
          className="img-fliud"
          style={{ height: "200px", width: "290px" }}
        />
      </div>

      <div className="flex-container ">
        <div className="w-100 m-2">
          <p style={{ marginBottom: "0px" }}>Varients</p>
          <select
            className="form-control round"
            value={varient}
            onChange={(e) => {
              size(e.target.value);
            }}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-2">
          <p style={{ marginBottom: "0px" }}>Quantity</p>
          <select
            className="form-control round"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((no) => {
              return <option value={no + 1}>{no + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container ">
        <div className="w-50">
          <p style={{ marginTop: "10px" }}>
            Price: {pizza.prices[0][varient] * quantity} Rs/-
          </p>
        </div>
        <div>
          <button style={{ marginTop: "10px" }} className="btn">
            Add To Cart
          </button>
        </div>
      </div>

      <Modal show={show} pizza={pizza}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            alt="unable to load"
            className="img-fliud"
            style={{ height: "100%", width: "100%" }}
          />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

import "../components/components.css";
import React, { useState } from "react";
import "./Styles/AddProduct.css";

export default function AddProduct() {
  const [store, setStore] = useState("");
  const [department, setDepartment] = useState("");
  const [size, setSize] = useState("");
  const [type, setType] = useState("");

  function setProducts(store, department, size, type) {
    fetch("http://localhost:3001/product/add", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        store: store,
        dept: department,
        size: size,
        type: type,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          window.location.href = "/inventory";
        } else {
          alert("Please Add a Valid Product");
        }
      })
  }
  return (
    <>
      <div className="addContainer">
        <h3>Add Products to Inventory</h3>
        <div className="inputContainer">
          <input
            className="input inputBlock"
            type="number"
            placeholder="Store"
            onChange={(e) => setStore(e.target.value)}
          />
          <input
            className="input inputBlock"
            type="number"
            placeholder="Department"
            onChange={(e) => setDepartment(e.target.value)}
          />
          <input
            className="input inputBlock"
            type="number"
            placeholder="Size"
            onChange={(e) => setSize(e.target.value)}
          />
          <input
            className="input inputBlock"
            type="number"
            placeholder="Type"
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <button
          className="Addbutton"
          onClick={() => setProducts(store, department, size, type)}
        >
          Submit Product
        </button>
      </div>
    </>
  );
}

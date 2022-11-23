import React, { useState } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const initialState = {
    name: "",
    email: "",
  };

  const clearState = () => {
    setData({ ...initialState });
  };

  const handleInputChange = (event) => {
    if (data.name.length + 1 < 3) {
      setMessage("Tu nombre debe tener al menos 3 caracteres");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("sending data..." + data.name + " " + data.email);
    clearState();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <>
      <div className="contact">
        <div className="wrap">
          <h1>Contact</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="name"
              onChange={handleInputChange}
              name="name"
              value={data.name}
            />
            <input
              type="email"
              placeholder="email"
              onChange={handleInputChange}
              name="email"
              value={data.email}
            />
            <button type="submit" disabled={btnDisabled}>
              Enviar
            </button>
          </form>
          {message}
        </div>
      </div>
      </>
  );
};

export default Contact;

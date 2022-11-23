import React, { useState, useEffect } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(true);
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

  useEffect(() => {
    if (data.name.length < 3) {
      setMessage("Tu nombre debe tener al menos 3 caracteres");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
  }, [data]);

  const handleInputChange = (event) => {
    // if (data.name.length + 1 < 3) {
    //   setMessage("Tu nombre debe tener al menos 3 caracteres");
    //   setBtnDisabled(true);
    // } else {
    //   setMessage(null);
    //   setBtnDisabled(false);
    // }

    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("sending data..." + data.name + " " + data.email);
    localStorage.setItem("user", JSON.stringify(data));
    clearState();
    setTimeout(() => {
      navigate("/");
    }, 1000);
    setVisible(false);
  };

  return (
    <>
      <div className="contact">
        <div className="wrapContact">
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
          <p>{visible ? message : "Redireccionandote al Home..."}</p>
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197293.724019207!2d-0.5019392151834063!3d39.40796612298359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4cf0efb06f%3A0xb4a351011f7f1d39!2sValencia!5e0!3m2!1ses-419!2ses!4v1669209549068!5m2!1ses-419!2ses"
            width="99%"
            height="350"
            align="center"
            style={{ test: "border:0;" }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;

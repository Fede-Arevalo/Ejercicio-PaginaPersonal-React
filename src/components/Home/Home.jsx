import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="wrap">
        <div className="image-bio"></div>

        <div className="text">
          <h1>Biografía</h1>
          <p>
            Soy Diseñador Gráfico y estudiante de Desarrollo Full Stack en The
            Bridge | Digital Talent Acelerator.
          </p>
          <p>
            Me apasionan las metodologías ágiles aplicadas a los entornos de
            trabajo.
          </p>
          <h2>Tecnologías</h2>
          <p>
            JavaScript en MERN Stack | React & Redux & Context | Node.JS |
            Express
            <br />
            MongoDB (Mongoose) | MySQL (Sequelize)
          </p>
        </div>

        <hr width="100%" />

        <div className="badges">
          <a href="https://api.badgr.io/public/assertions/9yiNmjlTT-mhYuITZ5fiDg">
            <img
              width="100px"
              alt="HTML"
              src="https://api.badgr.io/public/assertions/9yiNmjlTT-mhYuITZ5fiDg/image"
            ></img>
          </a>

          <a href="https://api.badgr.io/public/assertions/-NRAEdxJQmCLAtmBEj2hkQ">
            <img
              width="100px"
              alt="CSS"
              src="https://api.badgr.io/public/assertions/-NRAEdxJQmCLAtmBEj2hkQ/image"
            ></img>
          </a>

          <a href="https://api.badgr.io/public/assertions/yNljryIRQOSNpKuXhHtaBg">
            <img
              width="100px"
              alt="JavaScript"
              src="https://api.badgr.io/public/assertions/yNljryIRQOSNpKuXhHtaBg/image"
            ></img>
          </a>

          <a href="https://api.badgr.io/public/assertions/QZhRdCldRgC44l40P7WczA">
            <img
              width="100px"
              alt="SQL"
              src="https://api.badgr.io/public/assertions/QZhRdCldRgC44l40P7WczA/image"
            ></img>
          </a>

          <a href="https://api.badgr.io/public/assertions/i4tktYzFT5amfisPELWPnA">
            <img
              width="100px"
              alt="Node.JS"
              src="https://api.badgr.io/public/assertions/i4tktYzFT5amfisPELWPnA/image"
            ></img>
          </a>

          <a href="https://api.badgr.io/public/assertions/i4tktYzFT5amfisPELWPnA">
            <img
              width="100px"
              alt="Express"
              src="https://api.badgr.io/public/assertions/3pdQ0hqvSMebAzwi6MzpiA/image"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

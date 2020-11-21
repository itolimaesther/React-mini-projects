import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import CssLogo from "./images/css_logo.png";
import HtmlLogo from "./images/html_logo.png";
import JsLogo from "./images/js_logo.png";
import ReactLogo from "./images/react_logo.png";

const Css = () => {
  return (
    <div>
      <img src={CssLogo} style={{ width: "60%" }} alt="CSS" />
    </div>
  );
};

const Html = () => {
  return (
    <div>
      <img src={HtmlLogo} style={{ width: "50%" }} alt="HTML" />
    </div>
  );
};

const JavaScript = () => {
  return (
    <div>
      <img src={JsLogo} style={{ width: "80%" }} alt="JS" />
    </div>
  );
};

const ReactL = () => {
  return (
    <div>
      <img src={ReactLogo} style={{ width: "80%" }} alt="React" />
    </div>
  );
};



// Hexadecimal color generator
const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const HexaColor = () => {
  const bgColor = hexaColor()
  const styles = {
    marginBottom: '8px',
    borderRadius: '8px',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '20px',
    padding: '20px',
    backgroundColor: `${bgColor}`
  }

  return (
    <div style={styles}>
      {bgColor}
    </div>
  )
};

const Main = () => {
  const technogiesStyles = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    margin: "0 auto",
    width: "85%",
    padding: "20px",
    textAlign: "center",
  };
  
  const techStyles = {
    display: "flex",
    justifyContent: "space-around",
    itemsAlign: "center",
  };
  
  const newsLetterStyles = {
    backgroundColor: "#3bdad95c",
    borderRadius: "8px",
    marginTop: "12px",
    margin: "0 auto",
    width: "85%",
    padding: "20px",
    textAlign: "center",
  };

  const inputStyles = {
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    marginRight: "8px",
  }

  const btnStyles = {
    backgroundColor: "#e65151d1",
    color: "#fff",
    padding: "10px 100px",
    border: "none",
    borderRadius: "6px",
    marginTop: "8px",
  }

  return (
    <main>
      <div style={technogiesStyles}>
        <h1>Front End Technologies</h1>
        <div style={techStyles}>
          <Html />
          <Css />
          <JavaScript />
          <ReactL />
        </div>
      </div>

      <div style={newsLetterStyles}>
        <h2>SUBSCRIBE</h2>
        <p>Signup with your email address to recive news and updates</p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            style={inputStyles}
            type="text"
            placeholder="First name"
          />
          <input
            style={inputStyles}
            type="text"
            placeholder="Last name"
          />
          <input
            style={inputStyles}
            type="email"
            placeholder="email"
          />
        </div>
        <button
          style={btnStyles}
        >
          Subscribe
        </button>
      </div>

      <div style={technogiesStyles}>
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
      </div>
    </main>
  );
};

const App = () => {
  return <Main />;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

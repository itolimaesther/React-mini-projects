import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


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

const App = () => {
  return (
    <div className="container">

    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

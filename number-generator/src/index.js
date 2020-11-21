import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// Numbers Component
const Numbers = ({ numbers }) => {
  const colors = ["green", "red", "yellow"];
  return numbers.map((number) => {
    const primeNumber = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
    let color = "#fff";
    if (number % 2) {
      color = colors[2];
    } 
    else {
      color = colors[0];
    }
    color = primeNumber.indexOf(number) >= 0 ? colors[1] : color;
    return (
      <Number key={number} color={color} number={number}>
        {number}
      </Number>
    );
  });
};

const Number = ({ number, color }) => {
  return <div style={{ backgroundColor: `${color}`, margin:'1px', display:'inline-block', width:'60px', padding:'12px'  }}>{number}</div>;
};

// App component
const App = () => {
  const numbers = [];
  for (let i = 0; i <= 31; i++) {
    numbers.push(i);
  }

  return (
    <div className="container">
      <div style={{display:'flex', flexDirection:'column', width:'60%', margin:'0 auto', textAlign:'center'}}>
        <h1>30 Days of React</h1>
        <p>Number Generator</p>
        <div style={{display:'inline-block', margin:'0 auto', width:'85%'}}>

        <Numbers numbers={numbers} />
        </div>
      </div>
    </div>
  );
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

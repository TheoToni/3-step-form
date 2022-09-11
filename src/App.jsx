import { useState } from "react";
import "./App.css";
import StyledButton, { NormalButton } from "./components/Button";

function App() {
  const [step, setStep] = useState(0);

  function formHandlerNext() {
    setStep((oldvalue) => {
      if (oldvalue < 2) return oldvalue + 1;
    });
  }
  function formHandlerBefore() {
    setStep((oldvalue) => {
      if (oldvalue >= 0) return oldvalue + -1;
    });
  }
  return (
    <div className="App">
      {step == 0 && (
        <div className="welcome">
          <h1>The Future is All About Information</h1>
          <h2>Subscribe for unlimited Experience</h2>
          <StyledButton onClick={formHandlerNext}>Subscribe</StyledButton>
        </div>
      )}
      {step == 1 && (
        <div className="form">
          <input type="text" placeholder="Firstname" />

          <input type="text" placeholder="Lastname" />

          <button onClick={formHandlerNext} className="arrowButton"></button>
          <button
            onClick={formHandlerBefore}
            className="arrowButtonLeft"
          ></button>
        </div>
      )}
      {step == 2 && (
        <div className="end">
          <h2>Thank you for signing UP</h2>
          <p>This is just a demo for learning purpose.</p>
        </div>
      )}
      <p className="info">Created by THEO.JS</p>
    </div>
  );
}

export default App;

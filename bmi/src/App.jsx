import { useState } from "react";

import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmistatus, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const calculatebmi = () => {
    const isValidHeight = /^(0|[1-9]\d*)$/.test(height);
    const isValidWeight = /^(0|[1-9]\d*)$/.test(weight);
    if (isValidHeight && isValidWeight) {
      const heightinMeters = height / 100;
      const bmiValue = weight / (heightinMeters * heightinMeters);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("UnderWeight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Overweight");
      } else {
        setBmiStatus("Obese");
      }
      setErrorMessage("");
    } else {
      setBmi(null);

      setBmiStatus("");

      setErrorMessage(
        "Please enter valid numeric values for height and weight."
      );
    }
  };

  const clearAll = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");

    console.log(height);
    console.log(weight);

    console.log("clearrrr");
  };

  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {errorMessage && <p className="error">{errorMessage}</p>}

          <div className="input-container">
            <label htmlFor="height">Height (cm):</label>
            <input
              type="text"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight (Kg):</label>
            <input
              type="text"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button onClick={calculatebmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>
          {bmi !== null && (
            <div className="result">
              <p>Your BMI is: {bmi}</p>
              <p>Status: {bmistatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";
import { connect } from "react-redux";
import { setDisplay, setResult, clear } from "./actions";
import "./calculator.css";
const Calculator = ({ display, result, setDisplay, setResult, clear }) => {
  const handleButtonClick = (value) => {
    switch (value) {
      case "=":
        try {
          setResult(eval(display));
        } catch (error) {
          setResult("Error");
        }
        break;
      case "C":
        clear();
        break;
      default:
        setDisplay(display + value);
        break;
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <div className="calculator">
      <div className="display">
        <div className="result">{result}</div>
        <div className="input">{display}</div>
      </div>
      <div className="buttons">
        {buttons.map((button, index) => (
          <button key={index} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  display: state.display,
  result: state.result,
  clear: state.result,
});

const mapDispatchToProps = {
  setDisplay,
  setResult,
  clear,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);

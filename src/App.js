import { useState } from "react";

const messages = ["Learn React", "Apply for jobs", "Invest Your New income🤑"];
export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handelPrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function handelNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <div>
      <button
        className="close"
        onClick={() => {
          setIsOpen((is) => !is);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={handelPrevious}
            >
              👈🏿 Previous
            </Button>
            <Button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={handelNext}
            >
              Next 👉🏿
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
function Button({ style, onClick, children }) {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
}

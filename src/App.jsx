import { BtnComponent, Display } from "./components";
import "./index.css";

function App() {
  var displayNumber = 0;
  var previousNumber = 0;
  var isPreviousNumberSet = false;
  var displaySetter = null;
  var lastRegisteredOperation = "";

  const displayChange = (setDisplayFromChild) => {
    displaySetter = setDisplayFromChild;
  };

  const handleOperation = (operation) => {
    switch (operation) {
      case "plus":
        if (isPreviousNumberSet) {
          previousNumber = previousNumber + displayNumber;
          displayNumber = 0;
          lastRegisteredOperation = operation;
          displaySetter(displayNumber);
          isPreviousNumberSet = true;
          console.log(displayNumber, previousNumber);
        } else {
          previousNumber = displayNumber;
          displayNumber = 0;
          lastRegisteredOperation = operation;
          displaySetter(displayNumber);
          isPreviousNumberSet = true;
          console.log(displayNumber, previousNumber);
        }
        break;
      case "minus":
        if (isPreviousNumberSet) {
          previousNumber = previousNumber - displayNumber;
          displayNumber = 0;
          lastRegisteredOperation = operation;
          displaySetter(displayNumber);
          isPreviousNumberSet = true;
          console.log(displayNumber, previousNumber);
        } else {
          previousNumber = displayNumber;
          displayNumber = 0;
          lastRegisteredOperation = operation;
          displaySetter(displayNumber);
          isPreviousNumberSet = true;
          console.log(displayNumber, previousNumber);
        }
        break;
      case "multiply":
        if (isPreviousNumberSet) {
          previousNumber = previousNumber * displayNumber;
          displayNumber = 0;
          lastRegisteredOperation = operation;
          displaySetter(displayNumber);
          isPreviousNumberSet = true;
          console.log(displayNumber, previousNumber);
        } else {
          previousNumber = displayNumber;
          displayNumber = 0;
          lastRegisteredOperation = operation;
          displaySetter(displayNumber);
          isPreviousNumberSet = true;
          console.log(displayNumber, previousNumber);
        }
        break;
      case "divide":
        if (isPreviousNumberSet) {
          previousNumber = previousNumber / displayNumber;
          displayNumber = 0;
          lastRegisteredOperation = operation;
          displaySetter(displayNumber);
          isPreviousNumberSet = true;
          console.log(displayNumber, previousNumber);
        } else {
          previousNumber = displayNumber;
          displayNumber = 0;
          lastRegisteredOperation = operation;
          displaySetter(displayNumber);
          isPreviousNumberSet = true;
          console.log(displayNumber, previousNumber);
        }
        break;
      case "equals":
        handleOperation(lastRegisteredOperation);
        displayNumber = previousNumber;
        previousNumber = 0;
        isPreviousNumberSet = false;
        displaySetter(displayNumber);
        break;
      default:
        console.log("default ran");
        break;
    }
  };

  const appendNumber = (number) => {
    let displayNumberString = "" + displayNumber + number;
    console.log(displayNumberString);
    displayNumber = parseFloat(displayNumberString);
    displaySetter(displayNumber);
  };

  const clearData = () => {
    previousNumber = 0;
    displayNumber = 0;
    isPreviousNumberSet = false;
    lastRegisteredOperation = "";
    displaySetter(displayNumber);
  };

  const deleteNumber = () => {
    if (displayNumber.toString().length > 1) {
      displayNumber = parseInt(displayNumber.toString().slice(0, -1));
      displaySetter(displayNumber);
    } else {
      displayNumber = 0;
      displaySetter(displayNumber);
    }
  };

  return (
    <div className="App bg-gradient-to-bl from-cyan-900 to-slate-900 font-mono h-screen flex justify-center items-center">
      <div className="w-fit text-black">
        <main className="w-128 text-3xl">
          <section className="flex items-center justify-between h-16 gap-2">
            <Display displaySetter={displayChange} />
            <button
              onClick={deleteNumber}
              className="bg-gradient-to-bl from-orange-400 to-orange-600 w-16 h-full rounded-lg drop-shadow-2xl"
            >
              Del
            </button>
            <button
              onClick={clearData}
              className="bg-gradient-to-bl from-orange-400 to-orange-600 w-16 h-full rounded-lg drop-shadow-2xl"
            >
              C
            </button>
          </section>
          <section className="numpad flex flex-col gap-2 mt-2">
            <div className="row w-full flex justify-between items-center gap-2 h-16">
              <BtnComponent
                btnType={"number"}
                digit={7}
                handleClick={(number) => appendNumber(number)}
              />
              <BtnComponent
                btnType={"number"}
                digit={8}
                handleClick={(number) => appendNumber(number)}
              />
              <BtnComponent
                btnType={"number"}
                digit={9}
                handleClick={(number) => appendNumber(number)}
              />
              <BtnComponent
                digit={"\u00F7"}
                btnType={"divide"}
                handleClick={(operation) => handleOperation(operation)}
              />
            </div>
            <div className="row w-full flex justify-between items-center gap-2 h-16">
              <BtnComponent
                btnType={"number"}
                digit={4}
                handleClick={(number) => appendNumber(number)}
              />
              <BtnComponent
                btnType={"number"}
                digit={5}
                handleClick={(number) => appendNumber(number)}
              />
              <BtnComponent
                btnType={"number"}
                digit={6}
                handleClick={(number) => appendNumber(number)}
              />
              <BtnComponent
                digit={"\u2A09"}
                btnType={"multiply"}
                handleClick={(operation) => handleOperation(operation)}
              />
            </div>
            <div className="row w-full flex justify-between items-center gap-2 h-16">
              <BtnComponent
                btnType={"number"}
                digit={1}
                handleClick={(number) => appendNumber(number)}
              />
              <BtnComponent
                btnType={"number"}
                digit={2}
                handleClick={(number) => appendNumber(number)}
              />
              <BtnComponent
                btnType={"number"}
                digit={3}
                handleClick={(number) => appendNumber(number)}
              />
              <BtnComponent
                digit={"\u2212"}
                btnType={"minus"}
                handleClick={(operation) => handleOperation(operation)}
              />
            </div>
            <div className="row w-full flex justify-between items-center gap-2 h-16">
              <BtnComponent
                btnType={"number"}
                digit={0}
                handleClick={(number) => appendNumber(number)}
              />
              <BtnComponent
                btnType={"number"}
                digit={","}
                handleClick={(number) => appendNumber(number)}
              />
              <BtnComponent
                digit={"\u003D"}
                btnType={"equals"}
                handleClick={(operation) => handleOperation(operation)}
              />
              <BtnComponent
                digit={"\u002B"}
                btnType={"plus"}
                handleClick={(operation) => handleOperation(operation)}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;

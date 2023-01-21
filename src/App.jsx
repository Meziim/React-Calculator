import { BtnComponent, Display } from "./components";
import "./index.css";

function App() {
  let stringDisplayNumber = "0";
  var previousNumber = "0";
  var isPreviousNumberSet = false;
  var displaySetter = null;
  var lastRegisteredOperation = "";

  const displayChange = (setDisplayFromChild) => {
    displaySetter = setDisplayFromChild;
  };

  // const previousNumIsNotSet = (operation) => {
  //   previousNumber = stringDisplayNumber;
  //   isPreviousNumberSet = true;
  //   lastRegisteredOperation = operation;
  //   stringDisplayNumber = "0";
  //   displaySetter(stringDisplayNumber);
  // };

  const handleClick = (operation) => {
    if (isPreviousNumberSet) {
      if (operation === "equals") {
        stringDisplayNumber = handleOperation(
          lastRegisteredOperation,
          parseFloat(previousNumber),
          parseFloat(stringDisplayNumber)
        );
        displaySetter(stringDisplayNumber);
        previousNumber = "0";
        isPreviousNumberSet = false;
      } else {
        previousNumber = handleOperation(
          operation,
          parseFloat(previousNumber),
          parseFloat(stringDisplayNumber)
        );
        lastRegisteredOperation = operation;
        stringDisplayNumber = "0";
        displaySetter(stringDisplayNumber);
      }
    } else {
      if (operation === "equals") {
        return;
      } else {
        previousNumber = stringDisplayNumber;
        lastRegisteredOperation = operation;
        stringDisplayNumber = "0";
        isPreviousNumberSet = true;
        displaySetter(stringDisplayNumber);
      }
    }
  };

  const handleOperation = (operation, opr1, opr2) => {
    switch (operation) {
      case "plus":
        return opr1 + opr2;

      case "minus":
        return opr1 - opr2;

      case "multiply":
        return opr1 * opr2;
      case "divide":
        return opr1 / opr2;

      default:
        console.log("default of handle operation ran");
        break;
    }
  };

  const appendNumber = (number) => {
    if (stringDisplayNumber === "0") {
      stringDisplayNumber = "" + number;
      displaySetter(stringDisplayNumber);
    } else {
      stringDisplayNumber = stringDisplayNumber + number;
      displaySetter(stringDisplayNumber);
    }
  };

  const clearData = () => {
    stringDisplayNumber = "0";
    lastRegisteredOperation = "";
    isPreviousNumberSet = false;
    previousNumber = "0";
    displaySetter(stringDisplayNumber);
  };

  const deleteNumber = () => {
    if (stringDisplayNumber.length > 1) {
      stringDisplayNumber = stringDisplayNumber.slice(0, -1);
      displaySetter(stringDisplayNumber);
    } else {
      stringDisplayNumber = "0";
      displaySetter(stringDisplayNumber);
    }
  };

  return (
    <div className="App bg-gradient-to-bl from-cyan-900 to-slate-900 font-mono h-screen flex justify-center items-center">
      <div className="w-fit text-black">
        <main className="sm:w-128 w-screen px-4 sm:px-0 text-3xl">
          <section className="flex items-center justify-between h-32 sm:h-16 gap-2 sm:flex-row flex-col">
            <Display displaySetter={displayChange} />
            <div className="flex items-center justify-center h-full gap-2 w-full sm:w-fit">
              <button
                onClick={deleteNumber}
                className="bg-gradient-to-bl from-orange-400 to-orange-600 w-full sm:w-16 h-full rounded-lg drop-shadow-2xl"
              >
                Del
              </button>
              <button
                onClick={clearData}
                className="bg-gradient-to-bl from-orange-400 to-orange-600 w-full sm:w-16 h-full rounded-lg drop-shadow-2xl"
              >
                C
              </button>
            </div>
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
                handleClick={(operation) => handleClick(operation)}
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
                handleClick={(operation) => handleClick(operation)}
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
                handleClick={(operation) => handleClick(operation)}
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
                digit={"."}
                handleClick={(number) => appendNumber(number)}
              />
              <BtnComponent
                digit={"\u003D"}
                btnType={"equals"}
                handleClick={(operation) => handleClick(operation)}
              />
              <BtnComponent
                digit={"\u002B"}
                btnType={"plus"}
                handleClick={(operation) => handleClick(operation)}
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;

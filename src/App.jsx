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

  const previousNumIsSet = (operation) => {
    previousNumber = stringDisplayNumber;
    isPreviousNumberSet = true;
    lastRegisteredOperation = operation;
    stringDisplayNumber = "0";
    displaySetter(stringDisplayNumber);
  };

  const handleOperation = (operation) => {
    if (isPreviousNumberSet) {
      switch (operation) {
        case "plus":
          previousNumber =
            "" + (parseFloat(previousNumber) + parseFloat(stringDisplayNumber));
          stringDisplayNumber = "0";
          displaySetter(stringDisplayNumber);
          break;

        case "minus":
          previousNumber =
            "" + (parseFloat(previousNumber) - parseFloat(stringDisplayNumber));
          stringDisplayNumber = "0";
          displaySetter(stringDisplayNumber);
          break;

        case "multiply":
          previousNumber =
            "" + parseFloat(previousNumber) * parseFloat(stringDisplayNumber);
          stringDisplayNumber = "0";
          displaySetter(stringDisplayNumber);
          break;

        case "divide":
          previousNumber =
            "" + parseFloat(previousNumber) / parseFloat(stringDisplayNumber);
          stringDisplayNumber = "0";
          displaySetter(stringDisplayNumber);
          break;

        case "equals":
          handleOperation(lastRegisteredOperation);
          stringDisplayNumber = previousNumber;
          displaySetter(stringDisplayNumber);
          lastRegisteredOperation = "";
          previousNumber = "0";
          isPreviousNumberSet = false;
          break;

        default:
          console.log("default ran");
          break;
      }
    } else if (!isPreviousNumberSet && operation === "equals") {
      return;
    } else {
      previousNumIsSet(operation);
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
                digit={"."}
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

import React, { useState, useEffect } from "react";

export function BtnComponent({ btnType, digit, handleClick }) {
  if (btnType === "number") {
    return <NumberBtn digit={digit} handleClick={handleClick} />;
  }
  return (
    <ActionBtn btnType={btnType} digit={digit} handleClick={handleClick} />
  );
}

function NumberBtn({ digit, handleClick }) {
  return (
    <div
      onClick={() => {
        handleClick(digit);
      }}
      className="flex-1 h-16 flex items-center justify-center bg-gradient-to-bl from-slate-300 to-slate-500 rounded-lg cursor-pointer"
    >
      {digit}
    </div>
  );
}

function ActionBtn({ digit, btnType, handleClick }) {
  return (
    <div
      onClick={() => handleClick(btnType)}
      className="flex-1 h-16 flex items-center text-white justify-center bg-gradient-to-bl rounded-lg from-blue-500 to-blue-800 cursor-pointer"
    >
      {digit}
    </div>
  );
}

export function Display({ displaySetter }) {
  const [displayValue, setValue] = useState(0);

  useEffect(() => {
    displaySetter(setValue);
  }, [displayValue, setValue, displaySetter]);
  return (
    <div className="w-full flex items-center px-2 text-5xl overflow-x-auto bg-slate-200 h-full rounded-lg">
      {displayValue}
    </div>
  );
}

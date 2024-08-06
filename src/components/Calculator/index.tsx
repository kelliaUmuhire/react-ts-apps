import React, { useState } from "react";
import Button from "./Button";

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstOperand, setFirstOperand] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumberClick = (num: string) => {
    if (operator || displayValue === "0") {
      setDisplayValue(num);
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const handleOperatorClick = (op: string) => {
    setFirstOperand(displayValue);
    setOperator(op);
  };

  const handleEqualClick = () => {
    const secondOperand = displayValue;
    let result = "";

    switch (operator) {
      case "+":
        result = (
          parseFloat(firstOperand) + parseFloat(secondOperand)
        ).toString();
        break;
      case "-":
        result = (
          parseFloat(firstOperand) - parseFloat(secondOperand)
        ).toString();
        break;
      case "*":
        result = (
          parseFloat(firstOperand) * parseFloat(secondOperand)
        ).toString();
        break;
      case "/":
        result = (
          parseFloat(firstOperand) / parseFloat(secondOperand)
        ).toString();
        break;
      case "%":
        result = (
          parseFloat(firstOperand) / parseFloat(secondOperand)
        ).toString();
        break;
      default:
        return;
    }

    setDisplayValue(result);
    setFirstOperand("");
    setOperator("");
  };

  const handleClearClick = () => {
    setDisplayValue("0");
    setFirstOperand("");
    setOperator("");
  };

  const handleToggleSignClick = () => {
    setDisplayValue((prevValue) => (parseFloat(prevValue) * -1).toString());
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-gray-200 rounded-lg lg:w-[30%] w-11/12 mx-auto">
        <input
          type="text"
          className="w-full text-right text-4xl p-4 outline-none bg-gray-400 text-white"
          value={displayValue}
          readOnly
        />
        <div className="grid grid-cols-4">
          <Button value="AC" handleOnClick={handleClearClick} />
          <Button value="+/-" handleOnClick={handleToggleSignClick} />
          <Button value="%" handleOnClick={() => handleOperatorClick("%")} />
          <Button
            value="/"
            handleOnClick={() => handleOperatorClick("/")}
            styles="bg-orange-400 text-white"
          />
          <Button value="7" handleOnClick={() => handleNumberClick("7")} />
          <Button value="8" handleOnClick={() => handleNumberClick("8")} />
          <Button value="9" handleOnClick={() => handleNumberClick("9")} />
          <Button
            value="*"
            handleOnClick={() => handleOperatorClick("*")}
            styles="bg-orange-400 text-white"
          />
          <Button value="4" handleOnClick={() => handleNumberClick("4")} />
          <Button value="5" handleOnClick={() => handleNumberClick("5")} />
          <Button value="6" handleOnClick={() => handleNumberClick("6")} />
          <Button
            value="-"
            handleOnClick={() => handleOperatorClick("-")}
            styles="bg-orange-400 text-white"
          />
          <Button value="1" handleOnClick={() => handleNumberClick("1")} />
          <Button value="2" handleOnClick={() => handleNumberClick("2")} />
          <Button value="3" handleOnClick={() => handleNumberClick("3")} />
          <Button
            value="+"
            handleOnClick={() => handleOperatorClick("+")}
            styles="bg-orange-400 text-white"
          />
          <Button
            value="0"
            handleOnClick={() => handleNumberClick("0")}
            styles={"col-span-2"}
          />
          <Button value="." handleOnClick={() => handleNumberClick(".")} />
          <Button
            value="="
            handleOnClick={handleEqualClick}
            styles="bg-orange-400 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;

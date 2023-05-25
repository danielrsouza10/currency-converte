import { useState } from "react";
import Converter from "./converter";

function Coin() {
  const [firstInput, secondInput] = useState("");
  const [firstOption, secondOption] = useState("Dolar");
  
  function inputChangeHandler(e) {
    if (firstOption === "Dolar") {
      secondInput(e.target.value * 0.2);
    } else if (firstOption === "Euro") {
      secondInput(e.target.value * 0.18);
    } else if (firstOption === "Libra") {
      secondInput(e.target.value * 0.16);
    }
  }

  function optionChangeHandler(e) {
    secondOption(e.target.value);
  }

  return (
    <>
      <Converter
        onInputChange={inputChangeHandler}
        onOptionChange={optionChangeHandler}
      />
      <p>
        Valor em {firstOption}: {firstInput}
      </p>
    </>
  );
}

export default Coin;



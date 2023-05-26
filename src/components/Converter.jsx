import { useState } from "react";
import classes from "./Converter.module.css";
import Button from "./Button";
import Input from "./Input";

function Converter(props) {
  const [inputValue, setInputValue] = useState("");
  const [userOption, setUserOption] = useState("Dolar");
  let [result, setResult] = useState("");

  function buttonHandler() {
    if (userOption === "Dolar") {
      setResult("US$ " + (inputValue * 0.2).toFixed(2));
    } else if (userOption === "Euro") {
      setResult("€ " + (inputValue * 0.18).toFixed(2));
    } else if (userOption === "Libra"){
      setResult("£ " + (inputValue * 0.16).toFixed(2));
    } else{
      setResult('$ ' + (inputValue * 47.25).toFixed(2));
    }
  }

  function inputHandler(e) {
    setResult("");
    setInputValue(e.target.value);
  }

  function optionHandler(e) {
    setResult("");
    setUserOption(e.target.value);
  }

  return (
    <>
      <div className={classes.input}>
      <Input onInputChange={inputHandler} />
        <div>
          <label htmlFor="moedas">Selecione a moeda:</label>
          <select name="moedas" id="moedas" onChange={optionHandler}>
            <option value="Dolar">Dolar</option>
            <option value="Euro">Euro</option>
            <option value="Libra">Libra</option>
            <option value="Peso">Peso Argentino</option>
          </select>
        </div>
      </div>
      <div>
        
        <Button onButtonClick={buttonHandler} />
        
      </div>
      <p>{result}</p>
    </>
  );
}

export default Converter;

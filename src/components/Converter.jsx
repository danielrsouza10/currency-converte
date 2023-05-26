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
      setResult("US$ " + inputValue * 0.2);
    } else if (userOption === "Euro") {
      setResult("€ " + inputValue * 0.18);
    } else {
      setResult("£ " + inputValue * 0.16);
    }
  }

  function inputHandler(e) {
    setInputValue(e.target.value);
  }

  function optionHandler(e) {
    setResult("");
    setUserOption(e.target.value);
  }

  return (
    <>
      <div className={classes.input}>
        

        <div>
        <Input onInputChange={inputHandler}/>
          <select name="moedas" id="moedas" onChange={optionHandler}>
            <option value="Dolar">Real</option>
            <option value="Dolar">Dolar</option>
            <option value="Euro">Euro</option>
            <option value="Libra">Libra</option>
          </select>
        </div>

        
        <div>
        <Input onInputChange={inputHandler} />
          <select name="moedas" id="moedas" onChange={optionHandler}>
            <option value="Dolar">Real</option>
            <option value="Dolar">Dolar</option>
            <option value="Euro">Euro</option>
            <option value="Libra">Libra</option>
          </select>
        </div>
      </div>
      <div>
        <Button onButtonClick={buttonHandler} />

        <p>{result}</p>
      </div>
    </>
  );
}

export default Converter;

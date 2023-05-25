import { useState } from "react";
import classes from "./Converter.module.css";
import Button from "./Button";

function Converter(props) {

  

  return (
    <div>
      <label htmlFor="number">Valor em Real</label>
      <input type="number" id="number" onChange={props.onInputChange} />
      <div>
      <select name="moedas" id="moedas" onChange={props.onOptionChange}>
        <option value="Dolar">Dolar</option>
        <option value="Euro">Euro</option>
        <option value="Libra">Libra</option>
      </select>
      </div>
      
      <div>
        <Button />
      </div>
    </div>
  );
}

export default Converter;

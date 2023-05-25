import { useState } from "react";
import classes from "./Converter.module.css";

function Converter(props) {


  return (
    <div>
      <label htmlFor="number">Valor em Real</label>
      <input type="number" onChange={props.onInputChange}/>
      <select name="moedas" id="moedas" onChange={props.onOptionChange}>
        <option value="Dolar">Dolar</option>
        <option value="Euro">Euro</option>
        <option value="Libra">Libra</option>
      </select>
    </div>
  );
}

export default Converter;

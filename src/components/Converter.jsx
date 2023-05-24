import { useState } from "react";
import classes from "./Converter.module.css";

function Converter(props) {
  const [valorInicial, valorFinal] = useState(0);
  const [moedaInicial, moedaFinal] = useState('dolar');

  function inputSelected(e) {
    moedaFinal(e.target.value);
  }

  function coinConverter(e){
    
    if(moedaFinal === 'dolar'){
        console.log(e.target.value);
        valorFinal(e.target.value*0.2)
    } else if(moedaFinal === 'euro'){
        valorFinal(e.target.value*0.18)
    } else{
        valorFinal(e.target.value*0.16)
    }
  }

  return (
    <div className={classes.body}>
      <div className={classes.coin}>
        <label htmlFor="selectFirstCoin">Moeda</label>

        <select name="selectFirstCoin" id="selectFirstCoin">
          <option value="real">Real</option>
          
        </select>
        <label htmlFor="valor">Valor</label>
        <input type="number" id="valor" onChange={coinConverter} />
      </div>

      <div className={classes.coin}>
        <label htmlFor="selectSecondtCoin">Moeda</label>

        <select name="selectSecondtCoin" id="selectSecondtCoin" onChange={inputSelected}>
         
          <option value="dolar">Dolar</option>
          <option value="euro">Euro</option>
          <option value="libra">Libra</option>
        </select>

        <label htmlFor="valor">Valor</label>

        <p>{valorInicial}</p>
        <p>{moedaInicial}</p>
      </div>
    </div>
  );
}

export default Converter;

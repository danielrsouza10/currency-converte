function Input(props) {
  return (
    <div>
      <label htmlFor="number">Valor em Real</label>
      <input type="number" id="number" onChange={props.onInputChange} />
    </div>
  );
}

export default Input;

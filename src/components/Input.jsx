function Input(props) {
  return (
    <>
    <div>
     
      <input type="number" id="number" onChange={props.onInputChange} placeholder="R$ 0.00"/>
    </div>
    
    </>
  );
}

export default Input;

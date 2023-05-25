function Button(){

    function handleClick(event){
        console.log('You click me');
    }

    return(
        <button onClick={handleClick}>Converter</button>
    )
}

export default Button
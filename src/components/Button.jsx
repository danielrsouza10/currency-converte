import classes from './Button.module.css'

function Button(props){

    return(
        <button onClick={props.onButtonClick}>Converter</button>
    )
}

export default Button
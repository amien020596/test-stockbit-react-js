import classes from './Button.model.css';

function Button(props) {
  return (
    <button className={classes.button} {...props}>{props.text}</button>
  )
}
export default Button;
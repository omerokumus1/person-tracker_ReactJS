import classes from './Button.module.css';

function Button(props) {
  const buttonType = props.type || 'button';
  return (
    <button
      className={classes.button}
      type={buttonType}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;

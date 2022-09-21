import classes from './User.module.css';

function User(props) {
  return (
    <div
      className={classes.user}
    >{`${props.name} ${props.age} years old.`}</div>
  );
}

export default User;

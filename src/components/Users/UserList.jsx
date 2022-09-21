import User from './User';

function UserList(props) {
  return (
    <div>
      {props.users.reverse().map((user) => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
}

export default UserList;

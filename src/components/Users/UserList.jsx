import User from './User';

function UserList(props) {
  return props.users
    .reverse()
    .map((user) => <User key={user.id} name={user.name} age={user.age} />);
}

export default UserList;

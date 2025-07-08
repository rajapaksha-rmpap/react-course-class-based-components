import { Component, useState } from "react";
import User from "./User";

import classes from "./Users.module.css";

class Users extends Component {
  // declare states
  // all states packed together in this.state attribute
  constructor() {
    super(); // should call the base class constructor first
    this.state = {
      showUsers: true,
      userCount: 0, // not used - but will remain intact across state updates
    };
  }

  toggleUsersHandler() {
    // updating states
    // - React will merge the provided new state value with the existing state value
    this.setState((prevState) => {
      return { showUsers: !prevState.showUsers };
    });
  }

  componentDidUpdate(prevProps, prevStates) {
    // if the receiving props.users is empty, throw an error
    if (this.props.users.length === 0) {
      console.log("Users - throw an error: user list is empty");
      throw new Error("user list is empty");
    }
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

// const usersList = (
//   <ul>
//     {DUMMY_USERS.map((user) => (
//       <User key={user.id} name={user.name} />
//     ))}
//   </ul>
// );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;

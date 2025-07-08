import { Component, useState, useEffect } from "react";

import ErrorBoundary from "./ErrorBoundary";

import Users from "./Users";

import classes from "./UserFinder.module.css";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinder extends Component {
  // declare states
  constructor() {
    super(); // initialize the base class
    this.state = {
      filteredUsers: [...DUMMY_USERS],
      filterName: "",
    };
  }

  handleChange(event) {
    this.setState({ filterName: event.target.value });
  }

  componentDidMount() {
    // fetch user data using an HTTP request
  }

  componentDidUpdate(prevProps, prevStates) {
    if (prevStates.filterName !== this.state.filterName) {
      // filterName has been updated
      console.log(
        "UserFinder - filterName has been updated, updating the filteredUsers state"
      );
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) =>
          user.name.startsWith(this.state.filterName)
        ),
      });
    }
  }

  render() {
    return (
      <>
        <div className={classes.finder}>
          <input
            type="text"
            value={this.state.filterName}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </>
    );
  }
}

// export default function UserFinder() {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [filterName, setFilterName] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.startsWith(filterName))
//     );
//   }, [filterName]);

//   function handleChange(event) {
//     setFilterName(event.target.value);
//   }

//   return (
// <>
//   <div className={classes.finder}>
//     <input type="text" value={filterName} onChange={handleChange} />
//   </div>
//   <Users users={filteredUsers} />;
// </>
//   );
// }

export default UserFinder;

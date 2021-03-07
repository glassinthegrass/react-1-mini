import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      picture: "",
      name: "",
    };
  }
  updatePicture = (value) => {
    this.setState({ picture: value });
  };
  updateName = (value) => {
    this.setState({ name: value });
  };
  addFriend() {
    const { friends, picture, name } = this.state;
    let newFriends = friends.slice();
    newFriends.push({ picture, name });
    this.setState({ friends: newFriends, picture: "", name: "" });
  }

  render() {
    const friends = this.state.friends.map((friend, i) => (
      <div key={`friend-${i}-${friend.name}`}>
        <img width="100px" src={friend.picture} alt='friendPic' />
        <span>{friend.name}</span>
      </div>
    ));

    return (
      <div id="main" className="App">
        <p>Picture:</p>
        <input
          type="url"
          placeholder="URL"
          onChange={(e) => this.updatePicture(e.target.value)}
          value={this.state.picture}
        />
        <p>Name:</p>
        <input
          type="text"
          placeholder="Friend Name"
          onChange={(e) => this.updateName(e.target.value)}
          value={this.state.name}
        />
        <button onClick={() => this.addFriend()}>Add Friend</button>
        {friends}
      </div>
    );
  }
}
export default App;

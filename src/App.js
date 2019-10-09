import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./components/TwitterMessage";
import PoemWriter from "./components/PoemWriter";

class App extends Component {

  login = ({ username, password }) => {
    alert(`Logging in ${username} with password ${password}`);
    console.log(`Logging in ${username} with password ${password}`);
  };

  render() {
    return (
      <div>
        <h2><pre>TwitterMessage</pre></h2>
        <TwitterMessage maxChars={140} />

        <h2><pre>LoginForm</pre></h2>
        <LoginForm handleLogin={this.login} />

        <h2><pre>PoemWriter</pre></h2>
        <PoemWriter />

      </div>
    )
  }
}

export default App

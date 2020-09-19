import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import MessageList from "./pages/MessageList"


class App extends React.Component {

  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  }
  render() {

    return (
      <div className="root" >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile/:username" component={Profile} />
          <Route exact path="/messagefeed" component={MessageList} />
          <Route exact path="*" component={NotFound} />
          <Route exact path="/postMessage" component={postMessage} />
        </Switch>
      </div>

    )
  }
}

export default App




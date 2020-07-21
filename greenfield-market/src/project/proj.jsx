import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../components/Login.jsx";
import Profile from "../components/Profile.jsx";
import Register from "../components/Register.jsx";
import Header from "../project/maincomponnent/header.jsx";
import Body from "../project/maincomponnent/body.jsx";
import Footer from "../project/maincomponnent/footer.jsx"


class Proj extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Body} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Proj;

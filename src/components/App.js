import React, { Component } from "react";
import { connect } from "react-redux";
import Main from "./main/Main";
import Header from "./header/Header";
import { currentUserOperation } from "../redux/auth/authOperations";

class App extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.idToken) {
      if (prevProps.idToken !== this.props.idToken) {
        this.props.currentUserOperation();
      }
    }
  }

  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

const mstp = (state) => {
  return {
    idToken: state.auth.idToken,
  };
};

export default connect(mstp, { currentUserOperation })(App);

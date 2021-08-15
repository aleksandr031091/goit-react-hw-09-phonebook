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

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Main from "./main/Main";
// import Header from "./header/Header";
// import { currentUserOperation } from "../redux/auth/authOperations";

// const App = () => {
//   const idToken = useSelector((state) => state.auth.idToken);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (idToken) {
//       if (prevProps.idToken !== idToken) {
//         dispatch(currentUserOperation());
//       }
//     }
//   });

//   return (
//     <>
//       <Header />
//       <Main />
//     </>
//   );
// };

// export default App;

import React, { Component } from "react";

// This import loads the firebase namespace along with all its type information.
import firebase from "firebase/app";

// These imports load individual services into the firebase namespace.
import "firebase/auth";
import "firebase/firestore";
var config = {};

let db;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true
  });
}

class FirebaseLogin extends Component {
  render() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, { ...this.state, ...this.props })
    );
  }
}

export default FirebaseLogin;

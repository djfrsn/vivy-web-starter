import React from 'react';

import Firebase from './index';

/**
 * Docs
 * -- *
 * authStatusReported indicates if Firebase has reported the auth status.If the auth status hasn’t been reported yet, you might want to display a loading indicator for your app.
 * isUserSignedIn indicates if the user is signed -in or not.
 * Source: https://hackernoon.com/integrating-firebase-authentication-with-react-router-in-react-16-3-92f53b67c0b0
 */

/**
 * Usage
 * Sign-Up
  try {
    await Firebase.auth.signInWithEmailAndPassword(email, password);
    history.push("/protected");
  } catch (e) {
      alert(e);
  }
  * Sign-In
  try {
    await Firebase.auth.createUserWithEmailAndPassword(email, password);
    history.push("/protected");
  } catch (e) {
      alert(e);
  }
  * Consumer
  <FirebaseAuthContext.Consumer>
    {value => <Component auth={value} }
  </FirebaseAuthContext.Consumer>
 */

const defaultFirebaseContext = {
  authStatusReported: false,
  isUserSignedIn: false
};

export const FirebaseAuthContext = React.createContext(defaultFirebaseContext);

export default class FirebaseAuthProvider extends React.Component {
  state = defaultFirebaseContext;

  componentDidMount() {
    Firebase.auth.onAuthStateChanged(user =>
      this.setState({
        authStatusReported: true,
        isUserSignedIn: !!user
      })
    );
  }

  render() {
    const { children } = this.props;
    const { authStatusReported, isUserSignedIn } = this.state;
    return (
      <FirebaseAuthContext.Provider
        value={{ isUserSignedIn, authStatusReported }}
      >
        {authStatusReported && children}
      </FirebaseAuthContext.Provider>
    );
  }
}

// var config = {};

// let db;

// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
//   db = firebase.firestore();
//   db.settings({
//     timestampsInSnapshots: true
//   });
// }

// class FirebaseLogin extends React.Component {
//   render() {
//     return React.Children.map(this.props.children, child =>
//       React.cloneElement(child, { ...this.state, ...this.props })
//     );
//   }
// }

// export default FirebaseLogin;

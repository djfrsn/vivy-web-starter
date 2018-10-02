import React from 'react';

export default class ProtectedScreen extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <FirebaseAuthContext.Consumer>
        {({ isUserSignedIn }) => {
          if (isUserSignedIn) {
            return children;
          }
          return <Redirect to="/login" />;
        }}
      </FirebaseAuthContext.Consumer>
    );
  }
}

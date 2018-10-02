import * as firebase from 'firebase';

const config = {
  apiKey: 'xxxx',
  authDomain: 'xxxx',
  databaseURL: 'https://xxxx-45c01.firebaseio.com',
  projectId: 'xxxx-45c01',
  storageBucket: 'xxxx-45c01.appspot.com',
  messagingSenderId: '123456789'
};

firebase.initializeApp(config);

const fb = {
  auth: firebase.auth()
};

export default fb;

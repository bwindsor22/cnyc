import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var firebase = require("firebase");

var config = {
  apiKey: "AIzaSyAAUDsEqZ9_GGn3PwnukhaGj_L5zXTyKuw",
  authDomain: "mythical-ember-168003.firebaseapp.com",
  databaseURL: "https://mythical-ember-168003.firebaseio.com",
  storageBucket: "mythical-ember-168003.appspot.com",
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

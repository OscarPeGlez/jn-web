import firebase from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { store } from './store';

firebase.initializeApp({
  apiKey: 'AIzaSyCG2xfziWkVy5u-RT9HUd1tmt_sFXCADrQ',
  authDomain: 'banquetejn.firebaseapp.com',
  databaseURL: 'https://banquetejn.firebaseio.com',
  projectId: 'banquetejn',
  storageBucket: 'banquetejn.appspot.com',
  messagingSenderId: '1058903936351',
  appId: '1:1058903936351:web:c0c30a08a4ab8aa942faea',
  measurementId: 'G-V7E011BH44',
});

ReactDOM.render(
  <Provider store={store}>
    {/* <ConnectedRouter history={history}> */}
    <App />
    {/* </ConnectedRouter> */}
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

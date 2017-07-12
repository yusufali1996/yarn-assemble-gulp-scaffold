import 'es6-promise/auto';

// For ajax calls
import axios from 'axios';
window.axios = axios;

import { Global } from './app/Global';
import Select from './app/Select';
import Testy from './app/Testy';

// Example of using dev vs production js:
const api = process.env.NODE_ENV != "production" ?
  require('./dev/api') : require('./app/api');


// ---------------------------
// Initiate classes

var example = new Testy();
example.testFunc();

// Run select.js on all selects
if (document.querySelector('select')) {
  const selects = document.querySelectorAll('select');
  for (let selectsIndex = 0, length = selects.length; selectsIndex < length; selectsIndex++) {
    new Select(selects[selectsIndex]);
  }
}

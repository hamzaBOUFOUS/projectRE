import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import store from "./stores";
import reportWebVitals from './reportWebVitals';
import '../node_modules/admin-lte/dist/css/adminlte.min.css'
import '../node_modules/admin-lte/dist/js/adminlte.min.js'
import '../node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css'
import '../node_modules/admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css'
import '../node_modules/admin-lte/plugins/jquery/jquery.min.js'
import '../node_modules/admin-lte/plugins/sweetalert2/sweetalert2.min.js'
import '../node_modules/admin-lte/plugins/toastr/toastr.min.js'
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

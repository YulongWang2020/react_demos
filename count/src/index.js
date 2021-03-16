import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//check redux state change and call render when changed
store.subscribe(()=>{
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
})

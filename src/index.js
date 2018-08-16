import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Life from './pages/demo/Life';
import Admin from './Admin';
import registerServiceWorker from './registerServiceWorker';
import IRouter from "./router";

ReactDOM.render(<IRouter/>, document.getElementById('root'));

registerServiceWorker();

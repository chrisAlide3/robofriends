import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
<div>
    <App/>
</div>, document.getElementById('root'));
registerServiceWorker();

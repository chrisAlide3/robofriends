import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello.js';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Hello greetings={'React Ninja'} />, document.getElementById('root'));
registerServiceWorker();

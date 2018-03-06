import React from 'react';
import ReactDOM from 'react-dom';
import Info from './components/Info';
import Chat from './components/Chat';
import Index from './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
        <Chat />,
        document.getElementById('root'));
registerServiceWorker();

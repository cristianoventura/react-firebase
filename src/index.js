import React from 'react';
import ReactDOM from 'react-dom';
import ChatPage from './pages/ChatPage';
import Index from './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
        <ChatPage />,
        document.getElementById('root'));
registerServiceWorker();

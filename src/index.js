import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './include/bootstrap'

import cfgStore from './store'
import './include/bootstrap'
import { Provider } from 'react-redux'
import App from './containers/App';



const store =  cfgStore()


ReactDOM.render(

    <Provider store={ store }>
        <App />
    </Provider>,

    document.getElementById('root'));
    
registerServiceWorker();

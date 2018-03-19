import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Pages/Components/Root'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './Reducers'

const store = createStore(rootReducer)
ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

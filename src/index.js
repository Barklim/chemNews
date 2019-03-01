import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux'; //  combineReducers,
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { requestNews } from './reducers';

const logger = createLogger();
// const rootReducers = combineReducers({})
const store = createStore(requestNews, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(<Provider store = {store}>
				  				<App />
								</Provider>, document.getElementById('root'));
registerServiceWorker();
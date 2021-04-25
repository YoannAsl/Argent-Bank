import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.scss';
import App from './App';
import rootReducer from './reducers/index';

ReactDOM.render(
	<Provider
		store={createStore(
			rootReducer,
			window.__REDUX_DEVTOOLS_EXTENSION__ &&
				window.__REDUX_DEVTOOLS_EXTENSION__()
		)}
	>
		<App />
	</Provider>,
	document.getElementById('root')
);

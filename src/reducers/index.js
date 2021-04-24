import { combineReducers } from 'redux';

const loggedReducer = (state = false, action) => {
	if (action.type === 'log/login') return true;
	return state;
};

const rootReducer = combineReducers({ isLoggedIn: loggedReducer });

export default rootReducer;

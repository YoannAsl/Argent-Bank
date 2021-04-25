import { combineReducers } from 'redux';
import { LOGIN_SUCCESS } from './../actions/index';

const initialState = { email: '', password: '', token: '' };

const user = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				email: action.payload.email,
				password: action.payload.password,
				token: action.payload.token,
			};
		default:
			return state;
	}
};

const rootReducer = combineReducers({ user });

export default rootReducer;

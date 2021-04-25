import { combineReducers } from 'redux';
import { EDIT_PROFILE, LOGIN_SUCCESS } from './../actions/index';

const initialState = {
	isLoggedIn: false,
	email: '',
	password: '',
	token: '',
	firstName: '',
	lastName: '',
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				email: action.payload.email,
				password: action.payload.password,
				token: action.payload.token,
			};
		case EDIT_PROFILE:
			return {
				...state,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
			};
		default:
			return state;
	}
};

const rootReducer = combineReducers({ user });

export default rootReducer;

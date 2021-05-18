import { combineReducers } from 'redux';
import {
	EDIT_USER_NAME,
	LOGIN_SUCCESS,
	LOGOUT,
	LOGIN_REQUEST,
	LOGIN_ERROR,
	EDIT_USER_NAME_ERROR,
} from './../actions/index';

const initialState = {
	isLoggingIn: false,
	isLoggedIn: false,
	error: null,
	email: '',
	password: '',
	token: '',
	firstName: '',
	lastName: '',
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
				isLoggingIn: true,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				isLoggingIn: false,
				email: action.payload.email,
				password: action.payload.password,
				token: action.payload.token,
				error: null,
			};
		case LOGIN_ERROR:
			return { ...state, error: action.error };
		case EDIT_USER_NAME:
			return {
				...state,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName,
			};
		case EDIT_USER_NAME_ERROR:
			return { ...state, error: action.error };
		case LOGOUT:
			return initialState;
		default:
			return state;
	}
};

const rootReducer = combineReducers({ user });

export default rootReducer;

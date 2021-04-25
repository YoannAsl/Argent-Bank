export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'auth/LOGIN_ERROR';
export const LOGOUT = 'auth/LOGOUT';

export const loginSuccess = (email, password, token) => {
	return {
		type: LOGIN_SUCCESS,
		payload: {
			email,
			password,
			token,
		},
	};
};

export const loginError = () => {
	return {
		type: LOGIN_ERROR,
	};
};

export const logOut = () => {
	return {
		type: LOGOUT,
	};
};

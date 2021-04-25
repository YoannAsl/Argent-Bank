export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'auth/LOGIN_ERROR';
export const LOGOUT = 'auth/LOGOUT';
export const EDIT_PROFILE = 'profile/EDIT_PROFILE';

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

export const editProfile = (firstName, lastName) => {
	return {
		type: EDIT_PROFILE,
		payload: {
			firstName,
			lastName,
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

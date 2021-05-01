import db from '../apis/db';

export const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_ERROR = 'auth/LOGIN_ERROR';
export const LOGOUT = 'auth/LOGOUT';
export const EDIT_USER_NAME = 'profile/EDIT_USER_NAME';

export const loginRequest = (email, password) => {
	return async (dispatch) => {
		dispatch({ type: LOGIN_REQUEST });
		try {
			const res = await db.post('/login', { email, password });
			dispatch(loginSuccess(email, password, res.data.body.token));
		} catch (error) {
			dispatch(loginError(error));
		}
	};
};

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

export const loginError = (error) => {
	return {
		type: LOGIN_ERROR,
		error,
	};
};

export const getUserName = (token) => {
	return async (dispatch) => {
		try {
			const res = await db.post(
				'/profile',
				{},
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			dispatch({
				type: EDIT_USER_NAME,
				payload: {
					firstName: res.data.body.firstName,
					lastName: res.data.body.lastName,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const editUserName = (firstName, lastName, token) => {
	return async (dispatch) => {
		try {
			await db.put(
				'/profile',
				{ firstName, lastName },
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			dispatch({
				type: EDIT_USER_NAME,
				payload: {
					firstName,
					lastName,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export const logOut = () => {
	return {
		type: LOGOUT,
	};
};

import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './LoginPage.scss';
import { loginRequest } from '../../actions/index';

const LoginPage = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);

	useEffect(() => {
		document.title = 'Argent Bank - Sign In';
	}, []);

	const onInputChange = (e) => {
		e.target.name === 'email'
			? setEmail(e.target.value)
			: setPassword(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(loginRequest(email, password));
	};

	if (user.isLoggedIn) return <Redirect to='/profile' />;

	return (
		<main className='main bg-dark'>
			<section className='sign-in-content'>
				<i className='fa fa-user-circle sign-in-icon'></i>
				<h1>Sign In</h1>
				<form onSubmit={onSubmit}>
					<div className='input-wrapper'>
						<label htmlFor='username'>Username</label>
						<input
							type='text'
							id='username'
							name='email'
							value={email}
							onChange={onInputChange}
						/>
					</div>
					<div className='input-wrapper'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							id='password'
							name='password'
							value={password}
							onChange={onInputChange}
						/>
					</div>
					<div className='input-remember'>
						<input
							type='checkbox'
							id='remember-me'
							onChange={() => setRememberMe(!rememberMe)}
						/>
						<label htmlFor='remember-me'>Remember me</label>
					</div>
					<button className='sign-in-button'>Sign In</button>
				</form>
			</section>
		</main>
	);
};

export default LoginPage;

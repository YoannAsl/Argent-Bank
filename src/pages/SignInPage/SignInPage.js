import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './SignInPage.scss';
import { logIn } from './../../actions/index';

const SignInPage = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);

	const onInputChange = (e) => {
		e.target.name === 'email'
			? setEmail(e.target.value)
			: setPassword(e.target.value);
	};

	const onToggle = () => {
		setRememberMe(!rememberMe);
	};

	return (
		<main className='main bg-dark'>
			<section className='sign-in-content'>
				<i className='fa fa-user-circle sign-in-icon'></i>
				<h1>Sign In</h1>
				<form>
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
							onChange={onToggle}
						/>
						<label htmlFor='remember-me'>Remember me</label>
					</div>
					<Link to='/user' className='sign-in-button'>
						Sign In
					</Link>

					<button
						className='sign-in-button'
						onClick={(e) => {
							e.preventDefault();
							props.logIn();
						}}
					>
						Sign In
					</button>
				</form>
			</section>
		</main>
	);
};

const mapStateToProps = (state) => {
	return { isLoggedIn: state.isLoggedIn };
};

export default connect(mapStateToProps, {
	logIn,
})(SignInPage);

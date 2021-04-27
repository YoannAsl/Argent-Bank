import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import logo from '../../assets/images/argentBankLogo.png';
import { connect } from 'react-redux';

import { logOut } from '../../actions/index';

const Nav = (props) => {
	return (
		<nav className='main-nav'>
			<Link className='main-nav-logo' to='./'>
				<img
					className='main-nav-logo-image'
					src={logo}
					alt='Argent Bank Logo'
				/>
				<h1 className='sr-only'>Argent Bank</h1>
			</Link>
			{!props.user.isLoggedIn ? (
				<div>
					<Link className='main-nav-item' to='/sign-in'>
						<i className='fa fa-user-circle'></i>
						Sign In
					</Link>
				</div>
			) : (
				<div>
					<span className='main-nav-item'>
						<i className='fa fa-user-circle'></i>
						{props.user.firstName}
					</span>
					<Link
						className='main-nav-item'
						to='/'
						onClick={props.logOut}
					>
						<i className='fa fa-sign-out'></i>
						Sign Out
					</Link>
				</div>
			)}
		</nav>
	);
};

const mapStateToProps = (state) => {
	return { user: state.user };
};

export default connect(mapStateToProps, { logOut })(Nav);

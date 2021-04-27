import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import axios from 'axios';

import './UserPage.scss';
import Account from './../../components/Account/Account';
import { editProfile } from '../../actions/index';

const accounts = [
	{
		title: 'Argent Bank Checking (x8349)',
		amount: '2,082.79',
		description: 'Available Balance',
	},
	{
		title: 'Argent Bank Savings (x6712)',
		amount: '10,928.42',
		description: 'Available Balance',
	},
	{
		title: 'Argent Bank Credit Card (x8349)',
		amount: '184.30',
		description: 'Current Balance',
	},
];

const UserPage = (props) => {
	// Gets profile information
	useEffect(() => {
		axios
			.post(
				'http://localhost:3001/api/v1/user/profile',
				{},
				{ headers: { Authorization: `Bearer ${props.user.token}` } }
			)
			.then((res) => {
				const { firstName, lastName } = res.data.body;
				props.editProfile(firstName, lastName);
			})
			.catch((error) => console.log(error));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// Updates document title
	useEffect(() => {
		document.title = `Argent Bank - ${props.user.firstName} ${props.user.lastName} `;
	}, [props.user]);

	if (!props.user.isLoggedIn) return <Redirect to='/sign-in' />;

	return (
		<main className='main bg-dark'>
			<div className='header'>
				<h1>
					Welcome back
					<br />
					{props.user.firstName} {props.user.lastName}!
				</h1>
				<button className='edit-button'>Edit Name</button>
			</div>
			<h2 className='sr-only'>Accounts</h2>
			{accounts.map((account, index) => (
				<Account
					key={index}
					title={account.title}
					amount={account.amount}
					description={account.description}
				/>
			))}
		</main>
	);
};

const mapStateToProps = (state) => {
	return { user: state.user };
};

export default connect(mapStateToProps, { editProfile })(UserPage);

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import axios from 'axios';

import './ProfilePage.scss';
import Account from '../../components/Account/Account';
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

const ProfilePage = (props) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedName, setEditedName] = useState({
		firstName: '',
		lastName: '',
	});

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

	const onSubmit = (e) => {
		e.preventDefault();

		// Both fields have to not be empty
		if (editedName.firstName && editedName.lastName !== '') {
			axios
				.put(
					'http://localhost:3001/api/v1/user/profile',
					{
						firstName: editedName.firstName,
						lastName: editedName.lastName,
					},
					{ headers: { Authorization: `Bearer ${props.user.token}` } }
				)
				.then(
					props.editProfile(editedName.firstName, editedName.lastName)
				)
				.catch((error) => console.log(error));

			setEditedName({ firstName: '', lastName: '' });
			setIsEditing(false);
		}
	};

	const onChange = (e) => {
		e.target.id === 'firstName'
			? setEditedName({ ...editedName, firstName: e.target.value })
			: setEditedName({ ...editedName, lastName: e.target.value });
	};

	if (!props.user.isLoggedIn) return <Redirect to='/login' />;

	return (
		<main className='main bg-dark'>
			{!isEditing ? (
				<div className='header'>
					<h1>
						Welcome back
						<br />
						{props.user.firstName} {props.user.lastName}!
					</h1>
					<button
						className='edit-button'
						onClick={() => setIsEditing(true)}
					>
						Edit Name
					</button>
				</div>
			) : (
				<div className='header'>
					<h1>Welcome back</h1>
					<form onSubmit={onSubmit}>
						<input
							id='firstName'
							type='text'
							placeholder={props.user.firstName}
							value={editedName.firstName}
							onChange={onChange}
						/>
						<input
							id='lastName'
							type='text'
							placeholder={props.user.lastName}
							value={editedName.lastName}
							onChange={onChange}
						/>
						<button type='submit'>Save</button>
						<button onClick={() => setIsEditing(false)}>
							Cancel
						</button>
					</form>
				</div>
			)}

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

export default connect(mapStateToProps, { editProfile })(ProfilePage);

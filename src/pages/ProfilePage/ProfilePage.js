import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';

import './ProfilePage.scss';
import Account from '../../components/Account/Account';
import { getUserName, editUserName } from '../../actions/index';

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

const ProfilePage = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const [isEditing, setIsEditing] = useState(false);
	const [editedName, setEditedName] = useState({
		firstName: '',
		lastName: '',
	});

	// Gets profile information
	useEffect(() => {
		dispatch(getUserName(user.token));
	}, [dispatch, user.token]);

	// Updates document title
	useEffect(() => {
		document.title = `Argent Bank - ${user.firstName} ${user.lastName} `;
	}, [user]);

	const onSubmit = (e) => {
		e.preventDefault();

		// Both fields have to not be empty
		if (editedName.firstName && editedName.lastName !== '') {
			dispatch(
				editUserName(
					editedName.firstName,
					editedName.lastName,
					user.token
				)
			);

			setEditedName({ firstName: '', lastName: '' });
			setIsEditing(false);
		}
	};

	const onChange = (e) => {
		e.target.id === 'firstNameInput'
			? setEditedName({ ...editedName, firstName: e.target.value })
			: setEditedName({ ...editedName, lastName: e.target.value });
	};

	if (!user.isLoggedIn) return <Redirect to='/login' />;

	return (
		<main className='main bg-dark'>
			{!isEditing ? (
				<div className='header'>
					<h1>
						Welcome back
						<br />
						{user.firstName} {user.lastName}!
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
						<div>
							<input
								id='firstNameInput'
								type='text'
								placeholder={user.firstName}
								value={editedName.firstName}
								onChange={onChange}
							/>
							<input
								id='lastNameInput'
								type='text'
								placeholder={user.lastName}
								value={editedName.lastName}
								onChange={onChange}
							/>
						</div>
						<div>
							<button className='edit-button' type='submit'>
								Save
							</button>
							<button
								className='edit-button'
								onClick={() => setIsEditing(false)}
							>
								Cancel
							</button>
						</div>
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

export default ProfilePage;

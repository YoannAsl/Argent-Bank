import React from 'react';
import securityIcon from '../../assets/images/icon-security.png';
import moneyIcon from '../../assets/images/icon-money.png';
import chatIcon from '../../assets/images/icon-chat.png';

import './HomePage.scss';
import FeatureItem from '../../components/FeatureItem/FeatureItem';

export default function HomePage() {
	return (
		<main>
			<div className='hero'>
				<section className='hero-content'>
					<h2 className='sr-only'>Promoted Content</h2>
					<p className='subtitle'>No fees.</p>
					<p className='subtitle'>No minimum deposit.</p>
					<p className='subtitle'>High interest rates.</p>
					<p className='text'>
						Open a savings account with Argent Bank today!
					</p>
				</section>
			</div>
			<section className='features'>
				<h2 className='sr-only'>Features</h2>
				<FeatureItem
					icon={chatIcon}
					alt='Chat Icon'
					title='You are our #1 priority'
					text='Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
				/>
				<FeatureItem
					icon={moneyIcon}
					alt='Money Icon'
					title='More savings means higher rates'
					text='The more you save with us, the higher your interest rate
						will be!'
				/>
				<FeatureItem
					icon={securityIcon}
					alt='Security Icon'
					title='Security you can trust'
					text='We use top of the line encryption to make sure your data
                        and money is always safe.'
				/>
			</section>
		</main>
	);
}

import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import SignInPage from './pages/SignInPage/SignInPage';
import UserPage from './pages/UserPage/UserPage';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Nav />
				<Route exact path='/'>
					<HomePage />
				</Route>
				<Route path='/sign-in'>
					<SignInPage />
				</Route>
				<Route path='/user'>
					<UserPage />
				</Route>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;

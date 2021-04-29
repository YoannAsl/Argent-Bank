import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import LoginPage from './pages/LoginPage/LoginPage';
import UserPage from './pages/UserPage/UserPage';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Nav />
				<Route exact path='/'>
					<HomePage />
				</Route>
				<Route path='/login'>
					<LoginPage />
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

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Nav />
				<Switch>
					<Route exact path='/'>
						<HomePage />
					</Route>
					<Route path='/login'>
						<LoginPage />
					</Route>
					<Route path='/profile'>
						<ProfilePage />
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;

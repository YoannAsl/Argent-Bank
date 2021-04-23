import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;

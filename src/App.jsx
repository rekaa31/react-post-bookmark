import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home/Home';
import Bookmark from './page/Bookmark/Bookmark';

function App() {
	return (
		<div>
			<Navbar />

			<div className='container mt-2'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/bookmark' element={<Bookmark />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;

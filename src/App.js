import React from 'react';
import { Route, Routes } from 'react-router-dom';

//Component
import Header from './components/Header';

//Page Component
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';
import Series from './pages/Series/Series';
import NotFound from './pages/NotFound/NotFound';
import Library from './pages/Library/Library';

//styles
import './styles/app.scss';

function App() {
	const [favoriteItems, setFavoriteItems] = React.useState([]);

	React.useEffect(() => {
		if (localStorage.getItem('items')) {
			setFavoriteItems(JSON.parse(localStorage.getItem('items')));
		}
	}, []);

	React.useEffect(() => {
		localStorage.setItem('items', JSON.stringify(favoriteItems));
	}, [favoriteItems]);

	return (
		<div className='App'>
			<Header />

			<div className='content-wrapper'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='/movie'
						element={
							<Movie
								favoriteItems={favoriteItems}
								setFavoriteItems={setFavoriteItems}
							/>
						}
					/>
					<Route
						path='/series'
						element={
							<Series
								favoriteItems={favoriteItems}
								setFavoriteItems={setFavoriteItems}
							/>
						}
					/>
					<Route path='*' element={<NotFound />} />
					<Route
						path='library'
						element={
							<Library
								favoriteItems={favoriteItems}
								setFavoriteItems={setFavoriteItems}
							/>
						}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;

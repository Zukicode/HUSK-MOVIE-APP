import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

//Components
import Sort from '../../components/Sort/Sort';
import MovieItem from './MovieItem/MovieItem';
import Loader from './../../components/UI/Loader/Loader';

//Styles
import classes from './Movie.module.scss';
import MovieList from './MovieList/MovieList';
import VideoMovie from './VideoMovie/VideoMovie';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9e867b2923msh8f17763c8e9c08ap173a34jsn799b267eaa5b',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
	},
};

const Movie = ({ favoriteItems, setFavoriteItems }) => {
	//Search
	const [search, setSearch] = React.useState('');

	//Element Movie
	const [items, setItems] = React.useState([]);

	//Genres select
	const [genresActive, setGenresActive] = React.useState('Action');

	//Paginate
	const [page, setPage] = React.useState('1');

	//Loading
	const [loading, setLoading] = React.useState(true);

	//Watch Film
	const [open, setOpen] = React.useState(false);
	const [watch, setWatch] = React.useState('');

	const defaultGet = () => {
		setLoading(true);
		axios
			.get(
				`https://moviesdatabase.p.rapidapi.com/titles/?info=custom_info&list=most_pop_movies&sort=pos.incr&genre=${genresActive}&limit=20&page=${page}`,
				options
			)
			.then(data => {
				setItems(data.data.results);
				setLoading(false);
			});
	};

	const searchGet = () => {
		setLoading(true);
		axios
			.get(
				`https://moviesdatabase.p.rapidapi.com/titles/search/title/${search}/?info=custom_info&limit=20&sort=pos.incr`,
				options
			)

			.then(data => {
				setItems(data.data.results);
				setLoading(false);
			});
	};

	//Markdown movies on page
	React.useEffect(() => {
		if (search === '') {
			setLoading(true);
			defaultGet();
		} else {
			setLoading(true);
			searchGet();
		}
		window.scrollTo(0, 0);
	}, [genresActive, search, page]);

	return (
		<>
			{open ? (
				<VideoMovie setOpen={setOpen} id={watch} />
			) : (
				<div className={classes.content}>
					<Sort
						setGenresActive={setGenresActive}
						genresActive={genresActive}
						search={search}
						setSearch={setSearch}
					/>

					{loading ? (
						<Loader />
					) : (
						<>
							<div className={classes.movieLogo}>
								<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M16,12a1,1,0,0,1-.5.87l-7,4A1,1,0,0,1,8,17a1,1,0,0,1-.5-.13A1,1,0,0,1,7,16V8a1,1,0,0,1,.5-.87,1,1,0,0,1,1,0l7,4A1,1,0,0,1,16,12Z'
										fill='#f5f5f5'
									/>
									<path
										d='M21,9H17a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z'
										fill='#f5f5f5'
									/>
									<path
										d='M21,17H17a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z'
										fill='#f5f5f5'
									/>
									<path
										d='M21,5H3A1,1,0,0,1,3,3H21a1,1,0,0,1,0,2Z'
										fill='#f5f5f5'
									/>
									<path
										d='M21,21H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z'
										fill='#f5f5f5'
									/>
									<circle cx='3' cy='8' fill='#f5f5f5' r='1' />
									<circle cx='3' cy='12' fill='#f5f5f5' r='1' />
									<circle cx='3' cy='16' fill='#f5f5f5' r='1' />
									<path
										d='M21,13H19a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z'
										fill='#f5f5f5'
									/>
								</svg>
								<h1>Movie</h1>
							</div>

							<MovieList
								favoriteItems={favoriteItems}
								setFavoriteItems={setFavoriteItems}
								open={open}
								setOpen={setOpen}
								setWatch={setWatch}
								items={items}
							/>
						</>
					)}

					<ReactPaginate
						className={classes.root}
						breakLabel='...'
						nextLabel='>'
						previousLabel='<'
						onPageChange={e => setPage(e.selected + 1)}
						pageRangeDisplayed={2}
						pageCount={20}
						renderOnZeroPageCount={null}
					/>
				</div>
			)}
		</>
	);
};

export default Movie;

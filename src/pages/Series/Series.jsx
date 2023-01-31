import React from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

//styles
import classes from './Series.module.scss';

//Components
import Sort from '../../components/Sort/Sort';
import SeriesItem from './SeriesItem/SeriesItem';
import Loader from './../../components/UI/Loader/Loader';
import VideoSeries from './VideoSeries/VideoSeries';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9e867b2923msh8f17763c8e9c08ap173a34jsn799b267eaa5b',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
	},
};

const Series = ({ favoriteItems, setFavoriteItems }) => {
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

	//Watch series
	const [open, setOpen] = React.useState(false);
	const [watch, setWatch] = React.useState('');

	const defaultGet = () => {
		axios
			.get(
				`https://moviesdatabase.p.rapidapi.com/titles/?info=custom_info&list=most_pop_series&sort=pos.incr&genre=${genresActive}&limit=20&page=${page}`,
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
				<VideoSeries setOpen={setOpen} id={watch} />
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
							<div className={classes.seriesLogo}>
								<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
									<g>
										<path d='M0 0h24v24H0z' fill='none' />
										<path
											d='M12 20h8v2h-8C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.956 9.956 0 0 1-2 6h-2.708A8 8 0 1 0 12 20zm0-10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'
											fill='#f5f5f5'
										/>
									</g>
								</svg>
								<h1>Series</h1>
							</div>

							<div className={classes.listSeries}>
								{items.map(el => {
									return (
										<SeriesItem
											setWatch={setWatch}
											setOpen={setOpen}
											favoriteItems={favoriteItems}
											setFavoriteItems={setFavoriteItems}
											key={el.id}
											{...el}
										/>
									);
								})}
							</div>
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

export default Series;

import React from 'react';
import axios from 'axios';

//Components
import Slider from './../../components/Slider';

//styles
import classes from './Home.module.scss';
import MiniMovie from './MiniMovie/MiniMovie';
import MiniSeries from './MiniSeries/MiniSeries';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9e867b2923msh8f17763c8e9c08ap173a34jsn799b267eaa5b',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
	},
};

const Home = () => {
	const [moviesItems, setMoviesItems] = React.useState([]);
	const [seriesItems, setSeriesItems] = React.useState([]);

	const moviesGet = () => {
		axios
			.get(
				'https://moviesdatabase.p.rapidapi.com/titles/?info=custom_info&list=most_pop_movies&sort=pos.incr&limit=4',
				options
			)
			.then(data => {
				setMoviesItems(data.data.results);
			});
	};

	const seriesGet = () => {
		axios
			.get(
				'https://moviesdatabase.p.rapidapi.com/titles/?info=custom_info&list=most_pop_series&sort=pos.incr&limit=4',
				options
			)
			.then(data => {
				setSeriesItems(data.data.results);
			});
	};

	// const getItem = () => {
	// 	axios
	// 		.get(
	// 			`https://moviesdatabase.p.rapidapi.com/titles/tt13406094?info=custom_info`,
	// 			options
	// 		)
	// 		.then(data => {
	// 			console.log(data);
	//       // https://v2.vidsrc.me/embed/tt0111503
	// 		});
	// };

	React.useEffect(() => {
		moviesGet();
		seriesGet();
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className={classes.root}>
			<Slider />

			<div className={classes.content}>
				<MiniMovie moviesItems={moviesItems} />
				<MiniSeries seriesItems={seriesItems} />
			</div>
		</div>
	);
};

export default Home;

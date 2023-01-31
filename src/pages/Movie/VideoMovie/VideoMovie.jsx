import React from 'react';
import axios from 'axios';

//Components
import DescriptionFilm from './DescriptionFilm/DescriptionFilm';
import PlayerFilm from './PlayerFilm/PlayerFilm';

//styles
import classes from './VideoMovie.module.scss';
import Loader from '../../../components/UI/Loader/Loader';
import { IoIosArrowRoundBack } from 'react-icons/io';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9e867b2923msh8f17763c8e9c08ap173a34jsn799b267eaa5b',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
	},
};

const VideoMovie = ({ id, setOpen }) => {
	const [info, setInfo] = React.useState({});
	const [loading, setLoading] = React.useState(true);

	const defaultGet = () => {
		axios
			.get(
				`https://moviesdatabase.p.rapidapi.com/titles/${id}/?info=custom_info`,
				options
			)
			.then(data => {
				setInfo({
					...data.data.results,
					embed: `https://v2.vidsrc.me/embed/${id}`,
				});
				setLoading(false);
			});
	};

	React.useEffect(() => {
		defaultGet();
	}, []);

	return (
		<div className={classes.content}>
			{loading ? (
				<Loader />
			) : (
				<>
					<button onClick={() => setOpen(false)} className={classes.btnBack}>
						<IoIosArrowRoundBack />
					</button>
					<DescriptionFilm info={info} />
					<PlayerFilm title={info.titleText.text} video={info.embed} />
				</>
			)}
		</div>
	);
};

export default VideoMovie;

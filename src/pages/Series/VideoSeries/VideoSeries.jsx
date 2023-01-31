import React from 'react';
import axios from 'axios';

//Components
import DescriptionFilm from './DescriptionSeries/DescriptionSeries';
import PlayerSeries from './PlayerSeries/PlayerSeries';

//styles
import classes from './VideoSeries.module.scss';
import Loader from '../../../components/UI/Loader/Loader';
import { IoIosArrowRoundBack } from 'react-icons/io';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9e867b2923msh8f17763c8e9c08ap173a34jsn799b267eaa5b',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
	},
};

const VideoSeries = ({ id, setOpen }) => {
	console.log(id);
	const [info, setInfo] = React.useState({});
	const [loading, setLoading] = React.useState(true);

	const defaultGet = () => {
		setLoading(true);
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
					<PlayerSeries title={info.titleText.text} video={info.embed} />
				</>
			)}
		</div>
	);
};

export default VideoSeries;

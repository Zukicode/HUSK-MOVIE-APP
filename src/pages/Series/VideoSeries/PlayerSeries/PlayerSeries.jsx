import React from 'react';

//styles
import classes from './PlayerSeries.module.scss';

const PlayerFilm = ({ video }) => {
	return (
		<div className={classes.content}>
			<iframe src={video} frameBorder='0'></iframe>
		</div>
	);
};

export default PlayerFilm;

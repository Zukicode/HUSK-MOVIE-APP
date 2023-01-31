import React from 'react';

//styles
import classes from './PlayerFilm.module.scss';

const PlayerFilm = ({ video }) => {
	return (
		<div className={classes.content}>
			<iframe src={video} frameborder='0'></iframe>
		</div>
	);
};

export default PlayerFilm;

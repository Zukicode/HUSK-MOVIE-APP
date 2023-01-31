import React from 'react';

//styles
import classes from './PlayerSeries.module.scss';

const PlayerFilm = ({ video }) => {
	return (
		<div className={classes.content}>
			<iframe
				src={video}
				allowFullScreen='yes'
				frameBorder='0'
				scrolling='no'></iframe>
		</div>
	);
};

export default PlayerFilm;

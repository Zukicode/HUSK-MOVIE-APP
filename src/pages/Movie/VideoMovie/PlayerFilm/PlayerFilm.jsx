import React from 'react';

//styles
import classes from './PlayerFilm.module.scss';

const PlayerFilm = ({ video }) => {
	return (
		<div className={classes.content}>
			<iframe
				title={video}
				frameBorder='0'
				src={video}
				allowFullScreen='yes'></iframe>
		</div>
	);
};

export default PlayerFilm;

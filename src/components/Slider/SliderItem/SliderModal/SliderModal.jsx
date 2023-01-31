import React from 'react';

import classes from './SliderModal.module.scss';

const SliderModal = ({ trailer }) => {
	return (
		<div className={classes.content}>
			<iframe width='100%' height='100%' title={trailer} src={trailer}></iframe>
		</div>
	);
};

export default SliderModal;

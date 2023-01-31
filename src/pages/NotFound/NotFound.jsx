import React from 'react';
import classes from './NotFound.module.scss';

const NotFound = () => {
	return (
		<div className={classes.content}>
			<div className={classes.contentTitle}>
				<h1>👨🏻‍🔬</h1>
				<h1>Page Not Found!</h1>
			</div>
			<p>
				ERROR <span>404</span>
			</p>
		</div>
	);
};

export default NotFound;

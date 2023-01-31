import React from 'react';
import { Link } from 'react-router-dom';

import SeriesItem from './SeriesItem/SeriesItem';
import classes from './MiniSeries.module.scss';

const MiniSeries = ({ seriesItems }) => {
	return (
		<div className={classes.miniSeries}>
			<div className={classes.seriesLogo}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
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

				<div className={classes.seriesRedirect}>
					<Link to='series'>VIEW MORE...</Link>
				</div>
			</div>

			<div className={classes.listSeries}>
				{seriesItems.map((el, i) => {
					return <SeriesItem key={i} {...el} />;
				})}
			</div>
		</div>
	);
};

export default MiniSeries;

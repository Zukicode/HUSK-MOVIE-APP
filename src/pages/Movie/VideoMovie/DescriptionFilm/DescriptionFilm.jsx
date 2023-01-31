import React from 'react';

import classes from './../VideoMovie.module.scss';

const monthList = [
	'0',
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
];

const DescriptionFilm = ({ info }) => {
	console.log(info);
	return (
		<div className={classes.descriptionFilm}>
			<div className={classes.posterImg}>
				<img
					src={info.primaryImage !== null ? info.primaryImage.url : ''}
					alt='poster'
					width={'250px'}
					height={'325px'}
				/>
			</div>

			<div className={classes.detaliesFilm}>
				<h1>{info.titleText !== null ? info.titleText.text : 'NO INFO'}</h1>
				<div className={classes.miniInfo}>
					<p>
						Rating:{' '}
						<span>
							{info.ratingsSummary.aggregateRating !== null
								? info.ratingsSummary.aggregateRating
								: ''}
						</span>
					</p>
					<p>
						Release date:{' '}
						{info.releaseDate !== null ? (
							<span>
								{info.releaseDate.day} {monthList[info.releaseDate.month]}{' '}
								{info.releaseDate.year} year
							</span>
						) : (
							'No date'
						)}
					</p>
					<p>
						Genres:
						{info.genres != null
							? info.genres.genres.map(genre => {
									return <span key={genre.text}>{genre.text}</span>;
							  })
							: 'NO INFO'}
					</p>
					<p>
						Time:
						<span>
							{info.runtime !== null
								? `${info.runtime.seconds / 60} min.`
								: 'No info'}{' '}
						</span>
					</p>
				</div>
				<h2 className={classes.description}>
					{info.plot !== null ? info.plot.plotText.plainText : 'No description'}
				</h2>
			</div>
		</div>
	);
};

export default DescriptionFilm;

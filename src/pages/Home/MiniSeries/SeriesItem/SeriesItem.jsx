import React from 'react';
import classes from './../MiniSeries.module.scss';

const SeriesItem = ({ titleText, primaryImage, releaseYear, genres }) => {
	return (
		<div className={classes.movieSeries}>
			<img
				width={'224px'}
				hieght={'323px'}
				src={primaryImage.url}
				alt='⚠️NO_IMAGE'
			/>
			<div className={classes.descItem}>
				<h1>{titleText.text}</h1>
				<p>{releaseYear.year}</p>
			</div>

			<div className={classes.genres}>
				{genres === null ? (
					'No genres'
				) : genres.genres.length >= 3 ? (
					<>
						<span key={Math.random()}>{genres.genres[0].text}</span>
						<span key={Math.random()}>{genres.genres[1].text}</span>
						<span key={Math.random()}>{genres.genres[2].text}</span>
					</>
				) : (
					genres.genres.map(genre => {
						return <span key={genre.text}>{genre.text}</span>;
					})
				)}
			</div>
		</div>
	);
};

export default SeriesItem;

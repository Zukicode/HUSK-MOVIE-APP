import React from 'react';

import MovieItem from '../MovieItem/MovieItem';

import classes from './../Movie.module.scss';

const MovieList = ({
	favoriteItems,
	setFavoriteItems,
	open,
	setOpen,
	setWatch,
	items,
}) => {
	return (
		<div className={classes.listMovies}>
			{items.map(el => {
				return (
					<MovieItem
						key={el.id}
						favoriteItems={favoriteItems}
						setFavoriteItems={setFavoriteItems}
						open={open}
						setOpen={setOpen}
						setWatch={setWatch}
						{...el}
					/>
				);
			})}
		</div>
	);
};

export default MovieList;

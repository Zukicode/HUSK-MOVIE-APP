import React from 'react';
import { Link } from 'react-router-dom';

import MovieItem from './MovieItem/MovieItem';
import classes from './MiniMovie.module.scss';

const MiniMovie = ({ moviesItems }) => {
	return (
		<div className={classes.miniMovie}>
			<div className={classes.movieLogo}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M16,12a1,1,0,0,1-.5.87l-7,4A1,1,0,0,1,8,17a1,1,0,0,1-.5-.13A1,1,0,0,1,7,16V8a1,1,0,0,1,.5-.87,1,1,0,0,1,1,0l7,4A1,1,0,0,1,16,12Z'
							fill='#f5f5f5'
						/>
						<path d='M21,9H17a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z' fill='#f5f5f5' />
						<path d='M21,17H17a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z' fill='#f5f5f5' />
						<path d='M21,5H3A1,1,0,0,1,3,3H21a1,1,0,0,1,0,2Z' fill='#f5f5f5' />
						<path d='M21,21H3a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z' fill='#f5f5f5' />
						<circle cx='3' cy='8' fill='#f5f5f5' r='1' />
						<circle cx='3' cy='12' fill='#f5f5f5' r='1' />
						<circle cx='3' cy='16' fill='#f5f5f5' r='1' />
						<path d='M21,13H19a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z' fill='#f5f5f5' />
					</svg>
					<h1>Movie</h1>
				</div>

				<div className={classes.movieRedirect}>
					<Link to='movie'>VIEW MORE...</Link>
				</div>
			</div>

			<div className={classes.listMovies}>
				{moviesItems.map((el, i) => {
					return <MovieItem key={i} {...el} />;
				})}
			</div>
		</div>
	);
};

export default MiniMovie;

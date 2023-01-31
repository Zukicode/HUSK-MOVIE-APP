import React from 'react';
import classes from './MiniMovie.module.scss';

import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

function MovieItem({
	titleText,
	primaryImage,
	releaseYear,
	genres,
	favoriteItems,
	setFavoriteItems,
	id,
	plot,
	setOpen,
	setWatch,
}) {
	const [buttonAddFavorite, setButtonAddFavorite] = React.useState(false);

	const showMovie = () => {
		setWatch(id);
		setOpen(true);
	};

	React.useEffect(() => {
		const itemsTemp = localStorage.getItem('items');
		const itemsTempArr = JSON.parse(itemsTemp);

		itemsTempArr.map(item => {
			if (item.id === id) {
				setButtonAddFavorite(true);
			}
		});
	}, []);

	const addFavorite = () => {
		setButtonAddFavorite(true);
		setFavoriteItems([
			...favoriteItems,
			{
				id,
				titleText,
				primaryImage,
				releaseYear,
				genres,
				setFavoriteItems,
				plot,
			},
		]);
	};

	const removeFavorite = () => {
		setButtonAddFavorite(false);
		setFavoriteItems(favoriteItems.filter(item => item.id !== id));
	};

	return (
		<div className={classes.movieItem}>
			<img
				width={'224px'}
				hieght={'323px'}
				src={primaryImage === null ? '' : primaryImage.url}
				alt='⚠️NO_IMAGE'
			/>
			<div className={classes.descItem}>
				<h1>{titleText.text}</h1>
				<p>{releaseYear === null ? 'No info' : releaseYear.year}</p>
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

			<div className={classes.buttonAndWatch}>
				<button className={classes.addToFavorite}>
					{!buttonAddFavorite ? (
						<AiOutlineStar
							onClick={() => {
								addFavorite();
							}}
						/>
					) : (
						<AiFillStar
							onClick={() => {
								removeFavorite();
							}}
						/>
					)}
				</button>

				<p className={classes.watchThis} onClick={showMovie}>
					Watch
				</p>
			</div>
		</div>
	);
}

export default MovieItem;

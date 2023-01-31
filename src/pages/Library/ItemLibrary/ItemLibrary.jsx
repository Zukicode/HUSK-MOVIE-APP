import React from 'react';

//styles
import classes from './ItemLibrary.module.scss';

const ItemLibrary = ({
	id,
	primaryImage,
	releaseYear,
	titleText,
	genres,
	plot,
	setFavoriteItems,
	favoriteItems,
}) => {
	const removeFromLibrary = () => {
		const itemsTemp = localStorage.getItem('items');
		const itemsTempArr = JSON.parse(itemsTemp);

		const resultItems = itemsTempArr.filter(item => item.id !== id);

		setFavoriteItems(resultItems);
	};

	return (
		<div className={classes.itemLibrary}>
			<img src={primaryImage.url} alt='poster' />
			<div className={classes.descItem}>
				<h1>{titleText.text}</h1>
				<p style={{ textAlign: 'center' }}>{releaseYear.year}</p>
				<p>{plot.plotText.plainText}</p>
			</div>
			<div className={classes.genres}>
				{genres.genres.length >= 3 ? (
					<>
						<span key={genres.genres[0].text}>{genres.genres[0].text}</span>
						<span key={genres.genres[1].text}>{genres.genres[1].text}</span>
						<span key={genres.genres[2].text}>{genres.genres[2].text}</span>
					</>
				) : (
					genres.genres.map(genre => {
						return <span key={genre.text}>{genre.text}</span>;
					})
				)}
			</div>
			<button className={classes.remove} onClick={removeFromLibrary}>
				Remove
			</button>
		</div>
	);
};

export default ItemLibrary;

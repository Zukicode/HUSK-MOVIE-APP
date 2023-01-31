import React from 'react';

//styles
import { MdOutlineVideoLibrary } from 'react-icons/md';
import ItemLibrary from './ItemLibrary/ItemLibrary';
import classes from './Library.module.scss';

const Library = ({ favoriteItems, setFavoriteItems }) => {
	return (
		<div className={classes.content}>
			<div className={classes.logo}>
				<MdOutlineVideoLibrary className={classes.icon} />
				<h1>Library</h1>
			</div>

			{favoriteItems.length === 0 && (
				<div className={classes.emptyLibrary}>
					<div className={classes.logoEmpty}>
						<span>📽️</span>
						<h1>Your library is empty!</h1>
					</div>
					<p>
						Щоб добавити в вашу бібліотека фільм чи серіал, ви можете зайти в
						Series чи Movie знайти та кнопоку в вигляді зірки та нажати, щоб
						добавити!
					</p>
				</div>
			)}

			<div className={classes.listLibrary}>
				{favoriteItems.map(item => {
					return (
						<ItemLibrary
							setFavoriteItems={setFavoriteItems}
							key={item.id}
							{...item}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Library;

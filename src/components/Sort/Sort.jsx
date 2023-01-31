import React, { useRef } from 'react';

//Components
import Search from './../../components/UI/Search';

//styles
import classes from './Sort.module.scss';
import { MdOutlineExpandMore } from 'react-icons/md';

//Massive sort
const genresSort = [
	'Action',
	'Drama',
	'Horror',
	'Comedy',
	'Crime',
	'Adventure',
	'Fantasy',
	'Thriller',
	'Animation',
	'Sci-Fi',
	'Sport',
];

const Sort = ({ search, setSearch, genresActive, setGenresActive }) => {
	const [open, setOpen] = React.useState(false);

	const sortRef = useRef();

	React.useEffect(() => {
		const handleClickOutside = event => {
			let path = event.composedPath().includes(sortRef.current);
			if (!path) setOpen(false);
		};

		document.body.addEventListener('click', handleClickOutside);

		//Якщо ми закриваємо наше modal window, то ми очищаємо наш Listener
		return () => document.body.removeEventListener('click', handleClickOutside);
	}, []);

	return (
		<div className={classes.sort}>
			<Search search={search} setSearch={setSearch} />

			<div ref={sortRef} className={classes.sortByGenres}>
				<div className={classes.titleSort} onClick={() => setOpen(!open)}>
					<MdOutlineExpandMore />
					<p>
						Category: <span>{genresActive}</span>
					</p>
				</div>
				{open ? (
					<div className={classes.allGenres}>
						{genresSort.map((el, i) => {
							return (
								<div
									key={i}
									style={el === genresActive ? { color: 'gold' } : {}}
									onClick={() => setGenresActive(el)}
									value={el}>
									{el}
								</div>
							);
						})}
					</div>
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default Sort;

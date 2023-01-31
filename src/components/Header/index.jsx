import React from 'react';
import { GoHome } from 'react-icons/go';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import { RiMovie2Line } from 'react-icons/ri';
import { BiMoviePlay } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import classes from './Header.module.scss';

const Header = () => {
	return (
		<div className={classes.header}>
			<div className={classes.logo}>
				<img src='favicon.png' alt='logo' width='50px' height='50px' />
			</div>

			<div className={classes.menu}>
				<ul>
					<li>
						<Link to='/'>
							<GoHome className={classes.iconHome} />
						</Link>
					</li>

					<li>
						<Link to='/library'>
							<MdOutlineVideoLibrary className={classes.iconLibrary} />
						</Link>
					</li>

					<li>
						<Link to='/movie'>
							<BiMoviePlay className={classes.iconLibrary} />
						</Link>
					</li>

					<li>
						<Link to='/series'>
							<RiMovie2Line className={classes.iconLibrary} />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;

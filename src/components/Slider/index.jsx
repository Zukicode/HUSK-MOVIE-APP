import React, { useMemo } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import classes from './Slider.module.scss';
import SliderItem from './SliderItem/SliderItem';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9e867b2923msh8f17763c8e9c08ap173a34jsn799b267eaa5b',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
	},
};

const Slider = () => {
	const [items, setItems] = React.useState([]);
	const [sliderCord, setSliderCord] = React.useState(0);

	const [modalWindow, setModalWindow] = React.useState(false);

	const toggleModalWindow = () => {
		setModalWindow(!modalWindow);
	};

	//Slider button
	const sliderTop = () => {
		sliderCord === 0 ? setSliderCord(-4680) : setSliderCord(sliderCord + 520);
	};

	const sliderBottom = () => {
		sliderCord === -4680 ? setSliderCord(0) : setSliderCord(sliderCord - 520);
	};

	//Timer for slider swipe
	React.useEffect(() => {
		if (modalWindow === false) {
			const interval = setInterval(() => {
				setSliderCord(prev => {
					if (prev === -4680) {
						return 0;
					} else {
						return prev - 520;
					}
				});
			}, 2000);
			return () => clearInterval(interval);
		}
	}, [modalWindow]);

	React.useEffect(() => {
		fetch(
			'https://moviesdatabase.p.rapidapi.com/titles/?info=custom_info&sort=pos.incr&list=top_rated_english_250&limit=10',
			options
		)
			.then(response => {
				return response.json();
			})
			.then(data => setItems(data.results));
	}, []);
	return (
		<div className={classes.slider}>
			{items.map(el => {
				return (
					<SliderItem
						key={el.id}
						toggleModalWindow={toggleModalWindow}
						modalWindow={modalWindow}
						setModalWindow={setModalWindow}
						sliderCord={sliderCord}
						{...el}
					/>
				);
			})}

			<button className={classes.buttonLeft} onClick={sliderTop}>
				<BsArrowLeft />
			</button>
			<button className={classes.buttonRight} onClick={sliderBottom}>
				<BsArrowRight />
			</button>
		</div>
	);
};

export default Slider;

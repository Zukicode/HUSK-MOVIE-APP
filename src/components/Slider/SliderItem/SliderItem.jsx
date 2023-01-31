import React from 'react';

//styles
import classes from './../Slider.module.scss';

//Component for SliderItem
import SliderDetalies from './SliderDetalies/SliderDetalies';
import SliderImage from './SliderImage/SliderImage';

const SliderItem = ({
	sliderCord,
	plot,
	primaryImage,
	genres,
	releaseDate,
	titleText,
	trailer,
	toggleModalWindow,
	modalWindow,
	setModalWindow,
}) => {
	return (
		<div style={{ top: sliderCord }} className={classes.sliderItem}>
			<SliderDetalies
				titleText={titleText.text}
				plainText={plot.plotText.plainText}
				releaseDate={releaseDate}
				genres={genres}
				toggleModalWindow={toggleModalWindow}
			/>

			<SliderImage
				modalWindow={modalWindow}
				setModalWindow={setModalWindow}
				primaryImage={primaryImage}
				trailer={trailer}
			/>
		</div>
	);
};

export default SliderItem;

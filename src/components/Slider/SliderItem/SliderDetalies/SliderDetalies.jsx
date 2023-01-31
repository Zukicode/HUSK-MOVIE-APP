import React from 'react';

//Component for SliderDetalies
import ReleaseDate from './RelaseData/RelaseData';
import TypeMovie from './TypeMovie/TypeMovie';
import ButtonTrailer from './ButtonTrailer/ButtonTrailer';

//styles
import classes from './SliderDetalies.module.scss';

const SliderDetalies = ({ titleText, plainText, releaseDate, genres, toggleModalWindow }) => {
  return (
    <div className={classes.sliderDetalies}>
      <div className={classes.description}>
        <h1>{titleText}</h1>
        <p className={classes.detaliesMovie}>{plainText}</p>

        <ReleaseDate releaseDate={releaseDate} />
        <TypeMovie genres={genres} />
        <ButtonTrailer toggleModalWindow={toggleModalWindow} />
      </div>
    </div>
  );
};

export default SliderDetalies;

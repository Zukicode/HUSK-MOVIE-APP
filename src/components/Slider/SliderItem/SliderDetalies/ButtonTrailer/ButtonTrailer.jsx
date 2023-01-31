import React from 'react';

//styles
import classes from './ButtonTrailer.module.scss';

const ButtonTrailer = ({ toggleModalWindow }) => {
  return (
    <button className={classes.btnTrailer} onClick={() => toggleModalWindow()}>
      <img
        src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png"
        alt="yt"
        width={'20px'}
      />
      <p>Trailer</p>
    </button>
  );
};

export default ButtonTrailer;

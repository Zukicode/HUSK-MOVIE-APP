import React from 'react';

//styles
import classes from './TypeMovie.module.scss';

const TypeMovie = ({ genres }) => {
  return (
    <div className={classes.typeMovie}>
      {genres.genres.map((el) => {
        return <span key={el.text}>{el.text}</span>;
      })}
    </div>
  );
};

export default TypeMovie;

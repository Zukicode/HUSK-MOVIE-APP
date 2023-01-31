import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

//styles
import classes from './RelaseData.module.scss';

const RelaseData = ({ releaseDate }) => {
  return (
    <div className={classes.relaseData}>
      <div className={classes.year}>{releaseDate.year}</div>
      <div className={classes.month}>Month: {releaseDate.month}</div>
      <div className={classes.day}>Day: {releaseDate.day}</div>
      <BsArrowRight className={classes.iconRelase} />
      <p>Release Data</p>
    </div>
  );
};

export default RelaseData;

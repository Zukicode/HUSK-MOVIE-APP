import React from 'react';
import classes from './SliderImage.module.scss';
import SliderModal from '../SliderModal/SliderModal';

const SliderImage = ({ primaryImage, trailer, modalWindow, setModalWindow }) => {
  return (
    <>
      {modalWindow ? (
        <div className={classes.contentTrailer}>
          <SliderModal trailer={trailer} />
        </div>
      ) : (
        <div className={classes.sliderImage}>
          <img src={primaryImage.url} alt="imagePoster" width="400px" height="500px" />
        </div>
      )}
    </>
  );
};

export default SliderImage;

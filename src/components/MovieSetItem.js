import React from 'react';
import Ripples from 'react-ripples';

export const MovieSetItem = (props) => {
  const { movie, onClick } = props;
  return (
    <>
      <Ripples during={1800}>
        <div className="MovieSetItem" onClick={onClick}>
          <span className="MovieTime">{movie.time}</span>
          <span className="MovieType">{movie.type}</span>
          <span className="MoviePrice">${movie.price}</span>
        </div>
      </Ripples>
    </>
  );
};

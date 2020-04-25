import React from 'react';
import Ripples from 'react-ripples';

export const MovieSetItem = (props) => {
  const { movie } = props;
  return (
    <div className="MovieSetItem">
      <Ripples during={1800}>
        <span className="MovieTime">{movie.time}</span>
        <span className="MovieType">{movie.type}</span>
        <span className="MoviePrice">${movie.price}</span>
      </Ripples>
    </div>
  );
};

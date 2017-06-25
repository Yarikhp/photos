import React from 'react';
import PropTypes from 'prop-types';

import './Tile.css';

const Tile = props => {
  const decreaseRating = (e, decreaseRating) => {
    e.preventDefault();
    decreaseRating();
  };

  const style = {
    backgroundImage: `url(${props.src})`
  };

  return (
    <div className="tile" onClick={props.increaseRating} onContextMenu={(e) => decreaseRating(e, props.decreaseRating)} style={style}>
      <div className="tile__content">
        <span className="tile__rating">
          {props.rating}
        </span>
      </div>
    </div>
  );
};

Tile.propTypes = {
  rating: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  increaseRating: PropTypes.func.isRequired,
  decreaseRating: PropTypes.func.isRequired,
};

export default Tile;

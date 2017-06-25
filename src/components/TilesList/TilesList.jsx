import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

import Tile from './../../components/Tile/Tile';

import './TilesList.css';

const TilesList = props => {
  return (
    <Masonry className="container">
      {
        props.images.sort((a, b) => b.rating - a.rating).map(image =>
          <Tile
            key={image.id}
            src={image.src}
            rating={image.rating}
            increaseRating={() => props.increaseRating(image.id)}
            decreaseRating={() => props.decreaseRating(image.id)}
          />
        )
      }
    </Masonry>
  );
};

TilesList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired
  })).isRequired,
  increaseRating: PropTypes.func.isRequired,
  decreaseRating: PropTypes.func.isRequired,
};

export default TilesList;

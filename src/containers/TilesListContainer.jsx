import { connect } from 'react-redux';

import { increaseRating, decreaseRating } from './../actions';

import TilesList from './../components/TilesList/TilesList';

const mapStateToProps = (state) => ({
  images: state
});

const mapDispatchToProps = (dispatch) => ({
    increaseRating: id => dispatch(increaseRating(id)),
    decreaseRating: id => dispatch(decreaseRating(id))
});

const TilesListContainer = connect(mapStateToProps, mapDispatchToProps)(TilesList);

export default TilesListContainer;

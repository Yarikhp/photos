import {
  INCREASE_RATING,
  DECREASE_RATING
} from './../constants';

const images = (state, action) => {
  switch (action.type) {

    case INCREASE_RATING:
      return state.map(image => {
        if (image.id === action.id) {
          return { ...image, rating: ++image.rating };
        }
        return image;
      })

    case DECREASE_RATING:
      return state.map(image => {
        if (image.id === action.id) {
          return { ...image, rating: --image.rating };
        }
        return image;
      })

    default:
      return state;
  }
}

export default images;

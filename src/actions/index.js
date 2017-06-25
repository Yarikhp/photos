import { INCREASE_RATING, DECREASE_RATING } from './../constants';

export function increaseRating(id) {
  return {
    type: INCREASE_RATING,
    id
  }
}

export function decreaseRating(id) {
  return {
    type: DECREASE_RATING,
    id
  }
}


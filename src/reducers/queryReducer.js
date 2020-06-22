import { UPDATE_PARAMS } from '../actionTypes';
import {
  CHARACTER,
  CHARACTER_COMICS,
  CHARACTER_EVENTS,
  CHARACTER_SERIES,
  CHARACTER_STORIES
 } from '../constants/characterTypes';

const initialQueryState = {
  limit: 100,
  offset: 0
}

const initialState = {
  [CHARACTER]: {
    limit: 12,
    offset: 0,
    start: '',
  },
  [CHARACTER_COMICS]: { ...initialQueryState },
  [CHARACTER_EVENTS]: { ...initialQueryState },
  [CHARACTER_SERIES]: { ...initialQueryState },
  [CHARACTER_STORIES]: { ...initialQueryState },
};

/**
 * This reducer keeps references to all the queries
 */
const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PARAMS: {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: { ...value }
      } 
    }
    default: {
      return state;
    }
  }
};

export default queryReducer;

import {
  ADD_TO_COLLECTION,
  FETCH_COLLECTION,
  FETCH_COLLECTION_FAILURE,
  RESET_COLLECTION,
  SET_COLLECTION,
  SET_COLLECTION_ELEMENT,
  UPDATE_PARAMS
} from '../actionTypes';
import {
  CHARACTER,
  CHARACTER_COMICS,
  CHARACTER_EVENTS,
  CHARACTER_SERIES,
  CHARACTER_STORIES
 } from '../constants/characterTypes';

const initialState = {
  [CHARACTER]: false,
  [CHARACTER_COMICS]: false,
  [CHARACTER_EVENTS]: false,
  [CHARACTER_SERIES]: false,
  [CHARACTER_STORIES]: false,
};

/**
 * This reducer keeps references to all the loaders
 */
const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTION: {
      const { name } = action.payload;
      return {
        ...state,
        [name]: true
      };
    }
		case ADD_TO_COLLECTION:
		case FETCH_COLLECTION_FAILURE:
    case SET_COLLECTION:
		case SET_COLLECTION_ELEMENT:
		case RESET_COLLECTION: {
      const { name } = action.payload;
      return {
        ...state,
        [name]: false
      };
    }
    case UPDATE_PARAMS: {
      return {
				...state
			}
    }
    default: {
      return state;
    }
  }
};

export default loaderReducer;

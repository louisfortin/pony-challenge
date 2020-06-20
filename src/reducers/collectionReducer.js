import {
  FETCH_COLLECTION,
  FETCH_COLLECTION_FAILURE,
  RESET_COLLECTION,
  SET_COLLECTION,
  SET_COLLECTION_ELEMENT
} from '../actionTypes';
import {
  CHARACTER,
  CHARACTER_COMICS,
  CHARACTER_EVENTS,
  CHARACTER_SERIES,
  CHARACTER_STORIES
 } from '../constants/characterTypes';
import { replaceOrAddCollectionElement } from './index';

export const initialCollectionState = [];

const initialState = {
  [CHARACTER]: [ ...initialCollectionState ],
  [CHARACTER_COMICS]: [ ...initialCollectionState ],
  [CHARACTER_EVENTS]: [ ...initialCollectionState ],
  [CHARACTER_SERIES]: [ ...initialCollectionState ],
  [CHARACTER_STORIES]: [ ...initialCollectionState ],
  loader: false,
  error: null,
};

/**
 * This reducer keeps references to certain collections of data
 */
const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTION: {
      return {
        ...state,
        loader: true
      };
    }
    case FETCH_COLLECTION_FAILURE: {
      const { err } = action.payload;
      return {
        ...state,
        loader: false,
        error: err
      };
    }
    case SET_COLLECTION: {
      const { name, values } = action.payload;
      return {
        ...state,
        [name]: [ ...values ],
        loader: false,
        error: null
      };
    }
    case SET_COLLECTION_ELEMENT: {
      const { name, value, idAttr } = action.payload;
      return {
        ...state,
        [name]: replaceOrAddCollectionElement(state[name], value, idAttr),
        loader: false,
        error: null
      };
    }
    case RESET_COLLECTION: {
      const { name } = action.payload;
      return {
        ...state,
        [name]: [ ...initialCollectionState ],
        loader: false,
        error: null
      };
    }
    default: {
      return state;
    }
  }
};

export default collectionReducer;

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
import {
  addNonExistingElements,
  replaceOrAddCollectionElement
} from './index';

export const initialCollectionState = [];

const initialState = {
  [CHARACTER]: [ ...initialCollectionState ],
  [CHARACTER_COMICS]: [ ...initialCollectionState ],
  [CHARACTER_EVENTS]: [ ...initialCollectionState ],
  [CHARACTER_SERIES]: [ ...initialCollectionState ],
  [CHARACTER_STORIES]: [ ...initialCollectionState ],
  loader: false,
  params: {
    [CHARACTER]: {
      limit: 12,
      offset: 0,
      start: ''
    }
  },
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
    case ADD_TO_COLLECTION: {
      const { name, values, idAttr } = action.payload;
      return {
        ...state,
        [name]: addNonExistingElements(state[name], values, idAttr),
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
    case UPDATE_PARAMS: {
      const { name, value } = action.payload;
      return {
        ...state,
        params: {
          ...state.params,
          [name]: { ...value }
        }
      } 
    }
    default: {
      return state;
    }
  }
};

export default collectionReducer;

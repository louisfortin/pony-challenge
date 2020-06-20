import { RESET_COLLECTION, SET_COLLECTION, SET_COLLECTION_ELEMENT } from '../actionTypes';
import { ARTICLES, WHISKEYS } from '../constants/productTypes';
import { replaceOrAddCollectionElement } from './index';

export const initialCollectionState = [];

const initialState = {
  [ARTICLES]: [ ...initialCollectionState ],
	[WHISKEYS]: [ ...initialCollectionState ]
};

/**
 * This reducer keeps references to certain collections of data
 */
const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    // @deprecated. Still here for BC.
    case SET_COLLECTION: {
      const { name, values } = action.payload;
      return {
        ...state,
        [name]: [ ...values ]
      };
    }
    case SET_COLLECTION_ELEMENT: {
      const { name, value, idAttr } = action.payload;
      return {
        ...state,
        [name]: replaceOrAddCollectionElement(state[name], value, idAttr)
      };
    }
    case RESET_COLLECTION: {
      const { name } = action.payload;
      return {
        ...state,
        [name]: [ ...initialCollectionState ]
      };
    }
    default: {
      return state;
    }
  }
};

export default collectionReducer;

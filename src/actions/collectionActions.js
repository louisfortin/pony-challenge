import { SET_COLLECTION, SET_COLLECTION_ELEMENT } from '../actionTypes';

export const setProductCollection = (name, values) => ({
  type: SET_COLLECTION,
  payload: {
    name,
  	values
  }
});

export const setProductCollectionElement = (name, value, idAttr) => ({
  type: SET_COLLECTION_ELEMENT,
  payload: {
    name,
    value,
    idAttr
  }
});
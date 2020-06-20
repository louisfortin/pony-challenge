import { SET_COLLECTION, SET_COLLECTION_ELEMENT } from '../actionTypes';

export const setCharacterCollection = (name, values) => ({
  type: SET_COLLECTION,
  payload: {
    name,
  	values
  }
});

export const setCharacterCollectionElement = (name, value, idAttr) => ({
  type: SET_COLLECTION_ELEMENT,
  payload: {
    name,
    value,
    idAttr
  }
});
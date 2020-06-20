import {
  FETCH_COLLECTION,
  FETCH_COLLECTION_FAILURE,
  SET_COLLECTION,
  SET_COLLECTION_ELEMENT
} from '../actionTypes';

export const fetchHeroes = () => ({
  type: FETCH_COLLECTION
});

export const fetchHeroFail = (err) => ({
  type: FETCH_COLLECTION_FAILURE,
  payload: {
    err
  }
})

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
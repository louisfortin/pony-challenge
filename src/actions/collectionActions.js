import {
  ADD_TO_COLLECTION,
  FETCH_COLLECTION,
  FETCH_COLLECTION_FAILURE,
  SET_COLLECTION,
  SET_COLLECTION_ELEMENT,
  UPDATE_PARAMS
} from '../actionTypes';

export const fetchCharactersAction = (name) => ({
  type: FETCH_COLLECTION,
  payload: {
    name
  }
});

export const fetchCharactersFail = (err, name) => ({
  type: FETCH_COLLECTION_FAILURE,
  payload: {
    name,
    err
  }
});

export const addCharactersToCollection = (name, values, idAttr) => ({
  type: ADD_TO_COLLECTION,
  payload: {
    name,
    values,
    idAttr
  }
});

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

export const updateParams = (name, value) => ({
  type: UPDATE_PARAMS,
  payload: {
    name,
    value
  }
});